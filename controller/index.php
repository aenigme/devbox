<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; Dashboard';
	
    if(!$Auth->loggedIn()) redirect(WEB_ROOT);

	require_once DIR_VIEW . '/_header.php'; 
	require_once DIR_VIEW . '/_navigation.php';
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
					<img alt="" src="/assets/images/origami/file.png" class="thumbnail floatleft" style="margin: 10px 10px 0 0; width: 55px;">
					<h3>EZee Pages</h3>
					<p>Easily add pages using your default template or start a new template.</p>
					
					<a href="/survey/new/">
					<img alt="" src="/assets/images/icons/dashboard/icon_10.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Survey</h3></a>
					<p>Build a survey with unlimited questions and download final results.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_06.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Contact Form</h3>
					<p>Supports direct email, <a href="http://www.mailchimp.com" target="_blank">Mailchimp</a> and 
					<a href="http://www.constantcontact.com" target="_blank">Constant Contact</a>.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_03.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Twitter Support</h3>
					<p>Grab incoming tweets and organize them based on their status.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_01.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee FAQ</h3>
					<p>Build a Frequently Asked Questions list.</p>
				</div>
				<div class="span-one-third">
					<img alt="" src="/assets/images/milky/78.png" class="thumbnail floatleft" style="margin: 10px 10px 0 0; width: 55px;">
					<h3>EZee Shopping Cart</h3>
					<p>Create a simple shopping cart with <a href="http://www.authorize.net" target="_blank">Authorize.net</a> and 
					<a href="http://www.paypal.com" target="_blank">Paypal</a> support.</p>
					
					<a href="/testimonial/">
					<img alt="" src="/assets/images/origami/discussion.png" class="thumbnail floatleft" style="margin: 10px 10px 0 0; width: 55px;">
					<h3>EZee Testimonials</h3></a>
					<p>Manage and approve customer testimonials.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_02.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Customer Support</h3>
					<p>Customizable Customer Support and Feedback Forms.</p>

					<img alt="" src="/assets/images/origami/save.png" class="thumbnail floatleft" style="margin: 10px 10px 0 0; width: 55px;">
					<h3>EZee Backups</h3>
					<p>Backup your website and database with <a href="http://www.dropbox.com" target="_blank">Dropbox</a> support.</p>
					
					<img alt="" src="/assets/images/icons/dashboard/icon_18.png" class="thumbnail floatleft" style="margin-top: 10px;">
					<h3>EZee Settings</h3>
					<p>Setup Admin access, email and database settings, and more.</p>
				</div>
				<div class="span-one-third">
					
				</div>
			</div>
		</div>

<?php require_once DIR_VIEW . '/_footer.php'; ?>
