<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Clean landing page</title>
		
		<?php
			echo HTML::stylesheet(array
			(
				'assets/css/reset',
				'assets/css/screen',
				'assets/css/prettyPhoto',
			), FALSE, FALSE, TRUE);

			echo HTML::script(array
			(
			    'assets/js/jquery-1.6.2.min',
				'assets/js/jquery.bt',
				'assets/js/jquery.colorbox', 
				'assets/js/jquery.form',
				'assets/js/jquery.prettyPhoto',
				'assets/js/jquery.validate',
				'assets/js/common',
				'assets/js/custom',
			), FALSE, TRUE);		
		?>
		
        <link rel="stylesheet" type="text/css" href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' >

    </head>
<body>
        
