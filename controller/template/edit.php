<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	if (isset($_POST['action']) && $_POST['action'] == 'save') 
	{ 
		$filepath = DIR_PAGE . '/inc/'. $Input->post('filename');
		$fh = fopen($filepath, 'w') or die("Error: Can't open file");
		$str = $Input->post('content');
		fwrite($fh, $str);
		fclose($fh);
		
		$filename = $Input->post('filename');
		
	} 
	else if (!isset($_POST['action'])) 
	{
		$filename = (isset($requestURI[3])) ? $requestURI[3] : $Error->add('Error', 'Missing filename. If this error continues, please contact the webmaster.');
	}
	
	$page_title = '&raquo; Edit Template';
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 	
?>

<div class="wrapper">
	<div class="container">
		<div class="row">
			<div class="span12">
			
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
	

<form action="/template/edit/" method="post" enctype="multipart/form-data" accept-charset="utf-8" class="form-stacked">
	<input type="hidden" name="action" value="save">
	<input type="hidden" name="filename" value="<?= $filename ?>">

	<fieldset>
		<legend><h2>Edit Template</h2></legend>
		<div class="clearfix">						
			<textarea rows="8" cols="40" class="html5" name="content">
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