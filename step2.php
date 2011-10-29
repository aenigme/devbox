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
	
	$answer = $_GET['answer'];
	shuffle($answer);
	
	$db = Database::getDatabase();

	if(isset($_GET['action']))
	{
		if($Error->ok())
		{
			$s = new Survey();
			foreach ($answer as $k => $v) $s->$v = 1;
			$s->timestamp = time();
			$_id = $s->insert();
		}
	}
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
		<h1>How would you rank the three films you selected as your favorites?</h1>
		<!-- action="step2.php" method="get" accept-charset="utf-8" -->
		<form id="q2Form" action="complete.php" method="get" accept-charset="utf-8">
			<input type="hidden" name="id" value="<?= $_id ?>">
			<input type="hidden" name="action" value="true">
			<div class="clearfix">
				<table class="myTable">
					<thead>
						<tr>
							<th>First Choice</th>
							<th>Second Choice</th>
							<th>Third Choice</th>
						</tr>
					</thead>
					<tbody>
						<tr>							
							<td>
								<select name="q2_first" id="q2" size="1">
									<?php foreach ($answer as $k => $v): ?>
										<option value="<?= $v ?>"><?= $movie[$v] ?></option>
									<?php endforeach ?>
								</select>
							</td>
							<td>
								<select name="q2_second" id="q2" size="1">
									<?php foreach ($answer as $k => $v): ?>
										<option value="<?= $v ?>"><?= $movie[$v] ?></option>
									<?php endforeach ?>
								</select>
							</td>
							<td>
								<select name="q2_third" id="q2" size="1">
									<?php foreach ($answer as $k => $v): ?>
										<option value="<?= $v ?>"><?= $movie[$v] ?></option>
									<?php endforeach ?>
								</select>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<div class="actions">
				<button class="btn" type="reset" onclick="history.back()">Start Over</button>
				<input type="submit" value="Next &raquo;" class="btn primary"> 
			</div>
		</form>
	
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
	</div>
	
</body>
</html>