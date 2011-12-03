<div class="topbar">
	<div class="topbar-inner">
		<div class="container">
			<a href="/dashboard/" class="brand">_devbox</a>
			<ul class="nav">
				<li class=""><a href="#overview">About</a></li>
				<li class=""><a href="#overview">What's New</a></li>
				<li class=""><a href="/dashboard/readme/">Read Me</a></li>
				<li class=""><a href="#overview">Privacy Policy</a></li>
			</ul>
			<ul class="nav secondary-nav">
					<li><a href="/">Home</a></li>
				<?php if ($Auth->loggedIn()): ?>
					<li><a href="/logout">Logout</a></li>
				<?php else: ?>
					<li><a href="/login">Login</a></li>
					<li><a href="/acct">Sign up for free!</a></li>
				<?php endif ?>				
			</ul>
		</div>
	</div>
</div>