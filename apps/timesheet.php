<?php defined('LIBRARY') or die('No direct script access.'); 

	$db = Database::getDatabase();
	
	$punch = Punch::fetch("SELECT *, MAX(timestamp) FROM punches WHERE punch = 'out' GROUP BY username", array(), 'punch');
	
	foreach ($punch as $row) $db->query("UPDATE employees SET timestamp = '{$row->timestamp}' WHERE username = '{$row->username}'");
	
	$employee = Employee::fetch("SELECT *,
		RIGHT(displayname, LENGTH(displayname)-LOCATE(' ',displayname)) as fname,
		LEFT(displayname, LOCATE(',',displayname)-1) as lname
		FROM employees", array(), 'employee');
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<script type="text/javascript">
    	if (top !== self) top.location.href = self.location.href;
    </script>
    
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" type="text/css" href="assets/css/reset.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="assets/css/screen.css" media="screen" />
	
	<script type="text/javascript" src="assets/js/jquery-1.6.2.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.colorbox.js"></script>
	<script type="text/javascript" src="assets/js/jquery.bt.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.form.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap/bootstrap-modal.js"></script>
	<script type="text/javascript" src="assets/js/common.js"></script>
	
	<!-- www.phpied.com/conditional-comments-block-downloads/ -->
	<!--[if IE]><![endif]-->

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

</head>

<body>
	
	<div class="container">
		<h1>Employee Timesheets</h1>
		<div class="clearfix">
			<table class="myTable">
				<thead>
					<tr>
						<th>Employee Name</th>
						<th>Most Recent Status</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach ($employee as $row): ?>
						<tr>
							<td><?= (strpos($row->fname, ' ') > 3) ? substr($row->fname, 0, strpos($row->fname, ' ')) : $row->fname; ?> <?= $row->lname ?> </td>
							<td><?= ($row->timestamp) ? date('M d, Y H:i', $row->timestamp) : NULL ?></td>
						</tr>
					<?php endforeach ?>
				</tbody>
			</table>
		</div>
	</div>

</body>
</html>