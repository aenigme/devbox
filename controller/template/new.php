<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	/*
		TODO Create and save page
	*/
	if (isset($_POST['action']) && $_POST['action'] == 'upload') { } // Upload template
	else if (isset($_POST['action']) && $_POST['action'] == 'save') { } // Save template
	
	$option = array(
	    'Brand Creation',
		'Visual Design',
	    'Interaction Design',
	    'Development',
	);
	
	$page_title = '&raquo; New Template';
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
			
		<?php elseif (!isset($_POST['action']) || $_POST['action'] == 'upload'): ?>
			
			<form action="/page/new/" method="post" enctype="multipart/form-data" accept-charset="utf-8" class="form-stacked">
				<input type="hidden" name="action" value="upload">
				
				<fieldset>
					<legend><h2>Add a New Page</h2></legend>
					<div class="clearfix">						
						<?php for ($i = 1; $i <= 4; $i++): ?>
							<div class="floatleft" style="margin: 20px;">
								<label for="layout<?= $i ?>">
									<img src="/assets/images/icons/wireframes/layout<?= $i ?>.png"><br />
									Layout #<?= $i ?>
									<input type="radio" name="layout" value="<?= $i ?>" id="layout<?= $i ?>">
								</label>
							</div>					
						<?php endfor ?>
					</div>	
				</fieldset>
				
				<fieldset>
					<legend>Add Page Details</legend>
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
							<textarea rows="3" name="description" class="xxlarge validate" rel="required"></textarea>
						</div>
					</div>
					
					<div class="clearfix">	
						<label id="optionsCheckboxes">List of options</label>
						<div class="input">
							<ul class="inputs-list">
								<?php foreach ($option as $k => $v): ?>
									<li>
										<label>
											<input type="checkbox" value="<?= $v ?>" name="service[]">
											<span><?= $v ?></span>
										</label>
									</li>
								<?php endforeach ?>
							</ul>
							<span class="help-block">
								<strong>Note:</strong> A maximum of 2 choices is recommended.
							</span>
						</div>
					</div>
				</fieldset>
				
		
				<div class="actions">
					<input type="submit" value="Next &raquo;" class="btn primary"> 
				</div>
			</form>
		<?php endif ?>
	</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>