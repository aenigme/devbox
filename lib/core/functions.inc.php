<?php

	// Class Autloader
	spl_autoload_register('framework_autoload');

	function framework_autoload($class_name)
	{
	    $filename = LIBRARY . '/class.' . strtolower($class_name) . '.php';
	    if(file_exists($filename))
	        require $filename;
	}

	// SET DEFAULT FOR A GIVEN VARIABLE
	function set_default(&$var, $default="") 
	{
		$var = (!isset($var) || (($var == "" || $var == "0000-00-00 00:00:00" || $var == "0000-00-00"))) ? $default : $var;
		return $var;
	}
	
	function shuffle_assoc($array)
	{
	   $keys = array_keys($array);
	   shuffle($keys);
	   return array_merge(array_flip($keys) , $array);
	}
	
	/**
	 * Convert UTF-8 characters to their equivalent ISO map
	 *
	 * @param string $str 
	 * @return string
	 * @author j4kp07
	 */
	function utf82iso($str)
	{
		$output = str_replace('™', ' (TM)', $str);
		$output = str_replace('None', '', $output);
		return iconv("UTF-8", "ISO-8859-1//TRANSLIT", $output);
	}
	
	/**
	 * Searches the array (recursively) for a given value and returns the corresponding key if successful
	 *
	 * @param string $needle 
	 * @param array $haystack 
	 * @param boolean $partial_matches 
	 * @param boolean $search_keys 
	 * @author j4kp07
	 */
	function array_find_r($needle, $haystack, $partial_matches = false, $search_keys = false) 
	{
		if(!is_array($haystack)) return false;
		
		foreach($haystack as $key=>$value) 
		{
			$what = ($search_keys) ? $key : $value;
			if($needle===$what) return $key;
			else if($partial_matches && @strpos($what, $needle)!==false) return $key;
			else if(is_array($value) && self::array_find_r($needle, $value, $partial_matches, $search_keys)!==false) return $key;
		}
		return false;
	}
	
	/**
	 * Convert an object to an array
	 *
	 * @param string $object 
	 * @return array
	 * @author j4kp07
	 */
	function object2array($object) 
	{
		$array = array();
	   	if (is_object($object)) 
		{
			$array = $object->result_array();
		}
	   	return $array;
	}
	
	/**
	 * Convert an array to a comma delimited list
	 *
	 * @param string $array 
	 * @return string 
	 * @author j4kp07
	 */
	function array2list($array = '')
	{
		$output = '';
		
		if(is_array($array)) 
		{
			foreach ($array as $key => $value) 
			{
				$output .= "{$value},";
			}

			$output = trim($output, ',');
		}
		
		return $output;
	}
	
	/**
	 * Convert an array to an object
	 *
	 * @param string $array 
	 * @return object
	 * @author j4kp07
	 */
	function array2object($array) 
	{
		$object = new stdClass();
	   	if (is_array($array) && count($array) > 0) 
		{
	    	foreach ($array as $name=>$value) 
			{
	        	$name = strtolower(trim($name));
	         	if (!empty($name)) 
				{
	            	$object->$name = $value;
	         	}
	      	}
	   	}
	   	return $object;
	}
	
	/**
	 * Sort and array of objects by its properties
	 *
	 * @param object $object 
	 * @param object $property
	 * @return object
	 * @author j4kp07
	 */
	function osort(&$object, $property) 
	{
	    usort($object, create_function('$a,$b', 'if ($a->' . $property . '== $b->' . $property .') return 0; return ($a->' . $property . '< $b->' . $property .') ? -1 : 1;'));
	}
	
	/**
	 * Applies the callback to the elements of the given arrays (recursively)
	 *
	 * @param callback $func 
	 * @param array $arr 
	 * @return void
	 * @author j4kp07
	 */
	function array_map_recursive($func, $arr)
	{
		$result = array();
		do
		{
			$key = key($arr);
			if (is_array(current($arr))) 
			{
				$result[$key] = self::array_map_recursive($func, $arr[$key]);
			} 
			else 
			{
				$result[$key] = self::$func(current($arr));
			}     
		} 
		while (next($arr) !== false);
		return $result;
	}
	
	/**
	 * Quote string with slashes (recursively)
	 *
	 * @param array $arr 
	 * @return array
	 * @author j4kp07
	 */
	function addslashes_array($arr)
	{
	    if(is_array($arr))
		{
	        $tmp = array();
	        foreach ($arr as $key1 => $val)
			{
	            $tmp[$key1] = self::addslashes_array($val);
	        }
	        return $tmp;
	    }
		else
		{
	        return addslashes(stripslashes($arr));
	    }
	}	
	
	/**
	 * Un-quotes a quoted string (recursively)
	 *
	 * @param array $arr 
	 * @return array
	 * @author j4kp07
	 */
	function stripslashes_array($arr)
	{
	    if(is_array($arr))
		{
	        $tmp = array();
	        foreach ($arr as $key1 => $val)
			{
	            $tmp[$key1] = self::stripslashes_array($val);
	        }
	        return $tmp;
	    }
		else
		{
	        return stripslashes($arr);
	    }
	}
	
	/**
	 * Tests if the current request is an AJAX request by checking the X-Requested-With HTTP
	 * request header that most popular JS frameworks now set for AJAX calls.
	 *
	 * @return  boolean
	 */
	function is_ajax()
	{
		return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest');
	}
	
	// Returns the first $num characters of $strText with a trailing $strTrail
	function max_chars ($str, $num, $trail)
	{
		$wsCount = 0;
		$intTempSize = 0;
		$intTotalLen = 0;
		$intLength = $num - strlen($trail);
		$strTemp = NULL;
		
		if (strlen($str) > $num) :
			$arrTemp = explode(" ", $str);
			foreach ($arrTemp as $x) :
				$strTemp .= (strlen($strTemp) <= $num) ? ' ' . $x : $strTemp;
			endforeach;
			$output = $strTemp . $trail;
		else :
			$output = $strText;
		endif;
	
		return $output;
	}
	
	// Returns the first $num words of $str
    function max_words($str, $num, $suffix = '')
    {
        $words = explode(' ', $str);
        if(count($words) < $num) :
            return $str;
        else :
            return implode(' ', array_slice($words, 0, $num)) . $suffix;
		endif;
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
	
	// Grabs the contents of a remote URL. Can perform basic authentication if un/pw are provided.
    function get_url($url, $username = null, $password = null)
    {
        if(function_exists('curl_init'))
        {
            $ch = curl_init();
            if(!is_null($username) && !is_null($password))
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Basic ' .  base64_encode("$username:$password")));
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
            $html = curl_exec($ch);
            curl_close($ch);
            return $html;
        }
        elseif(ini_get('allow_url_fopen') == true)
        {
            if(!is_null($username) && !is_null($password))
                $url = str_replace("://", "://$username:$password@", $url);
            $html = file_get_contents($url);
            return $html;
        }
        else
        {
            // Cannot open url. Either install curl-php or set allow_url_fopen = true in php.ini
            return false;
        }
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
	
    function printr($var)
    {
        $output = print_r($var, true);
        $output = str_replace("\n", "<br>", $output);
        $output = str_replace(' ', '&nbsp;', $output);
        echo "<div style='font-family:courier;'>$output</div>";
    }

    // Given a string such as "comment_123" or "id_57", it returns the final, numeric id.
    function split_id($str)
    {
        return match('/[_-]([0-9]+)$/', $str, 1);
    }

    // Creates a friendly URL slug from a string
    function slugify($str)
    {
        $str = preg_replace('/[^a-zA-Z0-9 -]/', '', $str);
        $str = strtolower(str_replace(' ', '-', trim($str)));
        $str = preg_replace('/-+/', '-', $str);
        return $str;
    }

    // Computes the *full* URL of the current page (protocol, server, path, query parameters, etc)
    function full_url()
    {
        $s = empty($_SERVER['HTTPS']) ? '' : ($_SERVER['HTTPS'] == 'on') ? 's' : '';
        $protocol = substr(strtolower($_SERVER['SERVER_PROTOCOL']), 0, strpos(strtolower($_SERVER['SERVER_PROTOCOL']), '/')) . $s;
        $port = ($_SERVER['SERVER_PORT'] == '80') ? '' : (":".$_SERVER['SERVER_PORT']);
        return $protocol . "://" . $_SERVER['HTTP_HOST'] . $port . $_SERVER['REQUEST_URI'];
    }

    // Returns an English representation of a date
    // Graciously stolen from http://ejohn.org/files/pretty.js
    function time2str($ts)
    {
        if(!ctype_digit($ts))
            $ts = strtotime($ts);

        $diff = time() - $ts;
        if($diff == 0)
            return 'now';
        elseif($diff > 0)
        {
            $day_diff = floor($diff / 86400);
            if($day_diff == 0)
            {
                if($diff < 60) return 'just now';
                if($diff < 120) return '1 minute ago';
                if($diff < 3600) return floor($diff / 60) . ' minutes ago';
                if($diff < 7200) return '1 hour ago';
                if($diff < 86400) return floor($diff / 3600) . ' hours ago';
            }
            if($day_diff == 1) return 'Yesterday';
            if($day_diff < 7) return $day_diff . ' days ago';
            if($day_diff < 31) return ceil($day_diff / 7) . ' weeks ago';
            if($day_diff < 60) return 'last month';
            $ret = date('F Y', $ts);
            return ($ret == 'December 1969') ? '' : $ret;
        }
        else
        {
            $diff = abs($diff);
            $day_diff = floor($diff / 86400);
            if($day_diff == 0)
            {
                if($diff < 120) return 'in a minute';
                if($diff < 3600) return 'in ' . floor($diff / 60) . ' minutes';
                if($diff < 7200) return 'in an hour';
                if($diff < 86400) return 'in ' . floor($diff / 3600) . ' hours';
            }
            if($day_diff == 1) return 'Tomorrow';
            if($day_diff < 4) return date('l', $ts);
            if($day_diff < 7 + (7 - date('w'))) return 'next week';
            if(ceil($day_diff / 7) < 4) return 'in ' . ceil($day_diff / 7) . ' weeks';
            if(date('n', $ts) == date('n') + 1) return 'next month';
            $ret = date('F Y', $ts);
            return ($ret == 'December 1969') ? '' : $ret;
        }
    }

    // Returns an array representation of the given calendar month.
    // The array values are timestamps which allow you to easily format
    // and manipulate the dates as needed.
    function calendar($month = null, $year = null)
    {
        if(is_null($month)) $month = date('n');
        if(is_null($year)) $year = date('Y');

        $first = mktime(0, 0, 0, $month, 1, $year);
        $last = mktime(23, 59, 59, $month, date('t', $first), $year);

        $start = $first - (86400 * date('w', $first));
        $stop = $last + (86400 * (7 - date('w', $first)));

        $out = array();
        while($start < $stop)
        {
            $week = array();
            if($start > $last) break;
            for($i = 0; $i < 7; $i++)
            {
                $week[$i] = $start;
                $start += 86400;
            }
            $out[] = $week;
        }

        return $out;
    }

    // Processes mod_rewrite URLs into key => value pairs
    // See .htacess for more info.
    function pick_off($grab_first = false, $sep = '/')
    {
        $ret = array();
        $arr = explode($sep, trim($_SERVER['REQUEST_URI'], $sep));
        if($grab_first) $ret[0] = array_shift($arr);
        while(count($arr) > 0)
            $ret[array_shift($arr)] = array_shift($arr);
        return (count($ret) > 0) ? $ret : false;
    }

    // More robust strict date checking for string representations
    function chkdate($str)
    {
        // Requires PHP 5.2
        if(function_exists('date_parse'))
        {
            $info = date_parse($str);
            if($info !== false && $info['error_count'] == 0)
            {
                if(checkdate($info['month'], $info['day'], $info['year']))
                    return true;
            }

            return false;
        }

        // Else, for PHP < 5.2
        return strtotime($str);
    }

    // Converts a date/timestamp into the specified format
	function dater($date = null, $format = null)
    {
        if(is_null($format))
            $format = 'Y-m-d H:i:s';

        if(is_null($date))
            $date = time();

		if(is_int($date))
			return date($format, $date);
		if(is_float($date))
			return date($format, $date);
		if(is_string($date)) {
	        if(ctype_digit($date) === true)
	            return date($format, $date);
			if((preg_match('/[^0-9.]/', $date) == 0) && (substr_count($date, '.') <= 1))
				return date($format, floatval($date));
			return date($format, strtotime($date));
		}
		
		// If $date is anything else, you're doing something wrong,
		// so just let PHP error out however it wants.
		return date($format, $date);
    }

	function format_date($d,$format) 
	{
		$y = substr($d,0,4);
		$m = str_pad(substr($d,4,2),'/',STR_PAD_BOTH);
		$d = substr($d,6,2);
		$output = (strlen($d) > 0) ? date($format,strtotime($y.$m.$d)):NULL;

		return $output;
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
	
	// Formats a given number of seconds into proper mm:ss format
    function format_time($seconds)
    {
        return floor($seconds / 60) . ':' . str_pad($seconds % 60, 2, '0');
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

    // Outputs hour, minute, am/pm dropdown boxes
    function hourmin($hid = 'hour', $mid = 'minute', $pid = 'ampm', $hval = null, $mval = null, $pval = null)
    {
        // Dumb hack to let you just pass in a timestamp instead
        if(func_num_args() == 1)
        {
            list($hval, $mval, $pval) = explode(' ', date('g i a', strtotime($hid)));
            $hid = 'hour';
            $mid = 'minute';
            $aid = 'ampm';
        }
        else
        {
            if(is_null($hval)) $hval = date('h');
            if(is_null($mval)) $mval = date('i');
            if(is_null($pval)) $pval = date('a');
        }

        $hours = array(12, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11);
        $out = "<select name='$hid' id='$hid'>";
        foreach($hours as $hour)
            if(intval($hval) == intval($hour)) $out .= "<option value='$hour' selected>$hour</option>";
            else $out .= "<option value='$hour'>$hour</option>";
        $out .= "</select>";

        $minutes = array('00', 15, 30, 45);
        $out .= "<select name='$mid' id='$mid'>";
        foreach($minutes as $minute)
            if(intval($mval) == intval($minute)) $out .= "<option value='$minute' selected>$minute</option>";
            else $out .= "<option value='$minute'>$minute</option>";
        $out .= "</select>";

        $out .= "<select name='$pid' id='$pid'>";
        $out .= "<option value='am'>am</option>";
        if($pval == 'pm') $out .= "<option value='pm' selected>pm</option>";
        else $out .= "<option value='pm'>pm</option>";
        $out .= "</select>";

        return $out;
    }

    // Returns the HTML for a month, day, and year dropdown boxes.
    // You can set the default date by passing in a timestamp OR a parseable date string.
    // $prefix_ will be appened to the name/id's of each dropdown, allowing for multiple calls in the same form.
    // $output_format lets you specify which dropdowns appear and in what order.
    function mdy($date = null, $prefix = null, $output_format = 'm d y')
    {
        if(is_null($date)) $date = time();
        if(!ctype_digit($date)) $date = strtotime($date);
        if(!is_null($prefix)) $prefix .= '_';
        list($yval, $mval, $dval) = explode(' ', date('Y n j', $date));

        $month_dd = "<select name='{$prefix}month' id='{$prefix}month'>";
        for($i = 1; $i <= 12; $i++)
        {
            $selected = ($mval == $i) ? ' selected="selected"' : '';
            $month_dd .= "<option value='$i'$selected>" . date('F', mktime(0, 0, 0, $i, 1, 2000)) . "</option>";
        }
        $month_dd .= "</select>";

        $day_dd = "<select name='{$prefix}day' id='{$prefix}day'>";
        for($i = 1; $i <= 31; $i++)
        {
            $selected = ($dval == $i) ? ' selected="selected"' : '';
            $day_dd .= "<option value='$i'$selected>$i</option>";
        }
        $day_dd .= "</select>";

        $year_dd = "<select name='{$prefix}year' id='{$prefix}year'>";
        for($i = date('Y'); $i < date('Y') + 10; $i++)
        {
            $selected = ($yval == $i) ? ' selected="selected"' : '';
            $year_dd .= "<option value='$i'$selected>$i</option>";
        }
        $year_dd .= "</select>";

        $trans = array('m' => $month_dd, 'd' => $day_dd, 'y' => $year_dd);
        return strtr($output_format, $trans);
    }

    // Redirects user to $url
    function redirect($url = null)
    {
        if(is_null($url)) $url = $_SERVER['PHP_SELF'];
        header("Location: $url");
        exit();
    }

    // Ensures $str ends with a single /
    function slash($str)
    {
        return rtrim($str, '/') . '/';
    }

    // Ensures $str DOES NOT end with a /
    function unslash($str)
    {
        return rtrim($str, '/');
    }

    // Returns an array of the values of the specified column from a multi-dimensional array
    function gimme($arr, $key = null)
    {
        if(is_null($key))
            $key = current(array_keys($arr));

        $out = array();
        foreach($arr as $a)
            $out[] = $a[$key];

        return $out;
    }

    // Fixes MAGIC_QUOTES
    function fix_slashes($arr = '')
    {
        if(is_null($arr) || $arr == '') return null;
        if(!get_magic_quotes_gpc()) return $arr;
        return is_array($arr) ? array_map('fix_slashes', $arr) : stripslashes($arr);
    }

    // Serves an external document for download as an HTTP attachment.
    function download_document($filename, $mimetype = 'application/octet-stream')
    {
        if(!file_exists($filename) || !is_readable($filename)) return false;
        $base = basename($filename);
        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header("Content-Disposition: attachment; filename=$base");
        header("Content-Length: " . filesize($filename));
        header("Content-Type: $mimetype");
        readfile($filename);
        exit();
    }

    // Retrieves the filesize of a remote file.
    function remote_filesize($url, $user = null, $pw = null)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 1);
        curl_setopt($ch, CURLOPT_NOBODY, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        if(!is_null($user) && !is_null($pw))
        {
            $headers = array('Authorization: Basic ' .  base64_encode("$user:$pw"));
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        $head = curl_exec($ch);
        curl_close($ch);

        preg_match('/Content-Length:\s([0-9].+?)\s/', $head, $matches);

        return isset($matches[1]) ? $matches[1] : false;
    }

	// Inserts a string within another string at a specified location
	function str_insert($needle, $haystack, $location)
	{
	   $front = substr($haystack, 0, $location);
	   $back  = substr($haystack, $location);

	   return $front . $needle . $back;
	}

    // Outputs a filesize in human readable format.
    function bytes2str($val, $round = 0)
    {
        $unit = array('','K','M','G','T','P','E','Z','Y');
        while($val >= 1000)
        {
            $val /= 1024;
            array_shift($unit);
        }
        return round($val, $round) . array_shift($unit) . 'B';
    }

    // Returns the user's browser info.
    // browscap.ini must be available for this to work.
    // See the PHP manual for more details.
    function browser_info()
    {
        $info    = get_browser(null, true);
        $browser = $info['browser'] . ' ' . $info['version'];
        $os      = $info['platform'];
        $ip      = $_SERVER['REMOTE_ADDR'];
        return array('ip' => $ip, 'browser' => $browser, 'os' => $os);
    }

    // Quick wrapper for preg_match
    function match($regex, $str, $i = 0)
    {
        if(preg_match($regex, $str, $match) == 1)
            return $match[$i];
        else
            return false;
    }

    // Returns the lat, long of an address via Yahoo!'s geocoding service.
    // You'll need an App ID, which is available from here:
    // http://developer.yahoo.com/maps/rest/V1/geocode.html
    // Note: needs to be updated to use PlaceFinder instead.
    function geocode($location, $appid)
    {
        $location = urlencode($location);
        $appid    = urlencode($appid);
        $data     = file_get_contents("http://local.yahooapis.com/MapsService/V1/geocode?output=php&appid=$appid&location=$location");
        $data     = unserialize($data);

        if($data === false) return false;

        $data = $data['ResultSet']['Result'];

        return array('lat' => $data['Latitude'], 'lng' => $data['Longitude']);
    }

    // A stub for Yahoo!'s reverse geocoding service
    // http://developer.yahoo.com/geo/placefinder/
    function reverse_geocode($lat, $lng)
    {

    }

    // Quick and dirty wrapper for curl scraping.
    function curl($url, $referer = null, $post = null)
    {
        static $tmpfile;

        if(!isset($tmpfile) || ($tmpfile == '')) $tmpfile = tempnam('/tmp', 'FOO');

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_COOKIEFILE, $tmpfile);
        curl_setopt($ch, CURLOPT_COOKIEJAR, $tmpfile);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.1) Gecko/20061024 BonEcho/2.0");
        // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        // curl_setopt($ch, CURLOPT_VERBOSE, 1);

        if($referer) curl_setopt($ch, CURLOPT_REFERER, $referer);
        if(!is_null($post))
        {
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        }

        $html = curl_exec($ch);

        // $last_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
        return $html;
    }

    // Accepts any number of arguments and returns the first non-empty one
    function pick()
    {
        foreach(func_get_args() as $arg)
            if(!empty($arg))
                return $arg;
        return '';
    }

    // Secure a PHP script using basic HTTP authentication
    function http_auth($un, $pw, $realm = "Secured Area")
    {
        if(!(isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW']) && $_SERVER['PHP_AUTH_USER'] == $un && $_SERVER['PHP_AUTH_PW'] == $pw))
        {
            header('WWW-Authenticate: Basic realm="' . $realm . '"');
            header('Status: 401 Unauthorized');
            exit();
        }
    }

    // Returns a file's mimetype based on its extension
    function mime_type($filename, $default = 'application/octet-stream')
    {
        $mime_types = array(
			'323'     => 'text/h323',
			'acx'     => 'application/internet-property-stream',
			'ai'      => 'application/postscript',
			'aif'     => 'audio/x-aiff',
			'aifc'    => 'audio/x-aiff',
			'aiff'    => 'audio/x-aiff',
			'asf'     => 'video/x-ms-asf',
			'asr'     => 'video/x-ms-asf',
			'asx'     => 'video/x-ms-asf',
			'au'      => 'audio/basic',
			'avi'     => 'video/x-msvideo',
			'axs'     => 'application/olescript',
			'bas'     => 'text/plain',
			'bcpio'   => 'application/x-bcpio',
			'bin'     => 'application/octet-stream',
			'bmp'     => 'image/bmp',
			'c'       => 'text/plain',
			'cat'     => 'application/vnd.ms-pkiseccat',
			'cdf'     => 'application/x-cdf',
			'cer'     => 'application/x-x509-ca-cert',
			'class'   => 'application/octet-stream',
			'clp'     => 'application/x-msclip',
			'cmx'     => 'image/x-cmx',
			'cod'     => 'image/cis-cod',
			'cpio'    => 'application/x-cpio',
			'crd'     => 'application/x-mscardfile',
			'crl'     => 'application/pkix-crl',
			'crt'     => 'application/x-x509-ca-cert',
			'csh'     => 'application/x-csh',
			'css'     => 'text/css',
			'dcr'     => 'application/x-director',
			'der'     => 'application/x-x509-ca-cert',
			'dir'     => 'application/x-director',
			'dll'     => 'application/x-msdownload',
			'dms'     => 'application/octet-stream',
			'doc'     => 'application/msword',
			'dot'     => 'application/msword',
			'dvi'     => 'application/x-dvi',
			'dxr'     => 'application/x-director',
			'eps'     => 'application/postscript',
			'etx'     => 'text/x-setext',
			'evy'     => 'application/envoy',
			'exe'     => 'application/octet-stream',
			'fif'     => 'application/fractals',
			'flac'    => 'audio/flac',
			'flr'     => 'x-world/x-vrml',
			'gif'     => 'image/gif',
			'gtar'    => 'application/x-gtar',
			'gz'      => 'application/x-gzip',
			'h'       => 'text/plain',
			'hdf'     => 'application/x-hdf',
			'hlp'     => 'application/winhlp',
			'hqx'     => 'application/mac-binhex40',
			'hta'     => 'application/hta',
			'htc'     => 'text/x-component',
			'htm'     => 'text/html',
			'html'    => 'text/html',
			'htt'     => 'text/webviewhtml',
			'ico'     => 'image/x-icon',
			'ief'     => 'image/ief',
			'iii'     => 'application/x-iphone',
			'ins'     => 'application/x-internet-signup',
			'isp'     => 'application/x-internet-signup',
			'jfif'    => 'image/pipeg',
			'jpe'     => 'image/jpeg',
			'jpeg'    => 'image/jpeg',
			'jpg'     => 'image/jpeg',
			'js'      => 'application/x-javascript',
			'latex'   => 'application/x-latex',
			'lha'     => 'application/octet-stream',
			'lsf'     => 'video/x-la-asf',
			'lsx'     => 'video/x-la-asf',
			'lzh'     => 'application/octet-stream',
			'm13'     => 'application/x-msmediaview',
			'm14'     => 'application/x-msmediaview',
			'm3u'     => 'audio/x-mpegurl',
			'man'     => 'application/x-troff-man',
			'mdb'     => 'application/x-msaccess',
			'me'      => 'application/x-troff-me',
			'mht'     => 'message/rfc822',
			'mhtml'   => 'message/rfc822',
			'mid'     => 'audio/mid',
			'mny'     => 'application/x-msmoney',
			'mov'     => 'video/quicktime',
			'movie'   => 'video/x-sgi-movie',
			'mp2'     => 'video/mpeg',
			'mp3'     => 'audio/mpeg',
			'mpa'     => 'video/mpeg',
			'mpe'     => 'video/mpeg',
			'mpeg'    => 'video/mpeg',
			'mpg'     => 'video/mpeg',
			'mpp'     => 'application/vnd.ms-project',
			'mpv2'    => 'video/mpeg',
			'ms'      => 'application/x-troff-ms',
			'mvb'     => 'application/x-msmediaview',
			'nws'     => 'message/rfc822',
			'oda'     => 'application/oda',
			'oga'     => 'audio/ogg',
			'ogg'     => 'audio/ogg',
			'ogv'     => 'video/ogg',
			'ogx'     => 'application/ogg',
			'p10'     => 'application/pkcs10',
			'p12'     => 'application/x-pkcs12',
			'p7b'     => 'application/x-pkcs7-certificates',
			'p7c'     => 'application/x-pkcs7-mime',
			'p7m'     => 'application/x-pkcs7-mime',
			'p7r'     => 'application/x-pkcs7-certreqresp',
			'p7s'     => 'application/x-pkcs7-signature',
			'pbm'     => 'image/x-portable-bitmap',
			'pdf'     => 'application/pdf',
			'pfx'     => 'application/x-pkcs12',
			'pgm'     => 'image/x-portable-graymap',
			'pko'     => 'application/ynd.ms-pkipko',
			'pma'     => 'application/x-perfmon',
			'pmc'     => 'application/x-perfmon',
			'pml'     => 'application/x-perfmon',
			'pmr'     => 'application/x-perfmon',
			'pmw'     => 'application/x-perfmon',
			'pnm'     => 'image/x-portable-anymap',
			'pot'     => 'application/vnd.ms-powerpoint',
			'ppm'     => 'image/x-portable-pixmap',
			'pps'     => 'application/vnd.ms-powerpoint',
			'ppt'     => 'application/vnd.ms-powerpoint',
			'prf'     => 'application/pics-rules',
			'ps'      => 'application/postscript',
			'pub'     => 'application/x-mspublisher',
			'qt'      => 'video/quicktime',
			'ra'      => 'audio/x-pn-realaudio',
			'ram'     => 'audio/x-pn-realaudio',
			'ras'     => 'image/x-cmu-raster',
			'rgb'     => 'image/x-rgb',
			'rmi'     => 'audio/mid',
			'roff'    => 'application/x-troff',
			'rtf'     => 'application/rtf',
			'rtx'     => 'text/richtext',
			'scd'     => 'application/x-msschedule',
			'sct'     => 'text/scriptlet',
			'setpay'  => 'application/set-payment-initiation',
			'setreg'  => 'application/set-registration-initiation',
			'sh'      => 'application/x-sh',
			'shar'    => 'application/x-shar',
			'sit'     => 'application/x-stuffit',
			'snd'     => 'audio/basic',
			'spc'     => 'application/x-pkcs7-certificates',
			'spl'     => 'application/futuresplash',
			'src'     => 'application/x-wais-source',
			'sst'     => 'application/vnd.ms-pkicertstore',
			'stl'     => 'application/vnd.ms-pkistl',
			'stm'     => 'text/html',
			'svg'     => "image/svg+xml",
			'sv4cpio' => 'application/x-sv4cpio',
			'sv4crc'  => 'application/x-sv4crc',
			't'       => 'application/x-troff',
			'tar'     => 'application/x-tar',
			'tcl'     => 'application/x-tcl',
			'tex'     => 'application/x-tex',
			'texi'    => 'application/x-texinfo',
			'texinfo' => 'application/x-texinfo',
			'tgz'     => 'application/x-compressed',
			'tif'     => 'image/tiff',
			'tiff'    => 'image/tiff',
			'tr'      => 'application/x-troff',
			'trm'     => 'application/x-msterminal',
			'tsv'     => 'text/tab-separated-values',
			'txt'     => 'text/plain',
			'uls'     => 'text/iuls',
			'ustar'   => 'application/x-ustar',
			'vcf'     => 'text/x-vcard',
			'vrml'    => 'x-world/x-vrml',
			'wav'     => 'audio/x-wav',
			'wcm'     => 'application/vnd.ms-works',
			'wdb'     => 'application/vnd.ms-works',
			'wks'     => 'application/vnd.ms-works',
			'wmf'     => 'application/x-msmetafile',
			'wps'     => 'application/vnd.ms-works',
			'wri'     => 'application/x-mswrite',
			'wrl'     => 'x-world/x-vrml',
			'wrz'     => 'x-world/x-vrml',
			'xaf'     => 'x-world/x-vrml',
			'xbm'     => 'image/x-xbitmap',
			'xla'     => 'application/vnd.ms-excel',
			'xlc'     => 'application/vnd.ms-excel',
			'xlm'     => 'application/vnd.ms-excel',
			'xls'     => 'application/vnd.ms-excel',
			'xlt'     => 'application/vnd.ms-excel',
			'xlw'     => 'application/vnd.ms-excel',
			'xof'     => 'x-world/x-vrml',
			'xpm'     => 'image/x-xpixmap',
			'xwd'     => 'image/x-xwindowdump',
			'z'       => 'application/x-compress',
			'zip'     => 'application/zip',
		);
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        return isset($mime_types[$ext]) ? $mime_types[$ext] : $default;
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
	
	/**
	 * Simple variable dump
	 *
	 * @param mixed $var 
	 * @return void
	 * @author j4kp07
	 */
	function dump($var = NULL)
	{
		echo '<pre>';
		print_r($var);
		exit();
	}
	
	/**
	 * var_dump for php debugging
	 * 
	 * Source: http://us2.php.net/manual/en/function.var-dump.php
	 *
	 * @author j4kp07
	 */
	function _vardump(&$var, $info = FALSE)
	{
	    $scope = false;
	    $prefix = 'unique';
	    $suffix = 'value';

	    if($scope) $vals = $scope;
	    else $vals = $GLOBALS;

	    $old = $var;
	    $var = $new = $prefix.rand().$suffix; $vname = FALSE;
	    foreach($vals as $key => $val) if($val === $new) $vname = $key;
	    $var = $old;

	    echo "<pre style='margin: 0px 0px 10px 0px; display: block; background: white; color: black; font-family: Verdana; border: 1px solid #cccccc; padding: 5px; font-size: 10px; line-height: 13px;'>";
	    if($info != FALSE) echo "<b style='color: red;'>$info:</b><br>";
	    do_dump($var, '$'.$vname);
	    echo "</pre>";
		exit();
	}
	
	/**
	 * Better UI than print_r or var_dump
	 *
	 * Source: http://us2.php.net/manual/en/function.var-dump.php
	 * 
	 * @author j4kp07
	 */
	function do_dump(&$var, $var_name = NULL, $indent = NULL, $reference = NULL)
	{
	    $do_dump_indent = "<span style='color:#eeeeee;'>|</span> &nbsp;&nbsp; ";
	    $reference = $reference.$var_name;
	    $keyvar = 'the_do_dump_recursion_protection_scheme'; $keyname = 'referenced_object_name';

	    if (is_array($var) && isset($var[$keyvar]))
	    {
	        $real_var = &$var[$keyvar];
	        $real_name = &$var[$keyname];
	        $type = ucfirst(gettype($real_var));
	        echo "$indent$var_name <span style='color:#a2a2a2'>$type</span> = <span style='color:#e87800;'>&amp;$real_name</span><br>";
	    }
	    else
	    {
	        $var = array($keyvar => $var, $keyname => $reference);
	        $avar = &$var[$keyvar];

	        $type = ucfirst(gettype($avar));
	        if($type == "String") $type_color = "<span style='color:green'>";
	        elseif($type == "Integer") $type_color = "<span style='color:red'>";
	        elseif($type == "Double"){ $type_color = "<span style='color:#0099c5'>"; $type = "Float"; }
	        elseif($type == "Boolean") $type_color = "<span style='color:#92008d'>";
	        elseif($type == "NULL") $type_color = "<span style='color:black'>";

	        if(is_array($avar))
	        {
	            $count = count($avar);
	            echo "$indent" . ($var_name ? "$var_name => ":"") . "<span style='color:#a2a2a2'>$type ($count)</span><br>$indent(<br>";
	            $keys = array_keys($avar);
	            foreach($keys as $name)
	            {
	                $value = &$avar[$name];
	                do_dump($value, "['$name']", $indent.$do_dump_indent, $reference);
	            }
	            echo "$indent)<br>";
	        }
	        elseif(is_object($avar))
	        {
	            echo "$indent$var_name <span style='color:#a2a2a2'>$type</span><br>$indent(<br>";
	            foreach($avar as $name=>$value) do_dump($value, "$name", $indent.$do_dump_indent, $reference);
	            echo "$indent)<br>";
	        }
	        elseif(is_int($avar)) echo "$indent$var_name = <span style='color:#a2a2a2'>$type(".strlen($avar).")</span> $type_color$avar</span><br>";
	        elseif(is_string($avar)) echo "$indent$var_name = <span style='color:#a2a2a2'>$type(".strlen($avar).")</span> $type_color\"$avar\"</span><br>";
	        elseif(is_float($avar)) echo "$indent$var_name = <span style='color:#a2a2a2'>$type(".strlen($avar).")</span> $type_color$avar</span><br>";
	        elseif(is_bool($avar)) echo "$indent$var_name = <span style='color:#a2a2a2'>$type(".strlen($avar).")</span> $type_color".($avar == 1 ? "TRUE":"FALSE")."</span><br>";
	        elseif(is_null($avar)) echo "$indent$var_name = <span style='color:#a2a2a2'>$type(".strlen($avar).")</span> {$type_color}NULL</span><br>";
	        else echo "$indent$var_name = <span style='color:#a2a2a2'>$type(".strlen($avar).")</span> $avar<br>";

	        $var = $var[$keyvar];
	    }
	}