<?php defined('LIBRARY') or die('No direct script access allowed');
	
	ini_set('error_reporting', E_ALL);
	ini_set('display_errors', 1);
	
	switch ($requestURI[3]) 
	{
		case 'gallery':
			$param = array(
				'width' => 400, 
				'height' => 300, 
			);
			
			$image = new GD($_FILES['file']);
			$image->resize(400, 300);
			$image->toString();
			echo $image;
			break;
			
		case 'page':
			$filename = DIR_PAGE . '/'. $Input->post('filename') . '.html';
			$fh = fopen($filename, 'w') or die("false|can't open file");
			$str = $Input->post('content');
			fwrite($fh, $str);
			fclose($fh);
			echo "true|file has been saved";
			break;
	}
