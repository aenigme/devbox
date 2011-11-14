<?php defined('LIBRARY') or die(require_once realpath(dirname(__FILE__)) . '/../404.php');

    $apikey = 'f7e1fc013b75e1a110fa03d42d1f5162-us2';
    $listID = 'c6458cce9a';
	
    if (isset($_POST['subscribe'])) :
		if (preg_match("(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,})", $_POST['email'])) :

			$to = $_POST['email'];
			$from = 'hello@olyfe.com';
			$subject = 'Thank You from oLyfe';
			$msg = 'Thank you for your interest and request. We will email you as soon as our beta is ready for use. If you have any further questions feel free to email us at info@olyfe.com -oLyfe Team.';

			sendmail($to, $from, $subject, $msg); // Process the contact form here

			$url = sprintf('http://api.mailchimp.com/1.2/?method=listSubscribe&apikey=%s&id=%s&email_address=%s&merge_vars[OPTINIP]=%s&merge_vars[MMERGE1]=webdev_tutorials&output=json', $apikey, $listID, $email, $_SERVER['REMOTE_ADDR']);
			$ch = curl_init($url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$data = curl_exec($ch);
			curl_close($ch);
			$arr = json_decode($data, true);
	
			if ($arr == 1) :
				echo 'Check now your e-mail and confirm your subsciption.';
			else :
				switch ($arr['code']) :
					case 214 :
						echo 'You are already subscribed.';
					break;
					
					default :
						echo 'Unkown error...'; // Check the MailChimp API for more options
					break;
				endswitch;
			endif;
		endif; exit(); // End conditional
	endif;
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>

	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" type="text/css" href="/assets/css/reset.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/assets/css/contact.css" media="screen" />
	<script type="text/javascript" src="/assets/js/contact.js"></script>
		
	<!-- www.phpied.com/conditional-comments-block-downloads/ -->
	<!--[if IE]><![endif]-->

	<!--[if (gte IE 6)&(lte IE 8)]>
		<link rel="stylesheet" type="text/css" href="/css/ie.css" />
		<script type="text/javascript" src="/js/selectivizr.js"></script>
	<![endif]-->
	
	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

</head>

<body id="sign-up-page">

	<div id="container">
		<div id="bgContainer"></div>
		<div class="container_16" id="mainContainer" role="main">
			<div class="formPanel">
				<a name="top" id="top"></a>
				<form action="/users" id="signUpForm" method="post" name="signUpForm">
					<input id="return_to" name="return_to" type="hidden">
					<h5 class="errorTitle"></h5>
					<div class="fieldGroup">
						<label class="title">Email <span>We will send your videos to this address.</span></label>
						<div class="doubleCol">
							<label class="secondaryLabel"><input class="field_2col required email" id="user_email" name="user[email]" size="30" tabindex="11" type="text"></label>
						</div>
					</div>
					<div class="fieldGroup visuallyhidden">
						<label class="title">Password </label><br>
						<div>
							<label class="secondaryLabel"><input class="required" id="user_password" minlength="4" name="user[password]" size="30" tabindex="12" type="password"> Password</label>
						</div>
						<div>
							<label class="secondaryLabel"><input class="required" equalto="#user_password" id="user_password_confirmation" minlength="4" name="user[password_confirmation]" size="30" tabindex="13" type="password"> Confirm Password</label>
						</div>
					</div>
					<div class="fieldGroup">
						<label class="title">About You <span>Help us get to know you a little better. &nbsp; <a class="tooltip" title="We need to collect this information in order to confirm that you are old enough to be a legal registered user and in order to customize your experience.">Why do we ask?</a></span></label><br>
						<div>
							<label class="secondaryLabel">
								<input class="required" id="user_first_name" name="user[first_name]" size="30" tabindex="14" type="text"> First Name</label> 
								<label class="secondaryLabel"></label>
								<ul class="radioGroup">
									<li>
										<label class="radioLabel"><input class="required" id="user_gender_is_male_true" name="user[gender_is_male]" tabindex="18" value="true" type="radio"> male</label>
									</li>
									<li>
										<label class="radioLabel"><input checked="checked" class="required" id="user_gender_is_male_false" name="user[gender_is_male]" tabindex="19" value="false" type="radio"> female</label>
									</li>
								</ul>
						</div>
						<div>
							<label class="secondaryLabel">
								<input class="required" id="user_last_name" name="user[last_name]" size="30" tabindex="15" type="text"> Last Name
							</label> 
						</div>
					</div><input name="d_password" value="" type="hidden"><input name="d_email" style="display: none; position: absolute; left: 9000px; top: 9000px;" type="text"><input name="timestamp" value="1253561221" type="hidden">
					<div class="fieldGroup">
						<div class="toggleSelected" id="toggleIcon"></div><label id="toggleControl" class="title">Promo/Referral Code <span>Optional</span></label>
						<div class="doubleCol">
							<label style="display: inline;" id="togglePanel" class="secondaryLabel"><input class="field_2col" id="user_code" name="user[code]" size="30" tabindex="22" type="text"><br></label>
						</div>
					</div>
					<div class="buttonGroup">
						<p class="terms">
							I have read and agree to the <a href="http://en.wikipedia.org/wiki/Terms_of_service" target="_blank">terms of service</a> and <a href="http://en.wikipedia.org/wiki/Privacy_policy" target="_blank">privacy policy</a>. <input id="user_terms_accepted" name="user[terms_accepted]" value="1" type="hidden"> <button type="submit" class="button" tabindex="23"><strong>Sign Up</strong></button>
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
