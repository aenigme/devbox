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
	
	$db = Database::getDatabase();

	if(isset($_GET['action']))
	{
		if($Error->ok())
		{
			$s = new Survey($_GET['id']);
			$s->q2_first =$_GET['q2_first'];
			$s->q2_second =$_GET['q2_second'];
			$s->q2_third =$_GET['q2_third'];
			$s->endtime = time();
			$s->ip = $_SERVER["REMOTE_ADDR"];
			$s->complete = 1;
			$s->update();
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

<body style="background-color: #25E897;">
	
	<div class="container">
		<h1 style="text-align: center;">Survey Complete!  Thank You For Your Participation.</h1>
	</div>
	
</body>
</html>