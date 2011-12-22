<?php defined('LIBRARY') or die('No direct script access allowed');

	if(!$Auth->loggedIn()) redirect('/login');
	
	$page_title = '&raquo; Gallery View';
	$load_picmeleo = FALSE;
	
	$gallery = Gallery::fetch();
	
	if (count($gallery) === 0) 
		redirect('/plugins/gallery/upload');
	
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
					
					<a class="btn success" href="/plugins/gallery/upload/">Upload New Picture &raquo;</a>
					
					<h2>Gallery View <small>(Click any image for more options)</small></h2>	
					<ul class="media-grid">
						<?php foreach ($gallery as $row): ?>
							<li>
								<a href="/plugins/gallery/edit/<?= $row->id ?>">
									<img alt="" src="/uploads/thumbnails/<?= $row->filename ?>" class="thumbnail">
								</a>
							</li>
						<?php endforeach ?>
					</ul>
<pre>
<code>&lt;?php defined('LIBRARY') or die('No direct script access allowed');

$gallery = Gallery::fetch();

require_once DIR_VIEW . '/_header.php'; 
?&gt;

&lt;div id="container"&gt;
	&lt;ul&gt;
		&lt;?php foreach ($gallery as $row): ?&gt;
			&lt;li&gt;
				&lt;a href=&quot;&lt;?= $row-&gt;location ?&gt;&quot;&gt;
				&lt;img src=&quot;/uploads/images/thumbnails/&lt;?= $row-&gt;filename ?&gt;&quot;&gt;
				&lt;/a&gt;
			&lt;/li&gt;
		&lt;?php endforeach ?&gt;
	&lt;/ul&gt;
&lt;/div&gt;</code>
</pre>

				</div>
			</div>
		</div>
<?php require_once DIR_VIEW . '/devbox/_footer.php'; ?>