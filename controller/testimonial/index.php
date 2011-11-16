<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; Testimonials';
	
    if(!$Auth->loggedIn()) redirect('/login');
	
    $testimonial = Testimonial::fetch();
	
	require_once DIR_VIEW . '/_header.php'; 
	require_once DIR_VIEW . '/_navigation.php';
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span12 offset2">
				
					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
									<?php foreach ($Error as $k => $v): ?>
										<p><?= $v; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<style type="text/css" media="screen">
							div.tbl_header { 
								height: 30px;
								padding: 5px 10px 20px;
								background-color: #f7f7f7; 
								background: url('/assets/images/misc/linear_bg.jpg');
								background-repeat: repeat-x; 
								box-shadow: 0 0 5px 2px #aaa;
								-moz-border-radius: 10px;
								border-radius: 10px;
								z-index: 10;
								/*-moz-box-shadow: 0 0 5px 5px #888;*/
								/*-webkit-box-shadow: 0 0 5px 5px#888;*/
							}	
							table.shadow {
								background-color: #ffffff;
								box-shadow: 0px 10px 5px 2px #aaa;
								margin-top: -20px;
								z-index: 20; 
							}
							table.shadow th {
								background-color: #f7f7f7;
								font-size: 12px;
								font-weight: 800;
							}
						</style>
						
						<div class="tbl_header">
							<h2>
								<img src="/assets/images/icons/pico/testimonial.png" width="24" />
								EZee Testimonials
							</h2>
						</div>
						<table class="light shadow">
							<thead>
							<tr>
								<th width="150px">Caption</th>
								<th>Quote</th>
								<th width="50px">Action</th>
							</tr>
							</thead>
							<tbody>
								<?php foreach ($testimonial as $row): ?>
									<tr class="link" rel="/testimonial/edit/<?= $row->id ?>/">
										<td><?= $row->caption ?></td>
										<td><?= $row->quote ?></td>
										<td>
											<img src="/assets/images/icons/edit.png">
											<a href="/testimonial/delete/<?= $row->id ?>/"><img src="/assets/images/icons/trash.png"></a>
										</td>
									</tr>
								<?php endforeach ?>
							</tbody>
						</table>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>