<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	if (isset($_FILES['fileInput']) && isset($_POST['action'])) 
	{
	    $upload_dir = 'useruploads';
	    $size = '25K';
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
		
			<h1>Please choose an image to upload <small>(JPEG only and less than 25kb)</small></h1>
		
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
						<li><img class="thumbnail" src="/uploads/<?= $file['fileName'] ?>" alt=""></li>
					</ul>
				<?php endif ?>
			<?php endif ?>
		
		</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>