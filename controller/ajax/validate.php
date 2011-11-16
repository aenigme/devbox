<?php defined('LIBRARY') or die('No direct script access allowed');
	
	$validate = new Validate();
	echo $validate->load($Input->post('rule'), $Input->post('value'), $Input->post('title')); 
