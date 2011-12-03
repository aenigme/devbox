<div class="topbar" data-dropdown="dropdown">
	<div class="topbar-inner">
		<div class="container">
			<a href="/dashboard/" class="brand">_devbox</a>
			<ul class="nav">
				<li class=""><a href="#overview">Rule Numero Uno</a></li>
				<li class=""><a href="/dashboard/privacy/">Privacy Policy</a></li>
				
				<li class="dropdown">
					<a class="dropdown-toggle" href="#">How-To Guides</a>
					<ul class="dropdown-menu">
						<li><a href="#">Static Web Pages</a></li>
						<li><a href="#">Dynamic Web Pages</a></li>
						<li><a href="#">Textile and Markdown</a></li>
						<li><a href="#">Custom Controllers</a></li>
						<li class="divider"></li>
						<li class=""><a href="/dashboard/readme/">Read Me</a></li>
					</ul>
				</li>
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