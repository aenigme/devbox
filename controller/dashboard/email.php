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
			
			<form action="/dashboard/email/" method="post" enctype="multipart/form-data" accept-charset="utf-8">
				<input type="hidden" name="action" value="true">
				<fieldset>
					<legend><strong>Update Email Settings</strong></legend>
					<div class="clearfix">
						<label>Enter all email recipients separated by commas</label>
						<div class="input">
							<textarea rows="3" name="textarea2" id="textarea2" class="xxlarge"></textarea>
							<span class="help-block">
								johndoe@aol.com, jimsmith@gmail.com
							</span>
						</div>
					</div>
				</fieldset>
			
				<div class="actions">
					<input type="submit" value="Save Changes &raquo;" class="btn primary"> 
				</div>
			</form>
			
<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>