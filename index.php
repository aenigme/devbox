<?php
	// Application flag
	define('SPF', true);

	// Determine our absolute document root, application and library paths
	define('DOC_ROOT', realpath(dirname(__FILE__)));
	define('APPPATH', DOC_ROOT . '/apps');
	define('LIBRARY', DOC_ROOT . '/lib/core');
	
	// https://twitter.com/#!/marcoarment/status/59089853433921537
	date_default_timezone_set('America/Los_Angeles');

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

	// Object for tracking and displaying error messages
	$Error = Error::getError();

	// If you need to bootstrap a first user into the database, you can run this line once
	// Auth::createNewUser('username', 'password');

	// You may choose to use symbolic application links for schematic purposes
	$appname = APPPATH . $_SERVER['REQUEST_URI'] . '.php';
	$filename = DOC_ROOT . $_SERVER['REQUEST_URI'] . '.php';

	// Load script/application
	if(file_exists($appname))
		require $appname;
	else if(file_exists($filename))
		require $filename;
	else
		exit('FAIL');
	