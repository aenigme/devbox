<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');

/*
Directory Listing Script - Version 3
====================================
Script Author: Ash Young <ash@evoluted.net> / www.evoluted.net

REQUIREMENTS
============
This script requires PHP and GD2 if you wish to use the 
thumbnail functionality.

INSTRUCTIONS
============
1) Unzip all files 
2) Edit this file, making sure everything is setup as required.
3) Upload to server

CONFIGURATION
=============
Edit the variables in this section to make the script work as
you require.

Include URL - If you are including this script in another file, 
please define the URL to the Directory Listing script (relative
from the host)
*/
$includeurl = '/pages/inc/';

/*
Start Directory - To list the files contained within the current 
directory enter '.', otherwise enter the path to the directory 
you wish to list. The path must be relative to the current 
directory and cannot be above the location of index.php within the 
directory structure.
*/
$startdir = DOC_ROOT . '/pages/inc/';

/*
Show Thumbnails? - Set to true if you wish to use the 
scripts auto-thumbnail generation capabilities.
This requires that GD2 is installed.
*/
$showthumbnails = true; 

/*
Memory Limit - The image processor that creates the thumbnails
may require more memory than defined in your PHP.INI file for 
larger images. If a file is too large, the image processor will
fail and not generate thumbs. If you require more memory, 
define the amount (in megabytes) below
*/
$memorylimit = false; // Integer

/*
Show Directories - Do you want to make subdirectories available?
If not set this to false
*/
$showdirs = true;

/* 
Force downloads - Do you want to force people to download the files
rather than viewing them in their browser?
*/
$forcedownloads = false;

/*
Hide Files - If you wish to hide certain files or directories 
then enter their details here. The values entered are matched
against the file/directory names. If any part of the name 
matches what is entered below then it is not shown.
*/
$hide = array('dlf');
			
/* Only Display Files With Extension... - if you only wish the user
to be able to view files with certain extensions, add those extensions
to the following array. If the array is commented out, all file
types will be displayed.
*/
$showtypes = array('html');
			 
/* 
Show index files - if an index file is found in a directory
to you want to display that rather than the listing output 
from this script?
*/			
$displayindex = false;

/*
Allow uploads? - If enabled users will be able to upload 
files to any viewable directory. You should really only enable
this if the area this script is in is already password protected.
*/
$allowuploads = false;

/* Upload Types - If you are allowing uploads but only want
users to be able to upload file with specific extensions,
you can specify these extensions below. All other file
types will be rejected. Comment out this array to allow
all file types to be uploaded.
*/
/*$uploadtypes = array(
						'zip',
						'gif',
						'doc',
						'png'
					);*/

/*
Overwrite files - If a user uploads a file with the same
name as an existing file do you want the existing file
to be overwritten?
*/
$overwrite = false;

/*
Index files - The follow array contains all the index files
that will be used if $displayindex (above) is set to true.
Feel free to add, delete or alter these
*/

$indexfiles = array (
				'index.html',
				'index.htm',
				'default.htm',
				'default.html'
			);
			
/*
File Icons - If you want to add your own special file icons use 
this section below. Each entry relates to the extension of the 
given file, in the form <extension> => <filename>. 
These files must be located within the dlf directory.
*/
$filetypes = array (
				'png' => 'jpg.gif',
				'jpeg' => 'jpg.gif',
				'bmp' => 'jpg.gif',
				'jpg' => 'jpg.gif', 
				'gif' => 'gif.gif',
				'zip' => 'archive.png',
				'rar' => 'archive.png',
				'exe' => 'exe.gif',
				'setup' => 'setup.gif',
				'txt' => 'text.png',
				'htm' => 'html.gif',
				'html' => 'html.gif',
				'fla' => 'fla.gif',
				'swf' => 'swf.gif',
				'xls' => 'xls.gif',
				'doc' => 'doc.gif',
				'sig' => 'sig.gif',
				'fh10' => 'fh10.gif',
				'pdf' => 'pdf.gif',
				'psd' => 'psd.gif',
				'rm' => 'real.gif',
				'mpg' => 'video.gif',
				'mpeg' => 'video.gif',
				'mov' => 'video2.gif',
				'avi' => 'video.gif',
				'eps' => 'eps.gif',
				'gz' => 'archive.png',
				'asc' => 'sig.gif',
			);
			
/*
That's it! You are now ready to upload this script to the server.

Only edit what is below this line if you are sure that you know what you
are doing!
*/

if($includeurl)
{
	// $includeurl = preg_replace("/^\//", "${1}", $includeurl);
	if(substr($includeurl, strrpos($includeurl, '/')) != '/') $includeurl.='/';
}

error_reporting(0);
if(!function_exists('imagecreatetruecolor')) $showthumbnails = false;
if($startdir) $startdir = preg_replace("/^\//", "${1}", $startdir);
$leadon = $startdir;
if($leadon=='.') $leadon = '';
if((substr($leadon, -1, 1)!='/') && $leadon!='') $leadon = $leadon . '/';
$startdir = $leadon;

if($_GET['dir']) {
	//check this is okay.
	
	if(substr($_GET['dir'], -1, 1)!='/') {
		$_GET['dir'] = strip_tags($_GET['dir']) . '/';
	}
	
	$dirok = true;
	$dirnames = split('/', strip_tags($_GET['dir']));
	for($di=0; $di<sizeof($dirnames); $di++) {
		
		if($di<(sizeof($dirnames)-2)) {
			$dotdotdir = $dotdotdir . $dirnames[$di] . '/';
		}
		
		if($dirnames[$di] == '..') {
			$dirok = false;
		}
	}
	
	if(substr($_GET['dir'], 0, 1)=='/') {
		$dirok = false;
	}
	
	if($dirok) {
		 $leadon = $leadon . strip_tags($_GET['dir']);
	}
}

if($_GET['download'] && $forcedownloads) {
	$file = str_replace('/', '', $_GET['download']);
	$file = str_replace('..', '', $file);

	if(file_exists($includeurl . $leadon . $file)) {
		header("Content-type: application/x-download");
		header("Content-Length: ".filesize($includeurl . $leadon . $file)); 
		header('Content-Disposition: attachment; filename="'.$file.'"');
		readfile($includeurl . $leadon . $file);
		die();
	}
	die();
}

if($allowuploads && $_FILES['file']) {
	$upload = true;
	if(!$overwrite) {
		if(file_exists($leadon.$_FILES['file']['name'])) {
			$upload = false;
		}
	}
	
	if($uploadtypes)
	{
		if(!in_array(substr($_FILES['file']['name'], strpos($_FILES['file']['name'], '.')+1, strlen($_FILES['file']['name'])), $uploadtypes))
		{
			$upload = false;
			$uploaderror = "<strong>ERROR: </strong> You may only upload files of type ";
			$i = 1;
			foreach($uploadtypes as $k => $v)
			{
				if($i == sizeof($uploadtypes) && sizeof($uploadtypes) != 1) $uploaderror.= ' and ';
				else if($i != 1) $uploaderror.= ', ';
				
				$uploaderror.= '.'.strtoupper($v);
				
				$i++;
			}
		}
	}
	
	if($upload) {
		move_uploaded_file($_FILES['file']['tmp_name'], $includeurl.$leadon . $_FILES['file']['name']);
	}
}

$opendir = $includeurl.$leadon;

if(!$leadon) $opendir = $opendir = DOC_ROOT . '/pages/inc/';;
if(!file_exists($opendir)) {
	$opendir = $opendir = DOC_ROOT . '/pages/inc/';;
	$leadon = $startdir;
}

clearstatcache();
if ($handle = opendir($opendir)) {
	while (false !== ($file = readdir($handle))) { 
		//first see if this file is required in the listing
		if ($file == "." || $file == "..")  continue;
		$discard = false;
		for($hi=0;$hi<sizeof($hide);$hi++) {
			if(strpos($file, $hide[$hi])!==false) {
				$discard = true;
			}
		}
		
		if($discard) continue;
		if (@filetype($includeurl.$leadon.$file) == "dir") {
			if(!$showdirs) continue;
		
			$n++;
			if($_GET['sort']=="date") {
				$key = @filemtime($includeurl.$leadon.$file) . ".$n";
			}
			else {
				$key = $n;
			}
			$dirs[$key] = $file . "/";
		}
		else {
			$n++;
			if($_GET['sort']=="date") {
				$key = @filemtime($includeurl.$leadon.$file) . ".$n";
			}
			elseif($_GET['sort']=="size") {
				$key = @filesize($includeurl.$leadon.$file) . ".$n";
			}
			else {
				$key = $n;
			}
			
			if($showtypes && !in_array(substr($file, strpos($file, '.')+1, strlen($file)), $showtypes)) unset($file);
			if($file) $files[$key] = $file;
			
			if($displayindex) {
				if(in_array(strtolower($file), $indexfiles)) {
					header("Location: $leadon$file");
					die();
				}
			}
		}
	}
	closedir($handle); 
}

//sort our files
if($_GET['sort']=="date") {
	@ksort($dirs, SORT_NUMERIC);
	@ksort($files, SORT_NUMERIC);
}
elseif($_GET['sort']=="size") {
	@natcasesort($dirs); 
	@ksort($files, SORT_NUMERIC);
}
else {
	@natcasesort($dirs); 
	@natcasesort($files);
}

//order correctly
if($_GET['order']=="desc" && $_GET['sort']!="size") {$dirs = @array_reverse($dirs);}
if($_GET['order']=="desc") {$files = @array_reverse($files);}
$dirs = @array_values($dirs); $files = @array_values($files);

$page_title = '&raquo; Template Listing';
require_once DIR_VIEW . '/devbox/_header.php'; 
require_once DIR_VIEW . '/devbox/_navigation.php';

?>

<div class="wrapper">
	<div class="container">
		<div class="row">
			<div class="span10">
			
				<?php if (!$Error->ok()): ?>
					<div class="row">
						<div style="width: 562px; margin: 0 auto;">
							<div class="alert-message error">
								<?php foreach ($Error->errors as $k => $v): ?>
									<p><?= $v; ?></p>
								<?php endforeach ?>
						    </div>
						</div>
					</div>
				<?php endif ?>
					
				<div class="row">
		
					<?php if ($showthumbnails): ?>
						<script language="javascript" type="text/javascript">
							function o(n, i) {
								document.images['thumb'+n].src = '<?php echo $includeurl; ?>dlf/i.php?f='+i<?php if($memorylimit!==false) echo "+'&ml=".$memorylimit."'"; ?>;
							}

							function f(n) {
								document.images['thumb'+n].src = 'dlf/trans.gif';
							}
						</script>
					<?php endif ?>

				  	<h2>Template Listings for</h2>
					<h3><?php echo '/' . $leadon;?></h3>
				  	<div id="breadcrumbs"><a href="<?php echo strip_tags($_SERVER['PHP_SELF']);?>">home</a> 
				  		<?php
						 	 $breadcrumbs = split('/', str_replace($startdir, '', $leadon));
						  	if(($bsize = sizeof($breadcrumbs))>0) {
						  		$sofar = '';
						  		for($bi=0;$bi<($bsize-1);$bi++) {
									$sofar = $sofar . $breadcrumbs[$bi] . '/';
									echo ' &gt; <a href="'.strip_tags($_SERVER['PHP_SELF']).'?dir='.urlencode($sofar).'">'.$breadcrumbs[$bi].'</a>';
								}
						  	}
 
							$baseurl = strip_tags($_SERVER['PHP_SELF']) . '?dir='.strip_tags($_GET['dir']) . '&amp;';
							$fileurl = 'sort=name&amp;order=asc';
							$sizeurl = 'sort=size&amp;order=asc';
							$dateurl = 'sort=date&amp;order=asc';

							switch ($_GET['sort']) {
								case 'name':
									if($_GET['order']=='asc') $fileurl = 'sort=name&amp;order=desc';
									break;
								case 'size':
									if($_GET['order']=='asc') $sizeurl = 'sort=size&amp;order=desc';
									break;
		
								case 'date':
									if($_GET['order']=='asc') $dateurl = 'sort=date&amp;order=desc';
									break;  
								default:
									$fileurl = 'sort=name&amp;order=desc';
									break;
							}
						  ?>
				  	</div>
					<div id="listingcontainer">
						<div id="listingheader"> 
					<div id="headerfile"><a href="<?php echo $baseurl . $fileurl;?>">File</a></div>
					<div id="headersize"><a href="<?php echo $baseurl . $sizeurl;?>">Size</a></div>
					<div id="headermodified"><a href="<?php echo $baseurl . $dateurl;?>">Last Modified</a></div>
					</div>
						<div id="listing">
					<?php
					$class = 'b';
					if($dirok) {
					?>
					<div><a href="<?php echo strip_tags($_SERVER['PHP_SELF']).'?dir='.urlencode($dotdotdir);?>" class="<?php echo $class;?>"><img src="/assets/images/icons/dlf/dirup.png" alt="Folder" /><strong>..</strong> <em>&nbsp;</em>&nbsp;</a></div>
					<?php
						if($class=='b') $class='w';
						else $class = 'b';
					}
					$arsize = sizeof($dirs);
					for($i=0;$i<$arsize;$i++) {
					?>
					<div><a href="<?php echo strip_tags($_SERVER['PHP_SELF']).'?dir='.urlencode(str_replace($startdir,'',$leadon).$dirs[$i]);?>" class="<?php echo $class;?>"><img src="/assets/images/icons/dlf/folder.png" alt="<?php echo $dirs[$i];?>" /><strong><?php echo $dirs[$i];?></strong> <em>-</em> <?php echo date ("M d Y h:i:s A", filemtime($includeurl.$leadon.$dirs[$i]));?></a></div>
					<?php
						if($class=='b') $class='w';
						else $class = 'b';	
					}

					$arsize = sizeof($files);
					for($i=0;$i<$arsize;$i++) {
						$icon = 'unknown.png';
						$ext = strtolower(substr($files[$i], strrpos($files[$i], '.')+1));
						$supportedimages = array('gif', 'png', 'jpeg', 'jpg');
						$thumb = '';
	
						if($showthumbnails && in_array($ext, $supportedimages)) {
							$thumb = '<span><img src="/assets/images/icons/dlf/trans.gif" alt="'.$files[$i].'" name="thumb'.$i.'" /></span>';
							$thumb2 = ' onmouseover="o('.$i.', \''.urlencode($leadon . $files[$i]).'\');" onmouseout="f('.$i.');"';
		
						}
	
						if($filetypes[$ext]) {
							$icon = $filetypes[$ext];
						}
	
						$filename = $files[$i];
						if(strlen($filename)>43) {
							$filename = substr($files[$i], 0, 40) . '...';
						}
	
						$fileurl = $includeurl . $leadon . $files[$i];
						if($forcedownloads) {
							$fileurl = $_SESSION['PHP_SELF'] . '?dir=' . urlencode(str_replace($startdir,'',$leadon)) . '&download=' . urlencode($files[$i]);
						}

					?>
					<div><a href="/page/edit/<?php echo $filename;?>" class="<?php echo $class;?>"<?php echo $thumb2;?>><img src="/assets/images/icons/dlf/<?php echo $icon;?>" alt="<?php echo $files[$i];?>" /><strong><?php echo $filename;?></strong> <em><?php echo round(filesize($includeurl.$leadon.$files[$i])/1024);?>KB</em> <?php echo date ("M d Y h:i:s A", filemtime($includeurl.$leadon.$files[$i]));?><?php echo $thumb;?></a></div>
					<?php
						if($class=='b') $class='w';
						else $class = 'b';	
					}	
					?></div>
			
						<?php if ($allowuploads): ?>
							<?php
								$phpallowuploads = (bool) ini_get('file_uploads');		
								$phpmaxsize = ini_get('upload_max_filesize');
								$phpmaxsize = trim($phpmaxsize);
								$last = strtolower($phpmaxsize{strlen($phpmaxsize)-1});
								switch($last) {
									case 'g':
										$phpmaxsize *= 1024;
									case 'm':
										$phpmaxsize *= 1024;
								}
							?>
				
						<div id="upload">
							<div id="uploadtitle">
								<strong>File Upload</strong> (Max Filesize: <?php echo $phpmaxsize;?>KB)

								<?php if($uploaderror) echo '<div class="upload-error">'.$uploaderror.'</div>'; ?>
							</div>
							<div id="uploadcontent">
								<?php
								if($phpallowuploads) {
								?>
								<form method="post" action="<?php echo strip_tags($_SERVER['PHP_SELF']);?>?dir=<?php echo urlencode(str_replace($startdir,'',$leadon));?>" enctype="multipart/form-data">
								<input type="file" name="file" /> <input type="submit" value="Upload" />
								</form>
								<?php
								}
								else {
								?>
								File uploads are disabled in your php.ini file. Please enable them.
								<?php
								}
								?>
							</div>
						</div>
					<?php endif ?>
				</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>