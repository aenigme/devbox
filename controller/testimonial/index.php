<?php defined('LIBRARY') or die('No direct script access allowed');

	$page_title = '&raquo; Testimonials';
	
    if(!$Auth->loggedIn()) redirect('/login');
	
	$testimonial = Testimonial::fetch();
	
	require_once DIR_VIEW . '/devbox/_header.php'; 
	require_once DIR_VIEW . '/devbox/_navigation.php'; 
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span12">
				
					<?php if (!$Error->ok()): ?>
						<div class="row">
							<div style="width: 562px; margin: 0 auto;">
								<div class="alert-message error">
									<?php foreach ($Error->errors as $k => $v): ?>
										<p><?= $v; ?></p>
									<?php endforeach ?>
							    </div>
							</div>
						</div>
					<?php endif ?>
						
					<div class="row">
						<a class="btn success" href="/testimonial/new/">New Testimonial &raquo;</a>
						
						<div class="tbl_header">
							<h2>Easy Testimonials</h2>
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
						
<pre>
<code>&lt;?php defined('LIBRARY') or die('No direct script access allowed');

$testimonial = Testimonial::fetch();

require_once DIR_VIEW . '/_header.php'; 
?&gt;

&lt;div id="container"&gt;
	&lt;ul&gt;
		&lt;?php foreach ($testimonial as $row): ?&gt;
			&lt;li&gt;&lt;?= $row-&gt;caption ?&gt;&lt;/li&gt;
			&lt;li&gt;&lt;?= $row-&gt;quote ?&gt;&lt;/li&gt;
		&lt;?php endforeach ?&gt;
	&lt;/ul&gt;
&lt;/div&gt;</code>
</pre>
					</div>
				</div>
			</div>
		</div>

<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>