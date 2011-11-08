<?php defined('LIBRARY') or die('No direct script access.'); 

	$page_title = '&raquo; New Survey';
	
    if(!$Auth->loggedIn()) redirect('/login');

	$type = Matrix::fetch("SELECT * FROM matrix WHERE main = 1 ORDER BY weight");
	
	if(!empty($_POST['question']))
    {
		$Error->blank($_POST['question'], 'Question');
		
		if($Error->ok())
		{
			$d = new Document();
			$q = new Question();
			$o = new QuestionOptions();
			$dq = new DocumentQuestions();
			
			$d->user_id = $Auth->id;
			
			$q->matrix_id = $_POST['matrix_id'];
			$q->question = $_POST['question'];
			$q->min = set_default($_POST['min']);
			$q->max = set_default($_POST['max']);
			$q_id = $q->insert(); // Insert question
			
			$dq->document_id = $d->insert(); // Insert document
			$dq->question_id = $q_id;
			$dq_id = $dq->insert(); // Sync document and question
			
			$o->question_id = $q_id;
			
			if (count($_POST['option'])) 
			{
				foreach ($_POST['option'] as $k => $v) 
				{
					$o->value = $v;
					$o->insert(); // Insert options
				}
			}
			
			redirect('/rules.php?&id=' . $q_id);
		}
    }
    
	require_once DOC_ROOT . '/_header.php'; 
	require_once DOC_ROOT . '/_navigation.php';
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span16">
				
					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
									<?php foreach ($Error as $k => $v): ?>
										<p><?= $v; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<div style="background-image: url('/assets/images/account/background_acct.jpg'); width: 562px; height: 482px; margin: 20px auto;" autocomplete="off">
							<div class="span5" style="padding: 20px 0 0 10px;">
								<div class="page-header">
									<h4>Start with your first question</h4>
								</div>
								<form action="<?= $_SERVER['PHP_SELF']; ?>" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<div class="clearfix">
										<label for="matrix">Choose a question type:</label> 
										<select id="matrix" name="matrix_id">
											<?php foreach ($type as $row): ?>
												<option value="<?= $row->id ?>" rel="#<?= $row->brief ?>"><?= $row->label ?></option>
											<?php endforeach ?>
										</select>
									</div>
									<div class="clearfix">
										<label for="question">Ask your question:</label> 
										<textarea rows="3" name="question" id="question" class=""></textarea>
									</div>
									
									<div id="rowOption" class="clearfix">
										<div id="optionMulti" class="optionChoice">
											<div class="clearfix">
												<label>Add the multiple-choice options:</label> 
												<input type="text" size="30" name="option" id="option" class="option">
											</div>
											<div class="clearfix">
												<input type="button" value="Add Option" id="addOption" class="btn success" onclick="addOption" />
												<input type="submit" value="Next &raquo;" class="btn primary invisible" id="btnContinue" />
											</div>
										</div>
										<div id="optionSimple" class="optionChoice invisible">
											<div class="clearfix">
												<label>Users will be shown a text box.</label> 
												<textarea rows="3" name="question" id="question" disabled="">This is a sample...</textarea>
											</div>
											<div class="clearfix">
												<input type="submit" value="Next &raquo;" class="btn primary" id="btnContinue" />
											</div>
										</div>
										<div id="optionRating" class="optionChoice invisible">
											<div class="clearfix">
												<label for="min">What is the minimum value?</label> 
												<input type="text" name="min" id="min">
											</div>
											<div class="clearfix">
												<label for="max">What is the maximum value?</label> 
												<input type="text" name="max" id="max">
											</div>
											<div class="clearfix">
												<input type="submit" value="Next &raquo;" class="btn primary" id="btnContinue" />
											</div>
										</div>
										<div id="optionDateTime" class="optionChoice invisible">
											
										</div>
										<div id="optionDemographics" class="optionChoice invisible">
											
										</div>
									</div>

									<input type="hidden" name="r" value="<?PHP echo htmlspecialchars(@$_REQUEST['r']); ?>" id="r">
									
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
	</div>
	
</body>
</html>