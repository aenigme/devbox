<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<script type="text/javascript">
    	if (top !== self) top.location.href = self.location.href;
    </script>
    
	<title>_devbox <?= set_default($page_title) ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	
	<link rel="shortcut icon" href="/assets/images/toolbox.ico" type="image/x-icon" />
	<link rel="icon" href="/assets/images/toolbox.ico" type="image/x-icon" />
	
	<?php
		echo HTML::stylesheet(array
		(
			'assets/css/reset',
			'assets/css/bootstrap',
			'assets/css/devbox',
			'assets/css/plupload',
			'assets/css/rangeslider', 
			'assets/css/smoothness/jquery-ui-1.8.10.custom',
			'assets/images/icons/dlf',
		), FALSE, FALSE, TRUE);
		
		echo HTML::script(array
		(
		    'assets/js/jquery-1.6.2.min',
			'assets/js/jquery-ui-1.8.10.custom.min',
			'assets/js/jquery.bt',
			'assets/js/jquery.colorbox', 
			'assets/js/jquery.form',
			'assets/js/jquery.rangeslider',
			'assets/js/bootstrap/bootstrap-dropdown',
			'assets/js/common',
			'assets/js/devbox',
		), FALSE, TRUE);		
	?>
	
	<!-- www.phpied.com/conditional-comments-block-downloads/ -->
	<!--[if IE]><![endif]-->
	
	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
	
	<!-- Make Microsoft Internet Explorer behave like a standards-compliant browser -->
	<!--[if lt IE 8]><script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js"></script><![endif]-->

</head>
<body>