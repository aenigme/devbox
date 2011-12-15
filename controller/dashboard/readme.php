<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; Dashboard';
	
    if(!$Auth->loggedIn()) redirect('/login/');

	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 
	
	require_once DIR_SYS . '/markdown.php';	
	$str = file_get_contents(DOC_ROOT . '/README.md');
	$my_html = Markdown($str);
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span16">

					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="">
								<div class="alert-message warning">
									<?php foreach ($Error->errors as $k => $v): ?>
										<p><?= $v; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>

				</div>
			</div>
			<div class="row">
				<?= $my_html ?>
