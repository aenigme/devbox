<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>neverslee.ps <?= set_default($page_title); ?></title>
		
		<?php
			echo HTML::stylesheet(array
			(
				'assets/css/reset',
				'assets/css/screen',
				'assets/fonts/copse',
			), FALSE, FALSE, TRUE);

			echo HTML::script(array
			(
			    'assets/js/jquery-1.6.2.min',
				'assets/js/jquery.accordion',
				'assets/js/jquery.bt',
				'assets/js/jquery.colorbox', 
				'assets/js/jquery.form',
				'assets/js/common',
				'assets/js/main',
			), FALSE, TRUE);		
		?>
		
		<link rel="stylesheet" href="/assets/js/nivo-slider/themes/default/default.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="/assets/js/nivo-slider/nivo-slider.css" type="text/css" media="screen" />
		<script type="text/javascript" src="/assets/js/nivo-slider/jquery.nivo.slider.js"></script>		

		<link rel="stylesheet" href="/assets/css/prettyPhoto.css" type="text/css" media="screen" title="prettyPhoto main stylesheet" />
		<script src="/assets/js/jquery.prettyPhoto.js" type="text/javascript"></script>
		<script type="text/javascript">
		  $(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto({
				animation_speed: 'normal', /* fast/slow/normal */
				slideshow: 5000, /* false OR interval time in ms */
				autoplay_slideshow: false, /* true/false */
				opacity: 0.70, /* Value between 0 and 1 */
				show_title: true, /* true/false */
				allow_resize: true, /* Resize the photos bigger than viewport. true/false */
				default_width: 500,
				default_height: 344,
				counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
				theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			});
		  });
		</script>
		
		<!--[if lt IE 8]>
			<link rel="stylesheet" type="text/css" href="/assets/css/ie.css">
			<script type="text/javascript" src="/assets/js/ie-png-fix.js"></script>
			<script type="text/javascript" src="/assets/js/ie-hover-ns-pack.js"></script>
		<![endif]-->
	</head>
	<body>

		<div id="wrapper">
			<div class="top-line">&nbsp;</div>
			<div id="slide-block" class="active">

				<header id="header">
					
					<h1><a href="index.html" class="white">neverslee.ps</a></h1>
					<nav>
						<ul id="nav" class="accordion2">
							<li><a class="active" href="/">Home</a></li>
							<li><a href="/portfolio/">Portfolio</a></li>
							<li><a href="/team/">Meet Us</a></li>
							<li><a href="/details/">Why Us</a></li>
							<li><a href="/details/">Hire Us</a></li>
							<li><a href="/contact/">Contact Us</a></li>
						</ul>
					</nav>
				</header>

				<div class="contact-box">
					<div class="area">

						<address>
							Never Sleeps LLC,<br>
							344 Madison Avenue,<br>
							New York 10027<br>
							Tel: +1 416 777 8000
						</address>
						<p>Follow us:</p>

						<ul class="social-nav">
							<li><a class="facebook" href="#">Facebook</a></li>
							<li><a class="twitter" href="#">Twitter</a></li>
							<li><a class="google-plus" href="#">Google+</a></li>
							<li><a class="dribble" href="#">Dribble</a></li>
							<li><a class="youtube" href="#">YouTube</a></li>
						</ul>
					</div>
				</div>