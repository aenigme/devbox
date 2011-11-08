<?php defined('LIBRARY') or die('No direct script access.'); 

	$page_title = '&raquo; Dashboard';
	
    if(!$Auth->loggedIn()) redirect('/login');

	require_once DOC_ROOT . '/_header.php'; 
	require_once DOC_ROOT . '/_navigation.php';
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span16">
					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
									<?php foreach ($Error as $k => $v): ?>
										<p><?= $v; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>
				</div>
			</div>
			<div class="row">
				<div class="span-one-third">
					<a href="/survey/new">
					<img alt="" src="/assets/images/icons/dashboard/icon_10.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Survey</h3></a>
					<p>Build a survey with unlimited questions and download final results.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_06.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Contact From</h3>
					<p>Supports direct email, <a href="http://www.mailchimp.com" target="_blank">Mailchimp</a> and 
					<a href="http://www.constantcontact.com" target="_blank">Constant Contact</a>.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_02.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Customer Support</h3>
					<p>Customizable Customer Support and Feedback Forms.</p>

					<img alt="" src="/assets/images/icons/dashboard/icon_03.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Twitter Support</h3>
					<p>Grab incoming tweets and organize them based on their status.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_01.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee FAQ</h3>
					<p>Build a Frequently Asked Questions list.</p>
				</div>
				<div class="span-one-third">
					
				</div>
				<div class="span-one-third">
					
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>