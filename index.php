<?php 
	require_once realpath(dirname(__FILE__)) . '/lib/core/master.inc.php'; 

	$movie = array(
		 'q1_a1' => 'Memento',
		 'q1_a2' => 'Requiem for a Dream',
		 'q1_a3' => 'Star Wars: Episode V ‐ The Empire Strikes Back',
		 'q1_a4' => 'Terminator 2: Judgment Day',
		 'q1_a5' => 'The Matrix',
		 'q1_a6' => 'The Pianist',
		 'q1_a7' => 'The Prestige',
		 'q1_a8' => 'The Shawshank Redemption',
	);
	$movie = shuffle_assoc($movie);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<script type="text/javascript">
    	if (top !== self) top.location.href = self.location.href;
    </script>
    
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" type="text/css" href="assets/css/reset.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="assets/css/screen.css" media="screen" />
	
	<script type="text/javascript" src="assets/js/jquery-1.6.2.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.colorbox.js"></script>
	<script type="text/javascript" src="assets/js/jquery.bt.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.form.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap/bootstrap-modal.js"></script>
	<script type="text/javascript" src="assets/js/common.js"></script>
	
	<!-- www.phpied.com/conditional-comments-block-downloads/ -->
	<!--[if IE]><![endif]-->

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

</head>

<body>
	
	<div class="container">
		<div class="row">
			<div class="span4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</div>
			<div class="span12">
				<h1>What are your favorite three films from this list?</h1>

				<form id="q1Form" action="step2.php" method="get" accept-charset="utf-8">
					<input type="hidden" name="action" value="true">
					<div class="clearfix">
						<label id="optionsCheckboxes">Please choose 3 movies or "None of the above"</label>
						<div class="input">
							<ul class="inputs-list">
								<?php foreach ($movie as $k => $v): ?>
									<li>
										<label>
											<input type="checkbox" name="answer[]" value="<?= $k ?>"> 
											<span><?= $v ?></span>
										</label>
									</li>
								<?php endforeach ?>
								<li>
									<label>
										<input type="checkbox" name="none" value="1"> 
										<span>None of the above</span>
									</label>
								</li>
							</ul>
						</div>
					</div>

					<div class="actions">
						<button class="btn" type="reset">Reset</button>
						<input type="submit" value="Next &raquo;" class="btn primary"> 
					</div>
				</form>
			</div>
		</div>
	</div>
	
	<div class="modal hide fade" id="my-modal">
        <div class="modal-header">
          <h3>Please try again</h3>
        </div>
        <div class="modal-body">
	    	<h4 id="modal-msg"></h4>
        </div>
        <div class="modal-footer">
          <a class="btn primary hide" href="#">Close</a>
        </div>
	</div>
	
</body>
</html>