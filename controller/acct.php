<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; New Account';
	
    if($Auth->loggedIn()) redirect(WEB_ROOT);

    if(!empty($_POST['username']))
    {
		if ($_POST['password'] != $_POST['confirm']) 
		{
			$Error->add('username', "We're sorry, but your password and confirmation did not match. Please try again.");
		}
		else if($Auth->createNewUser($_POST['username'], $_POST['password']))
		{
			$Auth->login($_POST['username'], $_POST['password']);
			redirect('/new.php');
		}
		else
			$Error->add('username', "We're sorry, that username already exists. Please try again.");
    }

	require_once DIR_VIEW . '/_header.php'; 
	require_once DIR_VIEW . '/_navigation.php';
?>
	
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="span16">
				
					<?php if (strlen($Error)): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
							    <p><?= $Error; ?></p>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<div style="background-image: url('/assets/images/account/background_acct.jpg'); width: 562px; height: 482px; margin: 20px auto;">
							<div class="span5" style="padding: 20px 0 0 10px;">
								<div class="page-header">
									<h4>Create a new account</h4>
								</div>
								<form action="<?= $_SERVER['PHP_SELF']; ?>" method="post" class="form-stacked" style="margin-left: -20px;"> 
									<div class="clearfix">
										<label for="focus">Choose a username:</label> 
										<input type="text" name="username" value="<?= set_default($_POST['username']) ?>" id="focus" />
									</div>
									<div class="clearfix">
										<label for="password">Choose a password:</label> 
										<input type="password" name="password" value="" id="password" /><br />
										<span class="help-inline">Alphanumeric and must be at least 8 characters.</span>
									</div>
									<div class="clearfix">
										<label for="confirm">Retype password:</label> 
										<input type="password" name="confirm" value="" id="confirm" />
									</div>
									<div class="clearfix">
										<label for="email">Contact email:</label> 
										<input type="text" name="email" value="<?= set_default($_POST['email']) ?>" id="email" /><br />
										<span class="help-inline">Up to 50 characters.</span>
									</div>
									<div class="clearfix">
										<input type="submit" name="btnlogin" value="Sign up" id="btnlogin" class="btn success"/>
									</div>
									
									<input type="hidden" name="r" value="<?PHP echo htmlspecialchars(@$_REQUEST['r']); ?>" id="r">
								</form>
							</div>
							<div class="span3" style="padding: 20px 0 0 30px;">
								<strong>Or sign up with your Facebook or Twitter account</strong>
								<p style="margin: 20px 0;">Now you can link your accounts and sign in using your Facebook or Twitter account. It's quick, easy, and secure.</p>
								<p><img src="/assets/images/account/facebook_connect.png" width="100%"></p>
								<p><img src="/assets/images/account/twitter_connect.png" width="100%"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php require_once DIR_VIEW . '/_footer.php'; ?>
