<?php 
	// Application flag
	define('EZee', true);

	// Determine our absolute document root, application and library paths
	define('DOC_ROOT', realpath(dirname(__FILE__)));
	define('DIR_SYS',  DOC_ROOT . '/lib/system');
	define('DIR_CTRL', DOC_ROOT . '/controller');
	define('DIR_PAGE', DOC_ROOT . '/pages');
	define('DIR_VIEW', DOC_ROOT . '/views');
	define('LIBRARY',  DOC_ROOT . '/lib/core');
	
	// Global include files
	require LIBRARY . '/class.debug.php';    // debug...
	require LIBRARY . '/functions.inc.php';  // spl_autoload_register() is contained in this file
	require LIBRARY . '/class.dbobject.php'; // DBOBject...
	require LIBRARY . '/class.objects.php';  // and its subclasses
	
	// Fix magic quotes
	if(get_magic_quotes_gpc())
	{
		$_POST    = fix_slashes($_POST);
		$_GET     = fix_slashes($_GET);
		$_REQUEST = fix_slashes($_REQUEST);
		$_COOKIE  = fix_slashes($_COOKIE);
	}
	
	// Set cache expiration for AJAX requests
	if (is_ajax())
	{
		header ("Expires: Thu, 17 May 2001 10:17:17 GMT"); // Date in the past
		header ("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); // always modified
		header ("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
		header ("Pragma: no-cache"); // HTTP/1.0
	}
	
	// Load our config settings
	$Config = Config::getConfig();

	// Store session info in the database?
	if(Config::get('useDBSessions') === true)
		DBSession::register();

	// Initialize our session
	session_name('ezee');
	session_start();

	// Initialize current user
	$Auth = Auth::getAuth();

	// If you need to bootstrap a first user into the database, you can run this line once
	// Auth::createNewUser('username', 'password');

	// Object for tracking and displaying error messages
	$Error = Error::getError();
	
	// Object for fetching $_POST, $_GET and $_REQUEST array
	$Input = new Input();
	
	// Object for fetching URI
	$requestURI = explode('/', $_SERVER['REQUEST_URI']);