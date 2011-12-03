<?php defined('LIBRARY') or die('No direct script access allowed');
	
	$page_title ='&raquo; Set Rules &amp; Options';
	
    if(!$Auth->loggedIn()) redirect('/login');
	
	if(!empty($_POST['action']))
    {
		if($Error->ok())
		{
			$q = new Question($_POST['question_id']);
			$q->description = $_POST['description'];
			$q->required = set_default($_POST['required'], 0);
			$q->update();

			redirect('/survey/preview/' . $_POST['question_id']);
		}
    }
	
	$type = Matrix::fetch("SELECT * FROM matrix WHERE main = 1 ORDER BY weight");
	$question = new Question($_GET['id']);
	
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 
?>

	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="span16">
				
					<?php if (strlen($Error)): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
							    <p><?= $Error; ?></p>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<div style="background-image: url('/assets/images/account/background_acct.jpg'); width: 562px; height: 482px; margin: 20px auto;">
							<div class="span5" style="padding: 20px 0 0 10px;">
								<div class="page-header">
									<h4>Rules &amp; Options</h4>
								</div>
								<form action="/survey/rules/" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<input type="hidden" name="question_id" value="<?= set_default($requestURI[3]) ?>">
									<input type="hidden" name="action" value="true">
									
									<div class="clearfix">
										<label for="description">Brief description of this question:</label> 
										<textarea rows="3" name="description" id="description" class=""></textarea><br />
										<span class="help-inline">For internal use only</span>
									</div>
									
									<div class="clearfix">
										<label id="optionsCheckboxes">Other options</label>
										<div class="input">
											<ul class="inputs-list">
												<li>
													<label>
														<input type="checkbox" value="1" name="required">
														<span>Required &mdash; user must choose one option</span>
													</label>
												</li>
												<li>
													<label>
														<input type="checkbox" value="1" name="optionsCheckboxes">
														<span>Include an option for "None of the above"</span>
													</label>
												</li>
											</ul>
										</div>
									</div>
									
									<input type="submit" value="Next &raquo;" class="btn primary" />
									
									<input type="hidden" name="r" value="<?PHP echo htmlspecialchars(@$_REQUEST['r']); ?>" id="r">
									
									<div id="moreOptions"></div>
									<ol id="viewOptions"></ol>
								</form>
							</div>
							
							<div class="span3" style="padding: 20px 0 0 30px;">
								<img src="/assets/images/origami/folder.png" width="100%"><br /><br />
								<div class="alert-message block-message warning">
									<strong>What's next?</strong><br />
									Preview your question and add more.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>