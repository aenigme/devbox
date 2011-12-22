<?php defined('LIBRARY') or die('No direct script access allowed');
	
	if(!$Auth->loggedIn()) redirect('/login');
	
	/*
		TODO Gallery delete action needs better security precausions
	*/
	$gallery_id = $requestURI[4];
	$gallery = new Gallery($gallery_id);
	$gallery->delete();
	redirect('/plugins/gallery');
	
?>