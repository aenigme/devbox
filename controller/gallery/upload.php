<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	if (isset($_FILES['fileInput']) && isset($_POST['action'])) 
	{
	    $upload_dir = 'uploads/images';
	    $size = '600K';
	    $type = array('jpg', 'jpeg');
	    $remove_spaces = true;

	    $file = Upload::save($_FILES['fileInput'], array('directory' => $upload_dir, 'size' => $size, 'type' => $type, 'remove_spaces' => $remove_spaces));

		if (empty($file)) exit('error');
	}

	$page_title = '&raquo; Upload Image';
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 	
?>
	
	<div class="wrapper">
		<div class="container">
			<?php if (isset($file)): ?>
				<?php if ($file['status']): ?>
					<div class="alert-message success">
						<a href="#" class="close">×</a>
						<p><strong>Congratulations!</strong> Your image has been uploaded successfully.</p>
					</div>
				<?php else: ?>
					<div class="alert-message error">
						<a href="#" class="close">×</a>
						<p><strong>Sorry!</strong> <?= $file['error'] ?></p>
					</div>
				<?php endif ?>
			<?php endif ?>
			
			<h2>Choose an aspect ratio or load <a href="http://picmeleo.com/" target="_blank">Picmeleo</a></h2>
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
				<label for="750_250">
					<img src="http://placehold.it/750x250">
					750px X 250px
					<input type="radio" name="aspectratio" value="750,250" id="750_250">
				</label>
			</div>
			
			<div class="clearboth"></div>
			
			<div class="floatleft" style="width: 350px; height: 250px; margin-right: 50px; margin-bottom: 50px;">
				<label for="350_250">
					<img src="http://placehold.it/350x250">
					350px X 250px
					<input type="radio" name="aspectratio" value="350_250" id="350_250">
				</label>
			</div>
			
			<div class="floatleft" style="width: 250px; height: 250px;">
				<label for="250_250">
					<img src="http://placehold.it/250x250">
					250px X 250px
					<input type="radio" name="aspectratio" value="250,250" id="250_250">
				</label>
			</div>
			
			<div class="clearboth"></div>
			
			<h3>Choose an image to upload <small>(JPEG only and less than 600KB)</small></h3>
		
			<form action="/upload/" method="post" enctype="multipart/form-data" accept-charset="utf-8">
				<input type="hidden" name="action" value="true">
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
		
			<?php if (isset($file)): ?>
				<?php if ($file['status']): ?>
					<ul class="media-grid">
						<li><img class="thumbnail" src="/uploads/images/<?= $file['fileName'] ?>" alt=""></li>
					</ul>
				<?php endif ?>
			<?php endif ?>
		
		</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>