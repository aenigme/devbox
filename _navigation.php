<div class="topbar">
	<div class="topbar-inner">
		<div class="container">
			<a href="#" class="brand">EZee.ly</a>
			<ul class="nav">
				<li class=""><a href="#overview">About</a></li>
				<li class=""><a href="#overview">What's New</a></li>
				<li class=""><a href="#overview">Terms of Service</a></li>
				<li class=""><a href="#overview">Privacy Policy</a></li>
			</ul>
			<ul class="nav secondary-nav">
				<?php if ($Auth->loggedIn()): ?>
					<li><a href="/logout.php">Logout</a></li>
				<?php else: ?>
					<li><a href="/login.php">Login</a></li>
					<li><a href="/acct.php">Sign up for free!</a></li>
				<?php endif ?>				
			</ul>
		</div>
	</div>
</div>