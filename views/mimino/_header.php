<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Mimino - Portfolio Template</title>
		
		<?php
			echo HTML::stylesheet(array
			(
				'assets/css/reset',
				'assets/css/all',
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
				animation_speed: 'fast', /* fast/slow/normal */
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
		<!-- page -->
		<div id="wrapper">
			<div class="top-line">&nbsp;</div>
			<div id="slide-block" class="">
				<a class="menu-opener" href="#">open</a>
				<!-- header -->
				<header id="header">
					<!-- logo -->
					<strong class="logo"><a href="index.html">Mimino</a></strong>
					<!-- main navigation -->
					<nav>
						<ul id="nav" class="accordion2">
							<li><a class="active" href="index.html">Home</a></li>
							<li class="has-drop">
								<a class="opener" href="#">Blog</a>
								<div class="slide">
									<ul>
										<li><a href="blog-layout-grid-1.html">Blog Layout Grid 1</a></li>
										<li><a href="blog-layout-grid-2.html">Blog Layout Grid 2</a></li>
										<li><a href="blog-layout-1.html">Blog Layout 1</a></li>
										<li><a href="blog-layout-2.html">Blog Layout 2</a></li>
										<li><a href="blog-layout-3.html">Blog Layout 3</a></li>
										<li><a href="blog-layout-4.html">Blog Layout 4</a></li>
										<li><a href="blog-layout-5.html">Blog Layout 5</a></li>	
										<li><a href="single.html">Single page</a></li>
									</ul>
								</div>
							</li>							
							<li class="has-drop">
								<a class="opener" href="#">Portfolio</a>
								<div class="slide">
									<ul>
										<li><a href="portfolio-one-column.html">One Column</a></li>
										<li><a href="portfolio-two-columns.html">Two Columns</a></li>
										<li><a href="portfolio-three-columns.html">Three Columns</a></li>
										<li><a href="portfolio-four-columns.html">Four Columns</a></li>
										<li><a href="portfolio-single.html">Portfolio Info</a></li>										
									</ul>
								</div>
							</li>
							<li><a href="fullwidth.html">Full Width Page</a></li>
							<li><a href="right-sidebar.html">Right Sidebar Page</a></li>
							<li><a href="team.html">Meet the Team</a></li>
							<li><a href="contact.html">Contact Us</a></li>
						</ul>
					</nav>
				</header>
				<!-- contact box -->
				<div class="contact-box">
					<div class="area">
						<!-- address -->
						<address>
							Mimino Template Demo,<br>
							344 Madison Avenue,<br>
							New York 10027<br>
							Tel: +1 416 777 8000
						</address>
						<p>Follow us:</p>
						<!-- social nav -->
						<ul class="social-nav">
							<li><a class="facebook" href="#">Facebook</a></li>
							<li><a class="twitter" href="#">Twitter</a></li>
							<li><a class="google-plus" href="#">Google+</a></li>
							<li><a class="dribble" href="#">Dribble</a></li>
							<li><a class="youtube" href="#">YouTube</a></li>
						</ul>
					</div>
				</div>