<?php defined('LIBRARY') or die('No direct script access.'); 

	$bid = 8319351;
	$pid = 7812180;
	$bc = new Basecamp('https://tssprojects.basecamphq.com','60d2ffdbd3db89b8cdf78815de2997a78224ecb3','foobar_pwd', 'simplexml');
	
	$response = $bc->getTodoListsForResource('person', $bid);
	$project = $response['body'];
	
	$response = $bc->getMessagesForProject($pid);
	$message = $response['body'];
	
	// comments-count
	// from-client
	// posted-on
	// title
	// author-name
	// body
	// extended-body
	// display-extended-body
	// _vardump($message);
	
	if(!$Auth->loggedIn()) redirect('/login.php');

	require DIR_VIEW . '/devbox/_header.php'; 
	require DIR_VIEW . '/devbox/_navigation.php';
?>

	<div class="wrapper">		
		<div class="container">
			<div class="row">
				<div class="span16">
				
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
						<div class="span6">
							<dl>
								<?php foreach ($message->{'post'} as $row): ?>
									<dt><?= $row->title ?></dt>
									<dd><? max_words($row->body, 9) ?>
										<?= $row->{'author-name'} ?>
										<?= date('M.d.Y', strtotime($row->{'posted-on'})) ?> 
										(<?= $row->{'comments-count'} ?> Comments)
									</dd>
								<?php endforeach ?>
							</dl>
						</div>
						<div class="span10">
							<dl>
								<?php foreach ($project->{'todo-list'} as $list): ?>
									<dt><?= $list->name ?> <?= $list->id ?></dt>
									<dd>
										<?php $response = $bc->getTodoItemsForList($list->id); ?>
										<?php $todo = $response['body'];?>
										
										<?php //_vardump($todo) ?>
										<ol>
											<?php foreach ($todo->{'todo-item'} as $row): ?>
												<?php if ($row->{'responsible-party-id'} == $bid): ?>
													<li>
														<?php if ($row->completed == 'false'): ?>
															<a href="/todo.php?id=" . <?= $row->id ?> . "><?= $row->content ?></a>
														<?php else: ?>
															<?= $row->content ?>
														<?php endif ?>
														
													</li>
												<?php endif ?>
											<?php endforeach ?>
										</ol>
									</dd>
								<?php endforeach ?>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>