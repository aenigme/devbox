<?php 
	$page_title = '&raquo; New Survey';
	require_once realpath(dirname(__FILE__)) . '/lib/core/master.inc.php'; 
	
    if(!$Auth->loggedIn()) redirect('/login.php');

	$type = Matrix::fetch("SELECT * FROM matrix WHERE main = 1 ORDER BY weight");
	
	if(!empty($_POST['question']))
    {
		if($Error->ok())
		{
			$d = new Document();
			$q = new Question();
			$dq = new DocumentQuestions();
			$o = new QuestionOptions();
			
			$d->user_id = $Auth->id;
			
			$q->matrix_id = $_POST['matrix_id'];
			$q->question = $_POST['question'];
			$q_id = $q->insert(); // Insert question
			
			$dq->document_id = $d->insert(); // Insert document
			$dq->question_id = $q_id;
			$dq_id = $dq->insert(); // Sync document and question
			
			$o->question_id = $q_id;
			
			foreach ($_POST['option'] as $k => $v) 
			{
				$o->answer = $v;
				$o->insert(); // Insert options
			}
			redirect('/rules.php?&id=' . $q_id);
		}
    }
    
	require_once realpath(dirname(__FILE__)) . '/_header.php'; 
	echo '<body>';
	require_once realpath(dirname(__FILE__)) . '/_navigation.php'; ?>
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
									<h4>Start with your first question</h4>
								</div>
								<form action="<?= $_SERVER['PHP_SELF']; ?>" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<div class="clearfix">
										<label for="matrix">Choose a question type:</label> 
										<select id="matrix" name="matrix_id">
											<?php foreach ($type as $row): ?>
												<option value="<?= $row->id ?>"><?= $row->label ?></option>
											<?php endforeach ?>
										</select>
									</div>
									<div class="clearfix">
										<label for="question">Ask your question:</label> 
										<textarea rows="3" name="question" id="question" class=""></textarea>
									</div>
									
									<div id="rowOption" class="clearfix">
										<label>Add the multiple-choice options:</label> 
										<input type="text" size="30" name="option" id="option" class="option">
									</div>

									<div class="clearfix">
										<input type="button" value="Add Option" id="addOption" class="btn success" onclick="addOption" />
										<input type="submit" value="Next &raquo;" class="btn primary invisible" id="btnContinue" />
									</div>
									
									<input type="hidden" name="r" value="<?PHP echo htmlspecialchars(@$_REQUEST['r']); ?>" id="r">
									
									<div id="moreOptions"></div>
									<ol id="viewOptions"></ol>
								</form>
							</div>
							<div class="span3" style="padding: 20px 0 0 30px;">
								<div class="alert-message block-message warning">
									<strong>What's next?</strong><br /><br />
									Choose administrative options for your question.
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