<?php 
	// Application flag
	define('SPF', true);

	// https://twitter.com/#!/marcoarment/status/59089853433921537
	date_default_timezone_set('America/Los_Angeles');

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
	
	// Load our config settings
	$config = Config::getConfig();

	// Store session info in the database?
	if(Config::get('useDBSessions') === true)
		DBSession::register();

	// Initialize our session
	session_name('spfs');
	session_start();

	// Initialize current user
	$Auth = Auth::getAuth();

	// If you need to bootstrap a first user into the database, you can run this line once
	// Auth::createNewUser('username', 'password');

	// Object for tracking and displaying error messages
	$Error = Error::getError();

	$ru = &$_SERVER['REQUEST_URI'];
	$qmp = strpos($ru, '?');
	list($path, $params) = $qmp === FALSE
	    ? array($ru, NULL)
	    : array(substr($ru, 0, $qmp), substr($ru, $qmp + 1));
	
	define('URI_PARAM', isset($params) ? '' : $params);
	define('URI_PATH', $path);

	// Load router configuration
	include DIR_SYS.'/router.php';
	include DIR_SYS.'/config.routes.php';
		
	$appname =  DIR_CTRL . '/'; // Symbolic application links
	$filename = DOC_ROOT . $_SERVER['REQUEST_URI'] . '.php'; // Load filename directly
	$pagename = DIR_PAGE . $_SERVER['REQUEST_URI'] . '.md'; // MARKDOWN templates, for future use
	$requestURI = explode('/', $_SERVER['REQUEST_URI']);
		
	for($i= 1; $i < sizeof($requestURI) - 1; $i++)	
	{
		$appname .= $requestURI[$i] . '/'; 
		if (file_exists(rtrim($appname, '/') . '.php')) 
		{
			require rtrim($appname, '/') . '.php'; // Load controller
			exit();
		}
	}
	
	if(file_exists($pagename))
	{
		require $pagename; // Load MARKDOWN page
		exit();
	}
	else if(file_exists($filename))
	{
		require $filename; // Load file directly
		exit();
	}
	else if($ctrl = Router::controller())
	{
		include $ctrl; // Load router 
		exit();
	}

	require DOC_ROOT . '/404.php'; // Page not found
	