<?php defined('LIBRARY') or die('No direct script access allowed');
	
	ini_set('error_reporting', E_ALL);
	ini_set('display_errors', 1);
	
	switch ($requestURI[2]) 
	{
		case 'contactus':
			$param = array(
				'rule' => array(
					'email' => 'Entering a valid email address? (name@example.com)',
					'name' => 'Please enter your full name',
					'message' => 'Please enter a brief question or comment',
				)
			);
			echo _sendmail($param);
			break;
	}
	
	function _sendmail($param = array('rule' => array()))
	{
		$Input = new Input();
		
		$tmp = NULL;
		$answer_list = NULL;
		$alert = NULL;
		$tooltip = NULL;
		$filename = NULL;
		$attachment = FALSE;
		$error = FALSE;
		$errormessage = 'There are a few required fields that are missing...';
		$thanks = "Thanks for the email! We'll get back to you as soon as possible!";
		$email_pattern = '/^([a-z0-9])(([-a-z0-9._\+])*([a-z0-9]))*\@([a-z0-9])' . '(([a-z0-9-])*([a-z0-9]))+' . '(\.([a-z0-9])([-a-z0-9_-])?([a-z0-9])+)+$/i';

		extract($param);
		
		// LOOP THROUGH THE RULES (SEE config/email) AND MATCH WITH POST ARRAY
		// VALIDATE THE RULE AND RESPOND WITH VALIDATION ICONS

		foreach ($rule as $key => $value) 
		{
			// VALIDATE EMAIL ADDY
			if ($key == 'email' && !preg_match($email_pattern, $_POST[$key])) 
			{
				$error = TRUE;
				$alert .= "<li>" . $value . "</li>";
				$tooltip .= "$('[name=\"{$key}\"]').attr('value', '').removeClass('bold');$('[name=\"{$key}\"]').after('<span class=\"tooltip\" title=\"{$value}\"><img src=\"/assets/images/icons/exclamation.png\"></span>');";
			}
			// ELSE, RADIO & CHECKBOX SUBMISSION
			else if (!isset($_POST[$key])) 
			{
				$error = TRUE;
				$alert .= "<li>" . $value . "</li>";
				$tooltip .= "$('span').remove('#{$key}');";	
				$tooltip .= "$('span.{$key}').after('<span id=\"{$key}\" class=\"tooltip\" title=\"{$value}\" alt=\"{$value}\" style=\"margin-top:0px;\"><img src=\"/assets/images/icons/exclamation.png\"></span>');";
			}
			// ELSE, REGULAR INPUT SUBMISSION
			else if ($Input->post($key) ==  '') 
			{
				$error = TRUE;
				$alert .= "<li>" . $value . "</li>";
				$tooltip .= "$('[name=\"{$key}\"]').attr('value', '').removeClass('bold');$('[name=\"{$key}\"]').after('<span id=\"{$key}\" class=\"tooltip\" title=\"{$value}\" alt=\"{$value}\"><img src=\"/assets/images/icons/exclamation.png\"></span>');";
			}
			// ELSE, CLEAR ANY LEFT OVER TOOLTIPS OR ERROR MESSAGES
			else
			{
				$tooltip .= "$('span').remove('#{$key}');";	
			}
		}
		
		// VALIDATE ATTACHMENT
		if ($attachment) 
		{
			if (isset($_FILES[$attachment]) && !preg_match("/(.*?)\.(txt|doc|pdf|docx)$/", $_FILES[$attachment]['name']))
			{
				$error = TRUE;
				$alert .= "<li>" . $alertresume . "</li>";
			} 
			else if (isset($_FILES[$attachment])) 
			{
				$filename = $_FILES[$attachment]['name'];
				$file = move_uploaded_file($_FILES[$attachment]['tmp_name'], DOCROOT . 'temp/'. $filename);
			}
		}
		
		// IF THE USER ERR'D, PRINT THE ERROR MESSAGES
		if ($error) 
		{
			$output = $errormessage;
			$output .= "<ul>";
			$output .= "<script>$(document).ready(function(){ $('span.tooltip').remove(); {$tooltip} });</script>";
			$output .= "</ul>";

		} 
		// IF THE USER DIDN'T ERR AND THERE IS IN FACT A MESSAGE, TIME TO EMAIL IT
		else 
		{
			$to_list = explode(',', Common::get_option('contactus_email'));			
			$from = Common::get_option('noreply_email');
			$subject = $Input->post('subject');
			$body = $Input->post('message');
			
			// BUILD RESPONSE LIST FROM CONTACT FORM ($_POST['name'])
			$response = array(
				'Full Name' => $Input->post('name'),
				'Email' => $Input->post('email'),
			);
			
			$response_details = Config::get('emailQuestionaire');
			foreach ($response_details as $key => $value) 
			{
				if (is_array($Input->post($key))) 
				{
					if (count($Input->post($key)) > 0) 
						$response[$value] = array2list($Input->post($key));
				}
				elseif (strlen($Input->post($key)) > 0) 
				{
					$response[$value] = $Input->post($key);
				}
			}
			
			foreach ($response as $label => $answer)
			{
				$answer_list .= "<tr><td align=\"right\" valign=\"top\" width=\"200\">{$label}:</td><td><strong>{$answer}</strong></td></tr>";
			}
			
			// 	TODO Template for admin messages should be moved to a configuration file.
			$message = <<<EOF
				<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
				<html>
				   <head>
				      <title>{$subject}</title>
				   </head>
				   <body>
				      <div  style="border:10px solid #c1c1c1;   line-height: 16px;  width:600px; color:#333333; font-size: small; font-family:Arial, Helvetica, sans-serif;">
				        <div style="border:1px solid #9791aa; padding:20px;">
				          <table width="100%" border="0" cellpadding="3" cellspacing="0" style="border-bottom:1px dashed #999999; padding-bottom:8px;">
				            <tr>
				              <td valign="bottom" style="padding-bottom:10px;"><span style="font-size: 21px; color: #1F92BF;  ">{$subject}</span></td>
				              <td align="right" valign="top"><a href="http://{$_SERVER['SERVER_NAME']}"><img src="http://{$_SERVER['SERVER_NAME']}/assets/images/email_stamp.gif" height="80" border="0" /></a></td>
				            </tr>
				          </table>
				          	{$Input->post('message')}
				          <table width="100%" border="0" cellpadding="4" cellspacing="0" style="font-size:12px;">
							{$answer_list}
				          </table>
				          <p style="font-size: x-small; margin-bottom: 0;">Note: This e-mail was automatically generated. Please do not respond to this e-mail address; it comes from our automated alert system, which is not monitored for responses.</p>
				        </div>
				      </div>
				   </body>
				</html>
EOF;

			if ($attachment) sendmail($to, $from, $subject, $message, $filename); 
			if ($attachment) sendmail($to, $from, $subject, $message); 
			
			// SEND CONFIRMATION EMAIL TO USER
			$to = $Input->post('email');
			$company = Common::get_option('company_name');
			$subject = 'Automated confirmation from ' . $company;
			$message = <<<EOF
				<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
				<html>
				   <head>
				      <title>Confirmation of your request</title>
				   </head>
				   <body>
				      <div  style="border:10px solid #c1c1c1;   line-height: 16px;  width:600px; color:#333333; font-size: small; font-family:Arial, Helvetica, sans-serif;">
				        <div style="border:1px solid #9791aa; padding:20px;">
				          <table width="100%" border="0" cellpadding="3" cellspacing="0" style="border-bottom:1px dashed #999999; padding-bottom:8px;">
				            <tr>
				              <td valign="bottom" style="padding-bottom:10px;"><span style="font-size: 21px; color: #1F92BF;  ">Confirmation of your request: <br />{$subject}</span></td>
				              <td align="right" valign="top"><a href="http://{$_SERVER['SERVER_NAME']}"><img src="http://{$_SERVER['SERVER_NAME']}/assets/images/email_stamp.gif" height="80" border="0" /></a></td>
				            </tr>
				          </table>
			          	  Acknowledgement: Thank you for choosing {$company}. We have received your email request for "{$Input->post('subject')}" and will contact you  within 1 business day. 
				          <p style="font-size: x-small; margin-bottom: 0;">Note: This e-mail was automatically generated. Please do not respond to this e-mail address; it comes from our automated alert system, which is not monitored for responses.</p>
				        </div>
				      </div>
				   </body>
				</html>
EOF;

			sendmail($to, $from, $subject, $message); 
			$output = $thanks;
		}
		return $output;
	}
