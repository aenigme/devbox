<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	$upload_dir = 'uploads/images';
	$thumbnail_dir = 'uploads/images/thumbnails';
	$temp_dir = 'uploads/temp';
    $size = '600K';
    $type = array('jpg', 'jpeg');
    $remove_spaces = true;

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
			$record->client = $Input->post('client');
			$record->service = implode(',', $Input->post('service'));
			$record->update_date = date('Y-m-d');
			$id = $record->update(); // Insert record
			
			$Error->add('Congratulations! Your image details have been updated.', 'Congrats');
			redirect('/gallery');
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
	    'Solution Definition',
	    'User Needs Analysis',
	    'Insight &amp; Research',
	);
	
	$gallery = new Gallery($requestURI[3]);
	
	// Compare the two 'service' arrays for similarities
	$intersect_arr = array_intersect(explode(',', $gallery->service), $service);
	
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
	
		<form action="/gallery/edit/" method="post" enctype="multipart/form-data" accept-charset="utf-8" class="form-stacked">
			<input type="hidden" name="action" value="save">
			<input type="hidden" name="id" value="<?= $requestURI[3] ?>">
			
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
				
				<div class="clearfix">	
					<label>Client</label>
					<div class="input">
						<input type="text" name="client" class="xxlarge" value="<?= $gallery->client ?>">
					</div>
				</div>
				
				<div class="clearfix">	
					<label id="optionsCheckboxes">List of options</label>
					<div class="input">
						<ul class="inputs-list">
							<?php foreach ($service as $k => $v): ?>
								<? $checked = (in_array($v, $intersect_arr)) ? 'checked' : NULL; ?>
								<li>
									<label>
										<input type="checkbox" value="<?= $v ?>" name="service[]" <?= $checked ?>>
										<span><?= $v ?></span>
									</label>
								</li>
							<?php endforeach ?>
						</ul>
						<span class="help-block">
							<strong>Note:</strong> A maximum of 5 choices is recommended.
						</span>
					</div>
				</div>
			</fieldset>

			<div class="actions">
				<a class="btn secondary" href="/gallery/">&laquo; Cancel</a>
				<input type="submit" value="Save Changes &raquo;" class="btn primary"> 
			</div>
		</form>
	</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>