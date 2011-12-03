<?php 
	ini_set('error_reporting', E_ALL);
	ini_set('display_errors', 1);

	date_default_timezone_set('America/Los_Angeles');
	
	require_once realpath(dirname(__FILE__)) . '/bootstrap.php'; 
	
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
		
	$appname =  DIR_CTRL . '/'; // Load symbolic application links
	$indexname =  DIR_CTRL . '/'; // Load symbolic index links
	$scriptname = DOC_ROOT . $_SERVER['REQUEST_URI'] . '.php'; // Load script directly
	$pagename = DIR_PAGE . rtrim($_SERVER['REQUEST_URI'], '/') . '.md'; // Load MARKDOWN templates
		
	// Load app controller
	for($i = 1; $i < sizeof($requestURI) - 1; $i++)	
	{
		$appname .= $requestURI[$i] . '/'; 
		if (file_exists(rtrim($appname, '/') . '.php')) 
		{
			include rtrim($appname, '/') . '.php'; 
			exit();
		}
	}
	
	// If app not found, load index controller based on URI count
	for($i = 1; $i < sizeof($requestURI) - 1; $i++)
	{
		$indexname .= $requestURI[$i] . '/'; 
		if (file_exists($indexname . 'index.php') && $i == (sizeof($requestURI) -2)) 
		{
			include $indexname . 'index.php'; 
			exit();
		}
	}
	
	if(file_exists($pagename)) // Load MARKDOWN page
	{
		require_once DIR_SYS . '/markdown.php';
		$str = file_get_contents($pagename);
		$my_html = Markdown($str);

		require_once DIR_VIEW . '/mimino/_header.php';
		
		echo <<<HTML
		<div class="major-holder">
			<div class="major-area">
				<div class="major-frame">
					<div id="main">
						{$my_html}
					</div>
HTML;
		require_once DIR_VIEW . '/mimino/_footer.php';
		exit();
	}
	else if(file_exists($scriptname))
	{
		require $scriptname; // Load script directly
		exit();
	}
	else if($ctrl = Router::controller())
	{
		include $ctrl; // Load router 
		exit();
	}

	require DOC_ROOT . '/404.php'; // Page not found
	