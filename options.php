<?php 
	$page_title ='&raquo; Choose Options';
	require_once realpath(dirname(__FILE__)) . '/lib/core/master.inc.php'; 
	
    if(!$Auth->loggedIn()) redirect('/login.php');
	
	if(!empty($_POST['option']))
    {
		if($Error->ok())
		{
			$o = new QuestionOptions();
			$o->question_id = $_POST['question_id'];
			
			foreach ($_POST['option'] as $k => $v) 
			{
				$o->answer = $v;
				$o->insert();
			}
			
			redirect('/rules.php?&id=' . $_POST['question_id']);
		}
    }
	
	$type = Matrix::fetch("SELECT * FROM matrix WHERE main = 1 ORDER BY weight");
	$question = new Question($_GET['id']);
	
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
									<h4><?= $question->question ?></h4>
								</div>
								<form action="<?PHP echo $_SERVER['PHP_SELF']; ?>" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<input type="hidden" name="question_id" value="<?= set_default($_GET['id']) ?>">
									<div id="rowOption" class="clearfix">
										<label>Add the multiple-choice options:</label> 
										<input type="text" size="30" name="option" id="option" class="option">
									</div>
								
									<div id="clearfix">
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
									<strong>What's Next?</strong><br /><br />
									Choose the rules for your survey.<br /><br /> 
									Such as a predefined date span, minimum and maximum values or 'None of the above'.
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