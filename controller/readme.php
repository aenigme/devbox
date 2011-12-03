<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; Read Me';
	
	require_once DIR_VIEW . '/neversleeps/_header.php'; 

	require_once DIR_SYS . '/markdown.php';	
	$str = file_get_contents(DOC_ROOT . '/readme.md');
	$my_html = Markdown($str);
?>

<div class="major-holder">
	<div class="major-area">
		<div class="major-frame">
			<div id="main">
				<?= $my_html ?>
			</div>

<?php require_once DIR_VIEW . '/neversleeps/_footer.php'; ?>