The Developers Toolbox
=============================

A collection of commonly used JS, CSS and techniques for web development.

Features
--------
* Drop Dead easy CMS
* NO MVC frameworks, NO template engines
* Plug and Play any website template
* Easily create "template blocks"
* Fully automated "Pretty URLs"
* Textile and Markdown support
* FAQ Module
* Testimonial Module
* Photo Gallery Module
* Contact Form Module
* Paypal Module
* Dropbox Module
* Mailchimp Module
* Easy Variables Module *

****
How It's Done
=============================

Configuring The Developer's Toolbox for your web site is straight forward!

1. Update the configuration file
2. Setup your database
3. Plug and Play your web site templates

Development Environment
-------------

Your LOCAL, STAGING and PRODUCTION environments can be configured from "lib/core/class.config.php" :

	private $productionServers = array('/^example\.com$/','/www.example\.com$/');
	private $stagingServers    = array('/^stage.neveranullmoment\.com$/');
	private $localServers      = array('/^devbox\.dev$/');

Database Configuration
-------------

From here, you can then update the MySQL read/write username and password combinations :

	$this->dbReadHost = 'localhost';
	$this->dbWriteHost = 'localhost';
	$this->dbName = '';
	$this->dbReadUsername  = '';
	$this->dbWriteUsername = '';
	$this->dbReadPassword  = '';
	$this->dbWritePassword = '';
	$this->dbOnError = 'die';
	$this->dbEmailOnError = false;

Setting Up a Static Web Page
-------------
coming soon

Setting Up a Dynamic Web Page
-------------
coming soon

Setting Up a Textile or Markdown Template
-------------
coming soon

SELECT Database
-------------
coming soon

INSERT / UPDATE Database
-------------
coming soon

Custom Modules HOW-TO Guide
-------------
coming soon

****
Resources
--------
* Simple PHP Framework Library (<https://github.com/tylerhall/simple-php-framework>)
* Twitter bootstrap CSS (<https://github.com/twitter/bootstrap>)
* Mailchimp API contact form sample (<http://mailchimp.com>)
* jQuery (<http://jquery.com/>)
* Colorbox (<http://colorpowered.com/colorbox/>)
* prettyPhoto (<http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/>)
* Cufon (<http://cufon.shoqolate.com/generate/>)
* reset CSS (inspired by <http://meyerweb.com/eric/tools/css/reset/>)
* Aloha Editor (<http://www.aloha-editor.org/>)
* Minify (<http://code.google.com/p/minify/>)
* Picmeleo (<http://www.picmeleo.com/>)

License
-------
The Developers Toolbox is released under the General Public License (GPL) scheme. It is an Open Source project, so everybody is welcome to contribute with plugins, patches, bug reports, tutorials, documentation, and artwork.
