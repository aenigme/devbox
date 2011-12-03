<?php defined('LIBRARY') or die('No direct script access allowed');

	require_once DIR_VIEW . '/neversleeps/_header.php'; 
?>

<div class="major-holder">
	<div class="major-area">
		<div class="major-frame">
			<!-- main -->
			<div id="main">
				<!-- page heading -->
				<div class="page-heading">
					<!-- navigation -->
					<h4>Contact Us</h4>
				</div>
				<div class="main-holder">
					<!-- content -->
					<section id="content">
						<!-- post -->
						<section class="post">
							<!-- form comment -->
							<div id="message-note"></div>
							<form class="form-comment" method="POST" id="contactForm">
								<fieldset>
									<legend class="hidden">Comment form</legend>
									<div class="row">
										<label for="name">Name *</label>
										<div class="text"><input id="name" name="name" type="text" value=""></div>
									</div>
									<div class="row">
										<label for="email">E-mail * (Will not be published)</label>
										<div class="text"><input id="email" name="email" type="text"></div>
									</div>
									<div class="row">
										<label for="subject">Subject</label>
										<div class="text"><input id="subject" name="subject" type="text"></div>
									</div>
									<div class="row">
										<div class="textarea">
											<textarea id="message" name="message" cols="80" rows="4" title="comment"></textarea>
										</div>
									</div>
									<div class="row">
										<input class="submit" type="submit" name="submit" id="submit" value="SUBMIT">
									</div>
								</fieldset>
							</form>							
						</section>
					</section>
					<!-- sidebar -->
					<aside id="sidebar">										
						<!-- side box -->
						<section class="side-box">
							<h6>Contact Details</h6>
							<!-- project box -->
							<div class="project-side">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut lab ore et dolore magna aliqua.</p>
								<ul class="contact_list">
									<li class="home">344 Madison Avenue <br> New York 10027</li>
									<li class="phone">Tel: +1 416 777 8000</li>
									<li class="fax">Fax: +1 416 777 8002</li>
									<li class="mail"><a href="mailto:info@companyname.com">info@companyname.com</a></li>
									<li class="help"><a href="mailto:support@companyname.com">support@companyname.com</a></li>
								</ul>
							</div>
						</section>
					</aside>
				</div>
			</div>
			
<?php require_once DIR_VIEW . '/neversleeps/_footer.php'; ?>