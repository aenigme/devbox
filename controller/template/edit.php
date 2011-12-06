<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	if (isset($_POST['action']) && $_POST['action'] == 'save') 
	{ 
		$fh = fopen(DIR_PAGE . '/inc/'. $filename, 'w') or die("Error: Can't open file");
		$str = $Input->post('content');
		fwrite($fh, $str);
		fclose($fh);
		
		$filename = $Input->post('filename');
	} 
	else if (!isset($_POST['action'])) 
	{
		$filename = (isset($requestURI[3])) ? $requestURI[3] : $Error->add('Error', 'Missing filename. If this error continues, please contact the webmaster.');
	}
	
	// Open/Read template
	$fh = fopen(DIR_PAGE . '/inc/'. $filename, 'r');
	$str = fread($fh, filesize(DIR_PAGE . '/inc/'. $filename));
	fclose($fh);

	// Search/Load embeded XML script
	$str = strstr($str, 'application/xml');
	$str = strstr($str, '>');
	$i = strpos($str, '</script>');
	$str = substr($str, 1, $i - 1);
	
	// Load embedded template settings
	$template = new SimpleXMLElement($str);
	
	$default_toolbar = "'Source', '-', 'Bold','Italic','Underline','Strike','Superscript','-','RemoveFormat', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'Format', 'FontSize'";

	$page_title = '&raquo; Edit Template';

	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 	
?>

<div class="wrapper">
	<div class="container">
		<div class="row">
			<div class="span14">
			
				<?php if (!$Error->ok()): ?>
					<div class="alert-message error">
						<?php foreach ($Error->errors as $k => $v): ?>
							<p><?= $v; ?></p>
						<?php endforeach ?>
				    </div>
				<?php endif ?>
				
				<script type="text/javascript" charset="utf-8">
					$(function() {
						var config = {
							toolbar:
							[
								[ <?= set_default($template->toolbar, $default_toolbar) ?> ]
							]
						};

						$('#content').ckeditor(config);
					});
				</script>
				
				<form action="/template/edit/" method="post" enctype="multipart/form-data" accept-charset="utf-8" class="form-stacked">
					<input type="hidden" name="action" value="save">
					<input type="hidden" name="filename" value="<?= $filename ?>">

					<fieldset>
						<legend><h2>Edit <?= set_default($template->name, "Template") ?> <small><?= set_default($template->page) ?></small></h2></legend>
						<p><?= set_default($template->description) ?></p>
						<div class="clearfix">		
							<textarea rows="8" cols="40" id="content">
								<?php include_once DIR_PAGE . '/inc/' . $filename; ?>
							</textarea>
						</div>	
					</fieldset>

					<div class="actions">
						<a class="btn secondary" href="/template/list/">&laquo; Cancel</a>
						<input type="submit" value="Save Template &raquo;" class="btn primary"> 
					</div>
				</form>

</div></div></div></div>
<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>