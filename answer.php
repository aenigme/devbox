<?php 
	$page_title ='Choose Answers';
	require_once realpath(dirname(__FILE__)) . '/lib/core/master.inc.php'; 
	
    if(!$Auth->loggedIn()) redirect('/login.php');

	$type = Matrix::fetch("SELECT * FROM matrix WHERE main = 1 ORDER BY weight");
	
	if(!empty($_POST['question']))
    {
		if($Error->ok())
		{
			$q = new Question();
			$q->matrix_id = $_POST['matrix_id'];
			$q->question = $_POST['question'];
			$_id = $q->insert();
			redirect('/answer.php?&id=' . $_id);
		}
    }
	
	require_once realpath(dirname(__FILE__)) . '/_header.php'; 
?>

<body>
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
								<h4>Next, list your answers</h4>
							</div>
							<form action="<?PHP echo $_SERVER['PHP_SELF']; ?>" method="post" class="form-stacked" style="margin-left: -20px;"> 
								<p>
									<label for="matrix">Choose a question type:</label> 
									<select id="matrix" name="matrix_id">
										<?php foreach ($type as $row): ?>
											<option value="<?= $row->id ?>"><?= $row->label ?></option>
										<?php endforeach ?>
									</select>
								</p>
								<p>
									<label for="question">Ask your question:</label> 
									<textarea rows="3" name="question" id="question" class=""></textarea>
								</p>
								<p>
									<input type="reset" value="Reset" class="btn secondary"/>
									<input type="submit" value="Next &raquo;" class="btn primary"/>
								</p>
								<input type="hidden" name="r" value="<?PHP echo htmlspecialchars(@$_REQUEST['r']); ?>" id="r">
							</form>
						</div>
						<div class="span3" style="padding: 20px 0 0 30px;">
							<div class="alert-message block-message warning">
								<strong>Next, you will setup the choices for your questionnaire.</strong><br /><br />
								Wether you are collecting multiple-choice answers or a date and time for an event, we will build an easy to use form to collect results.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>