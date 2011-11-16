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

			redirect('/survey/rules/' . $_POST['question_id']);
		}
    }
	
	$question = new Question($requestURI[3]);
	
	require_once DIR_VIEW . '/_header.php'; 
	require_once DIR_VIEW . '/_navigation.php';
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
									<h2>Preview Question</h2>
								</div>
								
								<strong style="font-size: 18px;"><?= $question->question ?></strong>
								
								<?php if ($question->matrix_id == 14): ?>
									<script type="text/javascript" charset="utf-8">
										$(document).ready(function(){
											makeSlider("#defaultSlider", {
												defaultValues:{min:20, max:50},
												bounds:{min:20, max:50}, 
												arrows: false,
											});
										});
									</script>
									
									<div class="sliderZone">
										<form action="#">
											<input type="hidden" name="min" />
											<input type="hidden" name="max" />
											<div id="defaultSlider" class="slider"></div>
										</form>
									</div>
								<?php endif ?>
								
								<form action="/survey/preview/" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<input type="hidden" name="question_id" value="<?= set_default($requestURI[3]) ?>">
									<input type="hidden" name="action" value="true">
									
									<input type="button" value="Add More &raquo;" id="addOption" class="btn primary" onclick="addOption" />
									<input type="submit" value="Done" class="btn success" />
									
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

<?php require_once DIR_VIEW . '/_footer.php'; ?>
