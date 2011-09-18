<?php	
	/**
	 * DIRECTORY PATHS, NO TRAILING SLASH!
	 */
	if($_SERVER['SERVER_NAME'] == "webserver") {
		$local_dir = "/htdocs/corpam";
		$web_path = "/corpam";
		$temp_dir = "/htdocs/corpam/temp";
		$baseurl = "http://webserver/corpam";
	
	} elseif($_SERVER['SERVER_NAME'] == "localhost") {
		$local_dir = "/wamp/www/corpam";
		$web_path = "/corpam";
		$temp_dir = "/wamp/www/corpam/temp";
		$baseurl = "http://localhost/corpam";
		
	} else {  // LIVE SITE
		$local_dir = "/home/corpam.org";
		$web_path = "";
		$temp_dir = "/home/corpam.org/temp";
		$baseurl = "http://www.corpam.org";
	}

	/**
	 * XSS PATTERN TEST
	 */
	if($_POST != NULL){
		$hosts = array("webserver", "www.corpam.org", "corpam.org");
		if (!in_array(trim($_SERVER['HTTP_HOST']), $hosts))
			{ echo "host NOT accepted: {$_SERVER['HTTP_HOST']}<br /> <strong>Your IP address has been logged.</strong>"; exit(); }
	}
	
	/**
	 * OTHER CONSTANTS
	 */
	define('OUTPUT_SQL_ERROR', true);
	define('SESSION_CONTROL', false);
	define('SYSTEM_OPERATOR_MAIL', 'j4kp07+debug@gmail.com');
	define('SYSTEM_FROM_MAIL', 'SysAdmin <sysadmin@corpam.org>');
	define('NO_UPLOAD_FILE_ERROR', 'File missing. Please choose a file to upload.');
	$allowed_extensions = array('jpeg','jpg','gif','png','pdf','dat','csv');
	$image_extensions = array('jpeg','jpg','gif','png');
	
	// XSS, NEVER ALLOWED, STRING REPLACEMENT 
	$never_allowed_str = array(
								'document.cookie'	=> '[removed]',
								'document.write'	=> '[removed]',
								'.parentNode'		=> '[removed]',
								'.innerHTML'		=> '[removed]',
								'window.location'	=> '[removed]',
								'-moz-binding'		=> '[removed]',
								'<!--'				=> '&lt;!--',
								'-->'				=> '--&gt;',
								'<![CDATA['			=> '&lt;![CDATA['
								);
	// XSS, NEVER ALLOWED, REGEX REPLACEMENT 
	$never_allowed_regex = array(
								"javascript\s*:"			=> '[removed]',
								"expression\s*(\(|&\#40;)"	=> '[removed]', // CSS and IE
								"vbscript\s*:"				=> '[removed]', // IE, surprise!
								"Redirect\s+302"			=> '[removed]'
								);

	/**
	 * DATABASE SETTINGS
	 */
	if($_SERVER['SERVER_NAME'] == "webserver") {
		define('HOSTNAME', "localhost");
		define('DATABASE', "corpam");
		define('USERNAME', "root");
		define('PASSWORD', "diamond");
	
	} elseif ($_SERVER['SERVER_NAME'] == 'localhost'){
		define('HOSTNAME', "webserver");
		define('DATABASE', "dbase");
		define('USERNAME', "root");
		define('PASSWORD', "pass");
		
	} else {
		define('HOSTNAME', 'localhost');
		define('DATABASE', 'dbase');
		define('USERNAME', 'root');
		define('PASSWORD', 'pass!');	}
	
	/**
	 * DATABASE CONNETION
	 */
	$connection = mysql_pconnect(HOSTNAME, USERNAME, PASSWORD) or trigger_error(mysql_error());
	mysql_select_db(DATABASE, $connection); 

	/**
	 * START SESSION
	 */
	if(!isset($_SESSION)) { 
		// EXPIRE SESSION AFTER 5 MINUTES OF INACTIVITY
		session_start();
		session_cache_expire(5);
		$expiretime = 60*5;
		$_SESSION['expire'] = time()+$expiretime;
		
		// UPDATE SESSION EXPIRATION
		if(isset($_SESSION['id']) && SESSION_CONTROL) { 
			$this_session = md5(session_id());
			
			// VERIFY THAT CURRENT USER SESSION ID MATCHES RECORDED SESSION ID
			$query="SELECT session_id, session_exp FROM user WHERE user_id = '{$_SESSION['id']}'";
			$result=mysql_query($query);
			if(mysql_num_rows($result)) extract(mysql_fetch_array($result));
			
			// IF SESSION MATCHES, UPDATE EXPIRATION
			if($this_session == $session_id) {
				$query="UPDATE user SET 
						session_id = '{$this_session}', 
						session_exp = '{$_SESSION[expire]}'
						WHERE user_id = '{$_SESSION['id']}'";
				$result=mysql_query($query);
			}
		}
	}	
?>