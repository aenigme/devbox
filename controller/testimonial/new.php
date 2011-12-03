<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; New Testimonial';
	
    if(!$Auth->loggedIn()) redirect('/login');
	
	if($Input->post('action'))
    {
		$Error->blank($_POST['quote'], 'Quote');
		$Error->blank($_POST['caption'], 'Caption');
		
		if($Error->ok())
		{
			$record = new Testimonial();

			$record->user_id = $Auth->id;
			$record->caption = $Input->post('caption');
			$record->quote = $Input->post('quote');
			$record->insert_date = date('Y-m-d');
			$record->update_date = date('Y-m-d');
			$id = $record->insert(); // Insert record

			redirect('/testimonial/view/');
		}
    }
    
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span16">
				
					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message _block-message error">
									<a class="close" href="#">×</a>
									<?php foreach ($Error->errors as $k => $v): ?>
										<p><?= $v[0]; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<div style="background-image: url('/assets/images/account/background_acct.jpg'); width: 562px; height: 482px; margin: 20px auto;" autocomplete="off">
							<div class="span5" style="padding: 20px 0 0 10px;">
								<div class="page-header">
									<h4>Add New Testimonial</h4>
								</div>
								<form action="/testimonial/new/" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<input type="hidden" name="action" value="TRUE">
									<div id="rowOption" class="clearfix">
										<div id="optionMulti" class="optionChoice">
											<div class="clearfix">
												<label for="quote">Quote:</label> 
												<textarea rows="3" name="quote" id="quote" class="validate" rel="required"></textarea>
											</div>
											<div class="clearfix">
												<label for="caption">Caption:</label> 
												<input type="text" size="30" name="caption" id="caption" value="" class="validate" rel="required">
											</div>
											<div class="clearfix">
												<input type="submit" value="Add Testimonial &raquo;" class="btn primary" />
											</div>
										</div>
									</div>

									<div id="moreOptions"></div>
									<ol id="viewOptions"></ol>
								</form>
							</div>
							<div class="span3" style="padding: 20px 0 0 30px;">
								<img src="/assets/images/origami/discussion.png" width="100%"><br /><br />
								<div class="alert-message block-message warning">
									<strong>What's next?</strong><br />
									Choose administrative options and rules for your question.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>