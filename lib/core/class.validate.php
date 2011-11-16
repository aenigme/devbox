<?php defined('LIBRARY') or die('No direct script access.');

class Validate 
{
	var $pattern;
	var $result = array();
	var $valid = TRUE;
	var $invalid = FALSE;
	var $required = FALSE;

	// VALIDATE A VARIABLE WITH A SPECIFIED RULE/EXPRESSION
	public function load($rule, $value, $title = '') 
	{
		$this->required = FALSE;
		
		$str = explode("|", $rule);
		
		foreach($str as $key => $rule) 
		{
			switch($rule) 
			{
				case "required": 
					$this->pattern = '/.{1,999}$/';
					$this->tip = (isset($tip)) ? $tip: "This field is required";
					$this->required = TRUE;
					break;
				
				case "confirm": 
					$this->pattern = '/.{1,999}$/';
					$this->tip = (isset($tip)) ? $tip: "Please confirm the password entry";
					$this->required = TRUE;
					break;
					
				case "upload": 
					$this->pattern = '/.{1,999}$/';
					$this->tip = (isset($tip)) ? $tip: "You must upload a file for this entry in the record";
					$this->required = TRUE;
					break;
					
				case "str": 
					$this->pattern = '/.{1,999}$/';
					$this->tip = (isset($tip)) ? $tip: "This field is required";
					break;
				
				case "integer": 
					$this->pattern = '/^[0-9]+$/i';
					$this->tip = (isset($tip)) ? $tip: "Please enter a valid numerical value.  No commas or decimal points.";
					break;

				case "float": 
					$this->pattern = '/^[-+]?[0-9]*\.?[0-9]+$/i';
					$this->tip = (isset($tip)) ? $tip: "Please enter a valid float value.  Non-alpha characters only, negative or positive (43.21 or -56.43 or 987)";
					break;
							
				case "username":
					$this->pattern = '/^[a-z\d_]{5,20}$/i';
					$this->tip = "Username must be between 5-20 characters long";
					break;
					
				case "url":
					$this->pattern = '/^[a-zA-Z]+[:\/\/]+[A-Za-z0-9\-_]+\\.+[A-Za-z0-9\.\/%&=\?\-_]+$/i';
					$this->tip = "Please enter a valid web address. Please include 'http://' at the beginning";
					break;
					
				case "email":
					$this->pattern = '/^([a-z0-9])(([-a-z0-9._\+])*([a-z0-9]))*\@([a-z0-9])' . '(([a-z0-9-])*([a-z0-9]))+' . '(\.([a-z0-9])([-a-z0-9_-])?([a-z0-9])+)+$/i';
					$this->tip = "Please enter a valid email address";
					break;
				
				case "ssn":
					$this->pattern = '/^[\d]{3}-[\d]{2}-[\d]{4}$/';
					$this->tip = "Please enter a valid SSN, formatted as 123-45-6789";
					break;
					
				case "phone":
					$this->pattern = '/[\(?\d{3}\)?]?	[-\s.]?\d{3}[-\s.]\d{4}/x';
					$this->tip = "Please enter a valid phone number. Area code is optional. (555-1212 or 555-555-1212)";
					break;

				case "enhancedphone":
					$this->pattern = '#^(((?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4}))|\+(?:[0-9] ?){6,14}[0-9])$#';
					$this->tip = "Please enter a valid phone number.";
					break;

				case "date":
					$this->pattern = "/^(0[1-9]|1[012])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/((18|19|20)\d\d)$/";
					$this->tip = "Please enter a valid date (MM/DD/YYYY)";
					break;
				
				case "sql-date":
					$this->pattern = "/^((18|19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/";
					$this->tip = "Please enter a valid date (YYYY-MM-DD)";
					break;
				
				case "zipcode":
					$this->pattern = "/^([0-9]{5})(-[0-9]{4})?$/i";
					$this->tip = "Please enter a valid Zipcode";
					break;
				
				case "password":
					$this->pattern = '/^[a-zA-Z0-9_-+]{1,15}$/i';
					$this->tip = "Password must be between 5 and 15 characters long and contain letters, numbers, underscores, dashes and plus symbols(-_+) ONLY.";
					break;
					
				case "alphanumeric":
					$this->pattern = "/^([a-zA-Z0-9_-]+)$/";
					$this->tip = "This field must contain letters, numbers and underscores ONLY. (example: john_123)";
					break;
				
				case "resume":
					$this->pattern = "/(.*?)\.(txt|doc|pdf)$/";
					$this->tip = "Resume must be an Acrobat (.PDF), MS Word (.DOC) or plain text (.TXT) file.";
					break;
				
				case "youtube":
					$this->pattern = "#(http://www.youtube.com)?/(v/([-|~_0-9A-Za-z]+)|watch\?v\=([-|~_0-9A-Za-z]+)&?.*?)#i";
					$this->tip = "Please enter a valid URL for a youtube video. (http://www.youtube.com/watch?v=xxx)";
					break;

				case "ccno":
					$this->pattern = "/^((4(\d{12}|\d{15}))|(5\d{15})|(6011\d{12})|(3(4|7)\d{13}))$/";
					$this->tip = "Please enter a valid Credit Card Number.";
					break;					

				case "exp-date":
					$this->pattern = "/^(0[1-9]|1[012])\/((20)\d\d)$/";
					$this->tip = "Please enter a valid date (MM/YYYY)";
					break;
			}
			
			if (is_array($value)) $output = (count($value) > 0) ? $this->valid: $this->invalid;
			else $output = (preg_match($this->pattern, $value) && $value != $title) ? $this->valid: $this->invalid;
		}

		if($value == '' && $this->required) 
			return $output.'|'.$this->tip;
		else if(count($value) || strlen($value) > 0) 
			return $output.'|'.$this->tip;
		else 
			return FALSE;			
	}
}
