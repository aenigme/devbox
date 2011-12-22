<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	$upload_dir = 'uploads/images';
	$thumbnail_dir = 'uploads/thumbnails';
	$temp_dir = 'uploads/temp';
    $size = '2048K';
    $type = array('jpg', 'jpeg');
    $remove_spaces = true;

	if (isset($_POST['action']) && $_POST['action'] == 'upload') // Upload image, resize and crop
	{
		$arr = explode(',', $Input->post('aspectratio'));
		$w = $arr[0];
		$h = $arr[1];

	    $file = Upload::save($_FILES['fileInput'], 
			array(
				'directory' => $temp_dir, 
				'size' => $size, 
				'type' => $type, 
				'remove_spaces' => $remove_spaces
			)
		);
		
		if ($file['status']) 
		{
			$img = new GD(DOC_ROOT . '/' . $temp_dir . '/' . $file['fileName']);
			$thumb = new GD(DOC_ROOT . '/' . $temp_dir . '/' . $file['fileName']);
		
			$img->scale($w,NULL);
			$thumb->scale(250,NULL);
		
			if ($img->width < $w || $img->height < $h) 
			{
				$img = new GD(DOC_ROOT . '/' . $temp_dir . '/' . $file['fileName']);
				$thumb = new GD(DOC_ROOT . '/' . $temp_dir . '/' . $file['fileName']);
			
				$img->scale(NULL,$h);
				$thumb->scale(NULL,150);
			}
			
			$img->cropCentered($w,$h);
			$img->saveAs(DOC_ROOT . '/' . $upload_dir . '/' . $file['fileName']);
		
			$thumb->cropCentered(210,150);
			$thumb->saveAs(DOC_ROOT . '/' . $thumbnail_dir . '/' . $file['fileName']);
		
			if (empty($file)) exit('error');
			$_POST['action'] = 'save';
		} 
		else if (!$file['status']) 
		{
			$_POST['action'] = 'upload';
			$Error->add('Upload', $file['error']);
		}
	}
	else if (isset($_POST['action']) && $_POST['action'] == 'save') // Save image to DB and store data (title, description, etc.)
	{
		$Error->blank($_POST['title'], 'Title');
		
		if($Error->ok())
		{
			$record = new Gallery();

			$record->user_id = $Auth->id;
			$record->location = '/' . $upload_dir . '/' . $Input->post('filename');
			$record->filename = $Input->post('filename');
			$record->title = $Input->post('title');
			$record->description = $Input->post('description');
			$record->client = $Input->post('client');
			$record->services = implode(',', $Input->post('service'));
			$record->insert_date = date('Y-m-d');
			$record->update_date = date('Y-m-d');
			$id = $record->insert(); // Insert record
			
			$Error->add('Congratulations! Your new image is now available in your gallery.', 'Congrats');
			redirect('/plugins/gallery');
		}
		else 
		{
			$_POST['action'] = 'save';
			$file['fileName'] =  $Input->post('filename');
		}
	}

	$service = array(
		'Brand / Digital Strategy',
	    'Brand Creation',
		'Visual Design',
	    'Interaction Design',
	    'Development',
		'User Needs Analysis',
	    'Solution Definition',
	    'User Needs Analysis',
	    'Insight &amp; Research',
	);
	
	$page_title = '&raquo; Upload Image';
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 	
?>
	
<div class="wrapper">
	<div class="container">

		<?php if (isset($file) && set_default($file['status'])): ?>
			<div class="alert-message success">
				<a href="#" class="close">×</a>
				<p><strong>Congratulations!</strong> Your image has been uploaded successfully.</p>
			</div>
		<?php elseif (!$Error->ok()): ?>
			<div class="alert-message error">
				<a class="close" href="#">×</a>
				<?php foreach ($Error->errors as $k => $v): ?>
					<p><?= $v[0]; ?></p>
				<?php endforeach ?>
			</div>
		<?php endif ?>
	
		<?php if (isset($_POST['action']) && $_POST['action'] == 'save'): ?>
			
			<form action="/plugins/gallery/upload/" method="post" enctype="multipart/form-data" accept-charset="utf-8" class="form-stacked">
				<input type="hidden" name="action" value="save">
				<input type="hidden" name="filename" value="<?= $file['fileName'] ?>">
				
				<fieldset>
					<legend><strong>Add Picture Details</strong></legend>
					<ul class="media-grid">
						<li><img class="thumbnail" src="/<?= $upload_dir . '/' . $file['fileName']?>"></li>
					</ul>

					<div class="clearfix">
						<label>Title</label>
						<div class="input">
							<input type="text" name="title" class="xxlarge validate" rel="required">
							<span class="help-block">
								May also be used as the caption or alternative text.
							</span>
						</div>
					</div>
					
					<div class="clearfix">	
						<label>Description</label>
						<div class="input">
							<textarea rows="3" name="description" class="xxlarge validate" rel=""></textarea>
						</div>
					</div>

				</fieldset>

				<div class="actions">
					<input type="submit" value="Save Changes &raquo;" class="btn primary"> 
				</div>
			</form>
			
		<?php elseif (!isset($_POST['action']) || $_POST['action'] == 'upload'): ?>
	
			<h2>Choose an aspect ratio or load <a href="http://picmeleo.com/" target="_blank">Picmeleo</a></h2>

			<form action="/plugins/gallery/upload/" method="post" enctype="multipart/form-data" accept-charset="utf-8">
				<input type="hidden" name="action" value="upload">
		
				<ul class="inputs-list">
					<li>
						<label>
							<input type="radio" name="aspectratio" value="freeform" checked>
							<span>&nbsp; Free Form <small>(You will be given the option to crop &amp; resize before saving)</small></span>
						</label>
					</li>
					<li>
						<label>
							<input type="radio" name="aspectratio" value="picmeleo">
							<span>&nbsp; Load Picmeleo</span>
						</label>
					</li>
				</ul>

				<div class="floatleft">
					<label for="750_500">
						<img src="http://placehold.it/750x500">
						750px X 500px
						<input type="radio" name="aspectratio" value="750,500" id="750_500">
					</label>
				</div>
				
				<div class="clearboth"></div>
				<div class="floatleft" style="width: 520px; height: 325px; margin-right: 50px; margin-bottom: 50px;">
					<label for="520_325">
						<img src="http://placehold.it/520x325">
						520px X 325px
						<input type="radio" name="aspectratio" value="520,325" id="520_325">
					</label>
				</div>
		
				<div class="floatleft" style="width: 250px; height: 250px;">
					<label for="230_170">
						<img src="http://placehold.it/230x170">
						230px X 170px
						<input type="radio" name="aspectratio" value="230,170" id="230_170">
					</label>
				</div>
		
				<div class="clearboth"></div>
		
				<h3>Choose an image to upload <small>(JPEG only and less than 600KB)</small></h3>
	
				<div class="clearfix">
					<label for="fileInput">File input</label>
					<div class="input">
						<input type="file" name="fileInput" id="fileInput" class="input-file">
					</div>
				</div>
		
				<div class="actions">
					<input type="submit" value="Next &raquo;" class="btn primary"> 
				</div>
			</form>
		<?php endif ?>
	</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>