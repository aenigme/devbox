<?php 
	require_once realpath(dirname(__FILE__)) . '/lib/core/master.inc.php'; 

	if (isset($_FILES['fileInput']) && isset($_POST['action'])) 
	{
	    $upload_dir = 'useruploads';
	    $size = '25K';
	    $type = array('jpg', 'jpeg');
	    $remove_spaces = true;

	    $file = Upload::save($_FILES['fileInput'], array('directory' => $upload_dir, 'size' => $size, 'type' => $type, 'remove_spaces' => $remove_spaces));

		if (empty($file)) exit('error');
	}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<script type="text/javascript">
    	if (top !== self) top.location.href = self.location.href;
    </script>
    
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" type="text/css" href="assets/css/reset.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="assets/css/screen.css" media="screen" />
	
	<script type="text/javascript" src="assets/js/jquery-1.6.2.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.colorbox.js"></script>
	<script type="text/javascript" src="assets/js/jquery.bt.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.form.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap/bootstrap-modal.js"></script>
	<script type="text/javascript" src="assets/js/common.js"></script>
	
	<!-- www.phpied.com/conditional-comments-block-downloads/ -->
	<!--[if IE]><![endif]-->

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

</head>

<body>
	
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
		
		<form action="upload.php" method="post" enctype="multipart/form-data" accept-charset="utf-8">
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
					<li><img class="thumbnail" src="/patrick/uploads/<?= $file['fileName'] ?>" alt=""></li>
				</ul>
			<?php endif ?>
		<?php endif ?>
		
	</div>
	
</body>
</html>