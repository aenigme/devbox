<?php defined('LIBRARY') or die('No direct script access allowed');
	
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
	}
