<?php
	require_once ('_debug.php');
	
	global $web_path;
	
	// CSS USED FOR STYLING QUERY DEBUG INFORMATION
	$error_box = "<style>.ErrorBox {font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; text-align: left; background: #fff7d7; 
						padding: 25px 10px 20px 80px;border-width: thin; border-color: #000; border-style: solid; width: 400px; height: auto;
						background-image:url({$web_path}/images/icons/error.png); background-repeat:no-repeat; background-position:top left;
						margin:auto; margin-top:100px;}</style>";

	function crop_sentence ($strText, $intLength, $strTrail)
	{
		$wsCount = 0;
		$intTempSize = 0;
		$intTotalLen = 0;
		$intLength = $intLength - strlen($strTrail);
		$strTemp = "";
		if (strlen($strText) > $intLength) :
			$arrTemp = explode(" ", $strText);
			foreach ($arrTemp as $x) :
				$strTemp .= (strlen($strTemp) <= $intLength) ? ' ' . $x : $strTemp;
			endforeach;
			$CropSentence = $strTemp . $strTrail;
		else :
			$CropSentence = $strText;
		endif;
		
		return $CropSentence;
	}
	
	// SET DEFAULT FOR A GIVEN VARIABLE
	function set_default(&$var, $default="") 
	{
		$var = (!isset($var) || (($var == "" || $var == "0000-00-00 00:00:00" || $var == "0000-00-00"))) ? $default : $var;
	}
		
	// ESCAPES SPECIAL CHARACTERS IN A STRING FOR USE IN A SQL STATEMENT
	function sql_quote($str) 
	{
		if (is_array($str)) :
			foreach($input as $var=>$val) :
				$output[$var] = xss_clean($val);
			endforeach;
		else :
			$output = (get_magic_quotes_gpc()) ? stripslashes($str) : $str;
			$output = xss_clean($output);
			$output = (function_exists("mysql_real_escape_string")) ?  mysql_real_escape_string($output) : addslashes($output);
		endif;
		
		return $output;
	}
	
	// FETCH A RESULT ROW AS AN ASSOCIATIVE ARRAY, NUMERIC OR BOTH
	function db_fetch_array($result) 
	{
		if($result && mysql_num_rows($result) > 0) :
			return mysql_fetch_array($result);
		else :
			return FALSE;
		endif;
	}
	
	// IMPORT VARIABLE INTO THE CURRENT SYMBOL TABLE (I.E. EXTRACT)
	function db_extract(&$result) 
	{
		if($result && mysql_num_rows($result) > 0) :
			foreach(db_fetch_array($result) as $key => $value) :
				global ${$key};
				${$key} = $value; 
			endforeach;
			mysql_data_seek($result,0);
		else :
			return FALSE;
		endif;
	}
	
	// BUILD COMMA DELIMMITED LIST FROM QUERY RESULT SET
	function db_build_list($result,$column=0) 
	{
		if($result && mysql_num_rows($result) > 0) :
			while($row = db_fetch_array($result)) :
				$output .= "{$row[$column]},";
			endwhile;
			
			$output = trim($output,",");
			return $output;
		else :
			return FALSE;
		endif;
	}
	
	// SEND A MYSQL QUERY WITH DEBUG OPTIONS
	function db_query($query, $line="n/a")
	{
		global $debug;
		global $web_path;
		global $error_box;
	 
		// PERFORM QUERY
		$result = mysql_query($query);
		
		// DEBUG QUERY
		if($debug) {new dBug($result);  echo "<p>";}
	
		// OUTPUT THE ACTUAL QUERY AND THE MYSQL ERROR
		if (!$result) :
			$message  = "<b>Invalid query (on line #{$line}):</b><br>" . mysql_error() . "<br><br>";
			$message .= '<b>Whole query:</b><br>' . $query . '<br><br>';
			
			if(isset($_POST)) :
				foreach($_POST as $key => $value) :
					$message .= "{$key} = {$value}<br>";
				endforeach;
			endif;
			
			$message .= "({$_SERVER['REMOTE_ADDR']}, {$_SERVER['SCRIPT_NAME']}";
			
			if($_SERVER['QUERY_STRING'] != NULL) :
				$message .= "?{$_SERVER['QUERY_STRING']}";
			endif;
			
			$message .= ")";

			if(OUTPUT_SQL_ERROR) :
				echo $error_box."<div class='ErrorBox'>{$message}</div>";
				die();
			else :
				sendmail(SYSTEM_OPERATOR_MAIL, SYSTEM_FROM_MAIL, "Invalid Query", $message);
				echo $error_box."<div class='ErrorBox'>System Application Error.  Please contact the Administrator.</div>";
				die();
			endif;
		endif; 
		
		return $result;
	}
	
	// GENERATE RANDOM HASH 
	function get_hash($num)
	{
		$chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$max = strlen($chars)-1;
		for($i=0; $i<$num; $i++) :
			$output .= $chars[rand(0,$max)];
		endfor;
		return $output;
	}

	// CREATE DROPDOWN LIST OF STATES WITH ABBREVIATIONS
	function get_states($code = TRUE)
	{
		$states = array(
			'AL'=>"Alabama",  
			'AK'=>"Alaska",  
			'AZ'=>"Arizona",  
			'AR'=>"Arkansas",  
			'CA'=>"California",  
			'CO'=>"Colorado",  
			'CT'=>"Connecticut",  
			'DE'=>"Delaware",  
			'DC'=>"District Of Columbia",  
			'FL'=>"Florida",  
			'GA'=>"Georgia",  
			'HI'=>"Hawaii",  
			'ID'=>"Idaho",  
			'IL'=>"Illinois",  
			'IN'=>"Indiana",  
			'IA'=>"Iowa",  
			'KS'=>"Kansas",  
			'KY'=>"Kentucky",  
			'LA'=>"Louisiana",  
			'ME'=>"Maine",  
			'MD'=>"Maryland",  
			'MA'=>"Massachusetts",  
			'MI'=>"Michigan",  
			'MN'=>"Minnesota",  
			'MS'=>"Mississippi",  
			'MO'=>"Missouri",  
			'MT'=>"Montana",
			'NE'=>"Nebraska",
			'NV'=>"Nevada",
			'NH'=>"New Hampshire",
			'NJ'=>"New Jersey",
			'NM'=>"New Mexico",
			'NY'=>"New York",
			'NC'=>"North Carolina",
			'ND'=>"North Dakota",
			'OH'=>"Ohio",  
			'OK'=>"Oklahoma",  
			'OR'=>"Oregon",  
			'PA'=>"Pennsylvania",  
			'RI'=>"Rhode Island",  
			'SC'=>"South Carolina",  
			'SD'=>"South Dakota",
			'TN'=>"Tennessee",  
			'TX'=>"Texas",  
			'UT'=>"Utah",  
			'VT'=>"Vermont",  
			'VA'=>"Virginia",  
			'WA'=>"Washington",  
			'WV'=>"West Virginia",  
			'WI'=>"Wisconsin",  
			'WY'=>"Wyoming"
		);
		
		if (!$code) :
			$states = array_combine(array_values($states), $states);
		endif;
		return $states;
	}
		
	// GET SUFFIX FOR AN INTEGER
	function get_suffix($x) 
	{
		$x = substr($x,-1);
		if($x == 1) : 
			$output = "st";
		elseif ($x == 2) : 
			$output = "nd";
		elseif($x == 3) :
			$output = "rd";
		else :
			$output = "th";
		endif;
		
		return $output;
	}

	function get_time($name, $id, $class, $thistime) 
	{
		echo "<select name=\"{$name}\" id=\"{$id}\" class=\"{$class}\">";
		$i = 0;
		$time = date('H:i',mktime(0, 0, 0));
		while($i < 1440) :
			$v = date('H:i:s',mktime(0, 0 + $i, 0));
			$k = date('g:i a',mktime(0, 0 + $i, 0));
			$selected = ($v == $thistime) ? 'selected' : NULL;
			echo "<option value=\"{$v}\" {$selected}>{$k}</option>\r\n";
			$i = $i + 15;
		endwhile;
		echo "</select>";
	}

	// SEND EMAIL WITH/WITHOUT ATTACHMENTS
	function sendmail($to, $from, $subject, $msg, $file=NULL) 
	{
		$uid = md5(uniqid(time()));
		$headers  = "MIME-Version: 1.0\r\n";
		$headers .= "From: {$from}\r\n";
		$headers .= "Reply-To: {$from}\r\n";
		$headers .= "X-Mailer: PHP/".phpversion()."\r\n";
		if($file == NULL) :
			$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
		else :
			$file_size = filesize($file);
			$handle = fopen($file, "r");
			$content = fread($handle, $file_size);
			fclose($handle);
			$content = chunk_split(base64_encode($content));
			$headers .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
			$headers .= "This is a multi-part message in MIME format.\r\n";
			$headers .= "--{$uid}\r\n";
			$headers .= "Content-type:text/html; charset=iso-8859-1\r\n";
			$headers .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
			$headers .= "{$msg}\r\n\r\n";
			$headers .= "--{$uid}\r\n";
			$headers .= "Content-Type: application/pdf; name=\"{$attachment}\"\r\n"; 
			// $headers .= "Content-Type: application/octet-stream; name=\"{$attachment}\"\r\n"; 
			$headers .= "Content-Transfer-Encoding: base64\r\n";
			$headers .= "Content-Disposition: attachment; filename=\"{$attachment}\"\r\n\r\n";
			$headers .= "{$content}\r\n\r\n";
			$headers .= "--{$uid}--";
		endif;
		
		$pattern = '/^([a-z0-9])(([-a-z0-9._\+])*([a-z0-9]))*\@([a-z0-9])' . '(([a-z0-9-])*([a-z0-9]))+' . '(\.([a-z0-9])([-a-z0-9_-])?([a-z0-9])+)+$/i';
		if(preg_match($pattern, $to)) :
			mail($to, $subject, $msg, $headers);
		endif;
	}
	
	function datediff($month,$day,$year) 
	{
		$today = time();
		$thisdate = mktime(0,0,0,$month,$day,$year);
		$dateDiff = $today - $thisdate;
		$fullyears = floor($dateDiff/(60*60*24*365));
		return $fullyears;
	}
	
	function format_phone($n) 
	{
		$n = preg_replace("/[^0-9]/", "", $n);
		if(strlen($n) == 7) :
			return preg_replace("/([0-9]{3})([0-9]{4})/", "$1-$2", $n);
		elseif (strlen($n) == 10) :
			return preg_replace("/([0-9]{3})([0-9]{3})([0-9]{4})/", "$1-$2-$3", $n);
		else :
			return $n;
		endif;
	}
	
	function format_url($url) 
	{
		if (!empty($url)) :
			$output = (preg_match("/http(s?):\/\//", $url)) ? $url : "http://{$url}";
		else : 
			$output = FALSE;
		endif;
		
		return $output;
	}

	function format_date($d,$format) 
	{
		$y = substr($d,0,4);
		$m = str_pad(substr($d,4,2),'/',STR_PAD_BOTH);
		$d = substr($d,6,2);
		$output = (strlen($d) > 0) ? date($format,strtotime($y.$m.$d)):NULL;

		return $output;
	}
	
	function strip_date($d) 
	{
		$thisdate = date('Y/m/d',strtotime($d));
		$output = str_replace('/','',$thisdate);

		return $output;
	}

	// VALIDATE A VARIABLE WITH A SPECIFIED RULE/EXPRESSION
	function validate($rule,$value) 
	{
		global $web_path;
		
		$valid = TRUE;
		$invalid = FALSE;
		
		switch($rule) {
			case "required": 
				$output = (strlen($value) > 0) ? $valid : $invalid;
				break;
				
			case "username":
				$pattern = '/^[a-z\d_]{5,20}$/i';
				$output = (preg_match($pattern, $value)) ? $valid : $invalid;
				break;
				
			case "url":
				$output=(filter_var($value, FILTER_VALIDATE_URL)) ? $valid : $invalid;
				break;
				
			case "email":
				$pattern = '/^([a-z0-9])(([-a-z0-9._\+])*([a-z0-9]))*\@([a-z0-9])' . '(([a-z0-9-])*([a-z0-9]))+' . '(\.([a-z0-9])([-a-z0-9_-])?([a-z0-9])+)+$/i';
				$output = (preg_match($pattern, $value)) ? $valid : $invalid;
				break;
			
			case "ssn":
				$pattern = '/^[\d]{3}-[\d]{2}-[\d]{4}$/';
				$output = (preg_match($pattern, $value)) ? $valid : $invalid;
				break;
				
			case "phone":
				$pattern = '/[\(?\d{3}\)?]?	[-\s.]?\d{3}[-\s.]\d{4}/x';
				$output = (preg_match($pattern, $value)) ? $valid : $invalid;
				break;
			
			case "date":
				$pattern = "^((18|19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$";
				$output = (preg_match($pattern, $value)) ? $valid : $invalid;
				break;
			
			case "zipcode":
				$pattern = "/^([0-9]{5})(-[0-9]{4})?$/i";
				$output = (preg_match($pattern, $value)) ? $valid : $invalid;
				break;
			
			case "password":
				$output = (strlen($value) >= 5) ? $valid : $invalid;
				break;
		}
		
		return $output;
	}

	/**
	* Filter Attributes
	*
	* Filters tag attributes for consistency and safety
	*
	* @access	public
	* @param	string
	* @return	string
	*/
	function _filter_attributes($str) {
		$out = '';

		if (preg_match_all('#\s*[a-z\-]+\s*=\s*(\042|\047)([^\\1]*?)\\1#is', $str, $matches))
		{
			foreach ($matches[0] as $match)
			{
				$out .= preg_replace("#/\*.*?\*/#s", '', $match);
			}
		}

		return $out;
	}
	
	/**
	* JS Link Removal
	*
	* Callback function for xss_clean() to sanitize links
	* This limits the PCRE backtracks, making it more performance friendly
	* and prevents PREG_BACKTRACK_LIMIT_ERROR from being triggered in
	* PHP 5.2+ on link-heavy strings
	*
	* @param	array
	* @return	string
	*/
	function _js_link_removal($match) {
		$attributes = _filter_attributes(str_replace(array('<', '>'), '', $match[1]));
		return str_replace($match[1], preg_replace("#href=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)#si", "", $attributes), $match[0]);
	}

	/**
	* JS Image Removal
	*
	* Callback function for xss_clean() to sanitize image tags
	* This limits the PCRE backtracks, making it more performance friendly
	* and prevents PREG_BACKTRACK_LIMIT_ERROR from being triggered in
	* PHP 5.2+ on image tag heavy strings
	*
	* @param	array
	* @return	string
	*/
	function _js_img_removal($match) {
		$attributes = _filter_attributes(str_replace(array('<', '>'), '', $match[1]));
		return str_replace($match[1], preg_replace("#src=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)#si", "", $attributes), $match[0]);
	}

	/**
	* Sanitize Naughty HTML
	*
	* Callback function for xss_clean() to remove naughty HTML elements
	*
	* @param	array
	* @return	string
	*/
	function _sanitize_naughty_html($matches) {
		// encode opening brace
		$str = '&lt;'.$matches[1].$matches[2].$matches[3];

		// encode captured opening or closing brace to prevent recursive vectors
		$str .= str_replace(array('>', '<'), array('&gt;', '&lt;'), $matches[4]);

		return $str;
	}
			
	/**
	* Compact Exploded Words
	*
	* Callback function for xss_clean() to remove whitespace from
	* things like j a v a s c r i p t
	*
	* @param	type
	* @return	type
	*/
	function _compact_exploded_words($matches) {
		return preg_replace('/\s+/s', '', $matches[1]).$matches[2];
	}
	
	/**
	* Attribute Conversion
	*
	* Used as a callback for XSS Clean
	*
	* @param	array
	* @return	string
	*/
	function _convert_attribute($match)	{
		return str_replace(array('>', '<', '\\'), array('&gt;', '&lt;', '\\\\'), $match[0]);
	}

	// --------------------------------------------------------------------

	/**
	* HTML Entity Decode Callback
	*
	* Used as a callback for XSS Clean
	*
	* @param	array
	* @return	string
	*/
	function _html_entity_decode_callback($match) {
		return html_entity_decode($match[0]);
	}
	
	/**
	* Remove Invisible Characters
	*
	* Used as a callback for XSS Clean
	* 
	* This prevents sandwiching null characters
	* between ascii characters, like Java\0script.
	*
	* @param	string
	* @return	string
	*/
	function _remove_invisible_characters($str) {
		static $non_displayables;

		if ( ! isset($non_displayables))
		{
			// every control character except newline (dec 10), carriage return (dec 13), and horizontal tab (dec 09),
			$non_displayables = array(
										'/%0[0-8bcef]/',			// url encoded 00-08, 11, 12, 14, 15
										'/%1[0-9a-f]/',				// url encoded 16-31
										'/[\x00-\x08]/',			// 00-08
										'/\x0b/', '/\x0c/',			// 11, 12
										'/[\x0e-\x1f]/'				// 14-31
									);
		}

		do
		{
			$cleaned = $str;
			$str = preg_replace($non_displayables, '', $str);
		}
		while ($cleaned != $str);

		return $str;
	}

	/**
	* Random Hash for protecting URLs
	*
	* @access	public
	* @return	string
	*/
	function xss_hash()	{
		if (phpversion() >= 4.2)
			mt_srand();
		else
			mt_srand(hexdec(substr(md5(microtime()), -8)) & 0x7fffffff);

		$output = md5(time() + mt_rand(0, 1999999999));

		return $output;
	}
	
	/**
	* XSS Clean
	*
	* Sanitizes data so that Cross Site Scripting Hacks can be
	* prevented.  This function does a fair amount of work but
	* it is extremely thorough, designed to prevent even the
	* most obscure XSS attempts.  Nothing is ever 100% foolproof,
	* of course, but I haven't been able to get anything passed
	* the filter.
	*
	* Note: This function should only be used to deal with data
	* upon submission.  It's not something that should
	* be used for general runtime processing.
	*
	* This function was based in part on some code and ideas I
	* got from Bitflux: http://blog.bitflux.ch/wiki/XSS_Prevention
	*
	* To help develop this script I used this great list of
	* vulnerabilities along with a few other hacks I've
	* harvested from examining vulnerabilities in other programs:
	* http://ha.ckers.org/xss.html
	*
	* @param	string
	* @return	string
	*/
	function xss_clean($str, $is_image = FALSE)	{
		global $never_allowed_str;
		global $never_allowed_regex;
		$xss_hash = xss_hash();
		
		/*
		* Is the string an array?
		*/
		if (is_array($str)) {
			while (list($key) = each($str))	{
				$str[$key] = xss_clean($str[$key]);
			}
			return $str;
		}

		/*
		* Remove Invisible Characters
		*/
		$str = _remove_invisible_characters($str);

		/*
		* Protect GET variables in URLs
		*/

		// 901119URL5918AMP18930PROTECT8198

		$str = preg_replace('|\&([a-z\_0-9]+)\=([a-z\_0-9]+)|i', $xss_hash."\\1=\\2", $str);

		/*
		* Validate standard character entities
		*
		* Add a semicolon if missing.  We do this to enable
		* the conversion of entities to ASCII later.
		*
		*/
		$str = preg_replace('#(&\#?[0-9a-z]{2,})([\x00-\x20])*;?#i', "\\1;\\2", $str);

		/*
		* Validate UTF16 two byte encoding (x00) 
		*
		* Just as above, adds a semicolon if missing.
		*
		*/
		$str = preg_replace('#(&\#x?)([0-9A-F]+);?#i',"\\1\\2;",$str);

		/*
		* Un-Protect GET variables in URLs
		*/
		$str = str_replace($xss_hash, '&', $str);

		/*
		* URL Decode
		*
		* Just in case stuff like this is submitted:
		*
		* <a href="http://%77%77%77%2E%67%6F%6F%67%6C%65%2E%63%6F%6D">Google</a>
		*
		* Note: Use rawurldecode() so it does not remove plus signs
		*
		*/
		$str = rawurldecode($str);

		/*
		* Convert character entities to ASCII 
		*
		* This permits our tests below to work reliably.
		* We only convert entities that are within tags since
		* these are the ones that will pose security problems.
		*
		*/
		$str = preg_replace_callback("/[a-z]+=([\'\"]).*?\\1/si", _convert_attribute, $str);
		$str = preg_replace_callback("/<\w+.*?(?=>|<|$)/si", _html_entity_decode_callback, $str);
		
		/*
		* Remove Invisible Characters Again!
		*/
		$str = _remove_invisible_characters($str);

		/*
		* Convert all tabs to spaces
		*
		* This prevents strings like this: ja	vascript
		* NOTE: we deal with spaces between characters later.
		* NOTE: preg_replace was found to be amazingly slow here on large blocks of data,
		* so we use str_replace.
		*
		*/

 		if (strpos($str, "\t") !== FALSE) {
			$str = str_replace("\t", ' ', $str);
		}

		/*
		* Capture converted string for later comparison
		*/
		$converted_string = $str;

		/*
		* Not Allowed Under Any Conditions
		*/

		foreach ($never_allowed_str as $key => $val) {
			$str = str_replace($key, $val, $str);   
		}

		foreach ($never_allowed_regex as $key => $val) {
			$str = preg_replace("#".$key."#i", $val, $str);   
		}

		/*
		* Makes PHP tags safe
		*
		*  Note: XML tags are inadvertently replaced too:
		*
		*	<?xml
		*
		* But it doesn't seem to pose a problem.
		*
		*/
		if ($is_image === TRUE)	{
			// Images have a tendency to have the PHP short opening and closing tags every so often
			// so we skip those and only do the long opening tags.
			$str = str_replace(array('<?php', '<?PHP'),  array('&lt;?php', '&lt;?PHP'), $str);
		} else {
			$str = str_replace(array('<?php', '<?PHP', '<?', '?'.'>'),  array('&lt;?php', '&lt;?PHP', '&lt;?', '?&gt;'), $str);
		}

		/*
		* Compact any exploded words
		*
		* This corrects words like:  j a v a s c r i p t
		* These words are compacted back to their correct state.
		*
		*/
		$words = array('javascript', 'expression', 'vbscript', 'script', 'applet', 'alert', 'document', 'write', 'cookie', 'window');
		foreach ($words as $word) {
			$temp = '';

			for ($i = 0, $wordlen = strlen($word); $i < $wordlen; $i++)	{
				$temp .= substr($word, $i, 1)."\s*";
			}

			// We only want to do this when it is followed by a non-word character
			// That way valid stuff like "dealer to" does not become "dealerto"
			$str = preg_replace_callback('#('.substr($temp, 0, -3).')(\W)#is', _compact_exploded_words, $str);
		}

		/*
		* Remove disallowed Javascript in links or img tags
		* We used to do some version comparisons and use of stripos for PHP5, but it is dog slow compared
		* to these simplified non-capturing preg_match(), especially if the pattern exists in the string
		*/
		do {
			$original = $str;

			if (preg_match("/<a/i", $str)) {
				$str = preg_replace_callback("#<a\s+([^>]*?)(>|$)#si", _js_link_removal, $str);
			}

			if (preg_match("/<img/i", $str)) {
				$str = preg_replace_callback("#<img\s+([^>]*?)(\s?/?>|$)#si", _js_img_removal, $str);
			}

			if (preg_match("/script/i", $str) OR preg_match("/xss/i", $str)) {
				$str = preg_replace("#<(/*)(script|xss)(.*?)\>#si", '[removed]', $str);
			}
		}
		while($original != $str);

		unset($original);

		/*
		* Remove JavaScript Event Handlers
		*
		* Note: This code is a little blunt.  It removes
		* the event handler and anything up to the closing >,
		* but it's unlikely to be a problem.
		*
		*/
		$event_handlers = array('[^a-z_\-]on\w*','xmlns');

		if ($is_image === TRUE)	{
			/*
			* Adobe Photoshop puts XML metadata into JFIF images, including namespacing, 
			* so we have to allow this for images. -Paul
			*/
			unset($event_handlers[array_search('xmlns', $event_handlers)]);
		}

		$str = preg_replace("#<([^><]+?)(".implode('|', $event_handlers).")(\s*=\s*[^><]*)([><]*)#i", "<\\1\\4", $str);

		/*
		* Sanitize naughty HTML elements
		*
		* If a tag containing any of the words in the list
		* below is found, the tag gets converted to entities.
		*
		* So this: <blink>
		* Becomes: &lt;blink&gt;
		*
		*/
		$naughty = 'alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss';
		$str = preg_replace_callback('#<(/*\s*)('.$naughty.')([^><]*)([><]*)#is', _sanitize_naughty_html, $str);

		/*
		* Sanitize naughty scripting elements
		*
		* Similar to above, only instead of looking for
		* tags it looks for PHP and JavaScript commands
		* that are disallowed.  Rather than removing the
		* code, it simply converts the parenthesis to entities
		* rendering the code un-executable.
		*
		* For example:	eval('some code')
		* Becomes:		eval&#40;'some code'&#41;
		*
		*/
		$str = preg_replace('#(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\s*)\((.*?)\)#si', "\\1\\2&#40;\\3&#41;", $str);

		/*
		* Final clean up
		*
		* This adds a bit of extra precaution in case
		* something got through the above filters
		*
		*/
		foreach ($never_allowed_str as $key => $val) {
			$str = str_replace($key, $val, $str);   
		}

		foreach ($never_allowed_regex as $key => $val) {
			$str = preg_replace("#".$key."#i", $val, $str);
		}

		/*
		*  Images are Handled in a Special Way
		*  - Essentially, we want to know that after all of the character conversion is done whether
		*  any unwanted, likely XSS, code was found.  If not, we return TRUE, as the image is clean.
		*  However, if the string post-conversion does not matched the string post-removal of XSS,
		*  then it fails, as there was unwanted XSS code found and removed/changed during processing.
		*/

		if ($is_image === TRUE) {
			if ($str == $converted_string) {
				return TRUE;
			} else {
				return FALSE;
			}
		}

		return $str;
	}
?>