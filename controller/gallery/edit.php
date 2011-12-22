<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	$upload_dir = 'uploads/images';
	$thumbnail_dir = 'uploads/images/thumbnails';
	$temp_dir = 'uploads/temp';
    $size = '600K';
    $type = array('jpg', 'jpeg');
    $remove_spaces = true;
	$gallery_id = $requestURI[4];

	if (isset($_POST['action']) && $_POST['action'] == 'save') // Save image to DB and store data (title, description, etc.)
	{
		$Error->blank($_POST['title'], 'Title');
		$Error->blank($_POST['description'], 'Description');
		
		if($Error->ok())
		{
			$record = new Gallery($Input->post('id'));

			$record->user_id = $Auth->id;
			$record->title = $Input->post('title');
			$record->description = $Input->post('description');
			$record->update_date = date('Y-m-d');
			$id = $record->update(); // Update record
			
			$Error->add('Congratulations! Your image details have been updated.', 'Congrats');
			redirect('/plugins/gallery');
		}
		else 
		{
			$_POST['action'] = 'save';
			$file['fileName'] =  $Input->post('filename');
		}
	}

	$gallery = new Gallery($gallery_id);
	
	$page_title = '&raquo; Edit Image Details';
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 	
?>
	
<div class="wrapper">
	<div class="container">

		<?php if (!$Error->ok()): ?>
			<div class="alert-message error">
				<a class="close" href="#">×</a>
				<?php foreach ($Error->errors as $k => $v): ?>
					<p><?= $v[0]; ?></p>
				<?php endforeach ?>
			</div>
		<?php endif ?>
	
		<form action="/plugins/gallery/edit/" method="post" enctype="multipart/form-data" accept-charset="utf-8" class="form-stacked">
			<input type="hidden" name="action" value="save">
			<input type="hidden" name="id" value="<?= $gallery_id ?>">
			
			<fieldset>
				<legend><strong>Edit Image Details</strong></legend>
				<ul class="media-grid">
					<li><img class="thumbnail" src="<?= $gallery->location ?>"></li>
				</ul>

				<div class="clearfix">
					<label>Title</label>
					<div class="input">
						<input type="text" name="title" class="xxlarge validate" rel="required" value="<?= $gallery->title ?>">
						<span class="help-block">
							May also be used as the caption or alternative text.
						</span>
					</div>
				</div>
				
				<div class="clearfix">	
					<label>Description</label>
					<div class="input">
						<textarea rows="3" name="description" class="xxlarge validate" rel="required"><?= $gallery->description ?></textarea>
					</div>
				</div>
			</fieldset>

			<div class="actions">
				<a href="/plugins/gallery/" class="btn secondary">&laquo; Cancel</a>
				<input type="submit" value="Save Changes &raquo;" class="btn primary"> 
				<a href="/plugins/gallery/delete/<?= $gallery_id ?>" class="btn error confirm" rel="Deleting this record cannot be undone.  Are you sure you wish to continue?">Delete</a>
			</div>
		</form>
	</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>