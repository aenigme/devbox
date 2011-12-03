<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>neverslee.ps <?= set_default($page_title); ?></title>
		
		<link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
		
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
		
		<?php if ($Auth->loggedIn()): ?>
			<?php
				// Load Aloha Editor
				echo HTML::script(array
				(
					'assets/js/aloha/aloha',
					'assets/js/aloha/plugins/save/plugin',
					'assets/js/aloha/plugins/format/plugin',
					'assets/js/aloha/plugins/list/plugin',
					'assets/js/aloha/plugins/link/plugin',
					'assets/js/aloha/plugins/highlight/plugin',
					'assets/js/aloha/plugins/link/linklist',
					'assets/js/aloha/plugins/paste/plugin',
					'assets/js/aloha/plugins/paste/wordpastehandler',
				), FALSE, TRUE);
			?>
			<script type="text/javascript">
				GENTICS.Aloha.settings = {
					logLevels: {'error': true, 'warn': false, 'info': false, 'debug': false},
					errorhandling : false,
					ribbon: true,	
					"i18n": {
						"current": "en" 
					},
					"repositories": {
					 	"com.gentics.aloha.repositories.LinkList": {
					 		data: [
				 		        { name: 'Aloha Developers Wiki', url:'http://www.aloha-editor.com/wiki', type:'website', weight: 0.50 },
				 		        { name: 'Aloha Editor - The HTML5 Editor', url:'http://aloha-editor.com', type:'website', weight: 0.90  },
				 		        { name: 'Aloha Demo', url:'http://www.aloha-editor.com/demos.html', type:'website', weight: 0.75  },
				 		        { name: 'Aloha Wordpress Demo', url:'http://www.aloha-editor.com/demos/wordpress-demo/index.html', type:'website', weight: 0.75  },
				 		        { name: 'Aloha Logo', url:'http://www.aloha-editor.com/images/aloha-editor-logo.png', type:'image', weight: 0.10  }
					 		]
						}
					},
					"plugins": {
						"com.example.aloha.DummySave": { },
						"com.gentics.aloha.plugins.Format": {
						 	// all elements with no specific configuration get this configuration
							config : [ 'b', 'i','del','sup', 'p','h1','h2','h3' ],
						  	editables : {
								'#title'		: [ ], 
								'.article'		: [ 'b', 'i','del','sup', 'p','h1','h2','h3', 'h4', 'h5', 'h6','removeFormat' ],
						  	}
						},
					 	"com.gentics.aloha.plugins.List": { 
							config : [  'ul' ],
						  	editables : {
								'#title'	: [ ], 
						  	}
						},
					 	"com.gentics.aloha.plugins.Link": {
						 	// all elements with no specific configuration may insert links
							config : [ 'a' ],
						  	editables : {
								// No links in the title.
								'#title'	: [ ]
						  	},
						  	// all links that match the targetregex will get set the target
				 			// e.g. ^(?!.*aloha-editor.com).* matches all href except aloha-editor.com
						  	targetregex : '^(?!.*aloha-editor.com).*',
						  	// this target is set when either targetregex matches or not set
						    // e.g. _blank opens all links in new window
						  	target : '_blank',
						  	// the same for css class as for target
						  	cssclassregex : '^(?!.*aloha-editor.com).*',
						  	cssclass : 'aloha',
						  	// use all resources of type website for autosuggest
						  	objectTypeFilter: ['website'],
						  	// handle change of href
						  	onHrefChange: function( obj, href, item ) {
							  	if ( item ) {
									jQuery(obj).attr('data-name', item.name);
							  	} else {
									jQuery(obj).removeAttr('data-name');
							  	}
						  	}
						},
				  	}
				};

				$(document).ready(function() {
					$('.article').aloha();
					$('.teaser').aloha();
				});
			</script>
		<?php endif ?>
		
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
					<strong class="logo"><a href="/">Never Sleeps Web Development Group</a></strong>
					<nav>
						<ul id="nav" class="accordion2 edit-text">
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