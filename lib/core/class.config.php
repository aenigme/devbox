<?PHP
    // The Config class provides a single object to store your application's settings.
    // Define your settings as public members. (We've already setup the standard options
    // required for the Database and Auth classes.) Then, assign values to those settings
    // inside the "location" functions. This allows you to have different configuration
    // options depending on the server environment you're running on. Ex: local, staging,
    // and production.

    class Config
    {
        // Singleton object. Leave $me alone.
        private static $me;

        // Add your server hostnames to the appropriate arrays. ($_SERVER['HTTP_HOST'])
        // Each array item should be a regular expression. This gives you the option to detect a whole range
        // of server names if needed. Otherwise, you can simply detect a single server like '/^servername\.com$/'
        private $productionServers = array('/^example\.com$/','/www.example\.com$/');
        private $stagingServers    = array('/^stage.neveranullmoment\.com$/');
        private $localServers      = array('/^devbox\.dev$/');

        // Standard Config Options...

        // ...For Auth Class
        public $authDomain;         // Domain to set for the cookie
        public $authSalt;           // Can be any random string of characters

		// ... For Cookies			
		public $cookieDomain;
		public $cookiePath;
		public $cookieExpire;
		public $cookieSecure;
		public $cookieHttponly;

        // ...For Database Class
        public $dbReadHost;   // Database read-only server
        public $dbWriteHost;  // Database read/write server
        public $dbName;
        public $dbReadUsername;
        public $dbWriteUsername;
        public $dbReadPassword;
        public $dbWritePassword;
		
		// ... For Sessions
		public $sessionName;
		
        public $dbOnError; // What do do on a database error (see class.database.php for details)
        public $dbEmailOnError; // Email an error report on error?

        // Add your config options here...
        public $useDBSessions; // Set to true to store sessions in the database
		public $whereAmI;
		public $autofill;
		
        // Singleton constructor
        public function __construct()
        {
            $this->everywhere();

            $this->whereAmI = $this->whereAmI();
            if('production' == $this->whereAmI)
                $this->production();
            elseif('staging' == $this->whereAmI)
                $this->staging();
            elseif('local' == $this->whereAmI)
                $this->local();
            elseif('shell' == $this->whereAmI)
                $this->shell();
            else
                die('<h1>Where am I?</h1> <p>You need to setup your server names in <code>class.config.php</code></p>
                     <p><code>$_SERVER[\'HTTP_HOST\']</code> reported <code>' . $_SERVER['HTTP_HOST'] . '</code></p>');
        }

        // Get Singleton object
        public static function getConfig()
        {
            if(is_null(self::$me))
                self::$me = new Config();
            return self::$me;
        }

        // Allow access to config settings statically.
        // Ex: Config::get('some_value')
        public static function get($key)
        {
            return self::$me->$key;
        }

        // Add code to be run on all servers
        private function everywhere()
        {
            // Store sesions in the database?
            $this->useDBSessions = true;

            // Settings for the Auth class
            $this->authDomain = $_SERVER['HTTP_HOST'];
            $this->authSalt   = '';

			// Settings for cookies			
			$this->cookieDomain = '';
			$this->cookiePath = '/';
			$this->cookieExpire = 0;
			$this->cookieSecure = FALSE;
			$this->cookieHttponly = FALSE;
			
			// Settings for sessions			
			$this->sessionName = 'ezee';
        }

        // Add code/variables to be run only on production servers
        private function production()
        {
            ini_set('display_errors', '0');

            define('WEB_ROOT', '/');

            $this->dbReadHost      = 'localhost';
            $this->dbWriteHost     = 'localhost';
            $this->dbName          = '';
            $this->dbReadUsername  = '';
            $this->dbWriteUsername = '';
            $this->dbReadPassword  = '';
            $this->dbWritePassword = '';
            $this->dbOnError       = 'die';
            $this->dbEmailOnError  = false;
        }

        // Add code/variables to be run only on staging servers
        private function staging()
        {
            ini_set('display_errors', '1');
            ini_set('error_reporting', E_ALL);

            define('WEB_ROOT', '/');

            $this->dbReadHost      = 'localhost';
            $this->dbWriteHost     = 'localhost';
            $this->dbName          = 'neveranu_simpledb';
            $this->dbReadUsername  = 'neveranu_kcms';
            $this->dbWriteUsername = 'neveranu_kcms';
            $this->dbReadPassword  = 'hot-luck';
            $this->dbWritePassword = 'hot-luck';
            $this->dbOnError       = 'die';
            $this->dbEmailOnError  = false;
        }

        // Add code/variables to be run only on local (testing) servers
        private function local()
        {
            ini_set('display_errors', '1');
            ini_set('error_reporting', E_ALL);

            define('WEB_ROOT', '/');

            $this->dbReadHost      = 'localhost';
            $this->dbWriteHost     = 'localhost';
            $this->dbName          = 'simple_db';
            $this->dbReadUsername  = 'j4kp07';
            $this->dbWriteUsername = 'j4kp07';
            $this->dbReadPassword  = 'china+wall';
            $this->dbWritePassword = 'china+wall';
            $this->dbOnError       = 'die';
            $this->dbEmailOnError  = false;
			
			$this->autofill		   = TRUE;
        }

        // Add code/variables to be run only on when script is launched from the shell
        private function shell()
        {
            ini_set('display_errors', '1');
            ini_set('error_reporting', E_ALL);

            define('WEB_ROOT', '');

            $this->dbReadHost      = 'localhost';
            $this->dbWriteHost     = 'localhost';
            $this->dbName          = '';
            $this->dbReadUsername  = '';
            $this->dbWriteUsername = '';
            $this->dbReadPassword  = '';
            $this->dbWritePassword = '';
            $this->dbOnError       = false;
            $this->dbEmailOnError  = true;
        }

        public function whereAmI()
        {
            for($i = 0; $i < count($this->productionServers); $i++)
                if(preg_match($this->productionServers[$i], getenv('HTTP_HOST')) === 1)
                    return 'production';

            for($i = 0; $i < count($this->stagingServers); $i++)
                if(preg_match($this->stagingServers[$i], getenv('HTTP_HOST')) === 1)
                    return 'staging';

            for($i = 0; $i < count($this->localServers); $i++)
                if(preg_match($this->localServers[$i], getenv('HTTP_HOST')) === 1)
                    return 'local';

            if(isset($_ENV['SHELL']))
                return 'shell';

            return false;
        }
    }
