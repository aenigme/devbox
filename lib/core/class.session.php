<?php 
/**
 * Session library ported from the Kohana. SPT 11/16/11
 *
 * $Id: Session.php 4073 2009-03-13 17:53:58Z Shadowhand $
 *
 * @copyright  (c) 2007-2008 Kohana Team
 * @license    http://kohanaphp.com/license.html
 */
class Session {

	// Session singleton
	protected static $instance;

	// Protected key names (cannot be set by the user)
	protected static $protect = array('session_id', 'user_agent', 'last_activity', 'ip_address', 'total_hits', '_kf_flash_');

	// Configuration and driver
	protected static $config;
	protected static $driver;

	// Flash variables
	protected static $flash;

	// Input library
	protected $input;
	
	protected $cookie_name;
	
	/**
	 * Singleton instance of Session.
	 */
	public static function instance()
	{
		if (Session::$instance == NULL)
			new Session;

		return Session::$instance;
	}

	/**
	 * On first session instance creation, sets up the driver and creates session.
	 */
	public function __construct()
	{
		$this->cookie_name = $this->cookie_name . '_data';
		
		// This part only needs to be run once
		if (Session::$instance === NULL)
		{
			$config['name'] = Config::get('sessionName');
			$config['driver'] = 'native';
			$config['regenerate'] = 0;
			$config['validate'] = $_SERVER['REMOTE_ADDR'];

			// Makes a mirrored array, eg: foo=foo
			Session::$protect = array_combine(Session::$protect, Session::$protect);

			// Configure garbage collection
			ini_set('session.gc_probability', (int) Session::$config['gc_probability']);
			ini_set('session.gc_divisor', 100);
			ini_set('session.gc_maxlifetime', (Session::$config['expiration'] == 0) ? 86400 : Session::$config['expiration']);

			// Create a new session
			$this->create();

			if (Session::$config['regenerate'] > 0 AND ($_SESSION['total_hits'] % Session::$config['regenerate']) === 0)
			{
				// Regenerate session id and update session cookie
				$this->regenerate();
			}
			else
			{
				// Always update session cookie to keep the session alive
				cookie::set(Session::$config['name'], $_SESSION['session_id'], Session::$config['expiration']);
			}

			// Close the session just before sending the headers, so that
			// the session cookie(s) can be written.
			// Event::add('system.send_headers', array($this, 'write_close'));

			// Make sure that sessions are closed before exiting
			register_shutdown_function(array($this, 'write_close'));

			// Singleton instance
			Session::$instance = $this;
		}
	}

	/**
	 * Get the session id.
	 *
	 * @return  string
	 */
	public function id()
	{
		return $_SESSION['session_id'];
	}

	/**
	 * Create a new session.
	 *
	 * @param   array  variables to set after creation
	 * @return  void
	 */
	public function create($vars = NULL)
	{
		// Destroy any current sessions
		$this->destroy();
		
		// Validate the session name
		if ( ! preg_match('~^(?=.*[a-z])[a-z0-9_]++$~iD', Config::get('sessionName')))
			die ('session.invalid_session_name');

		// Name the session, this will also be the name of the cookie
		session_name(Session::$config['name']);

		// Set the session cookie parameters
		session_set_cookie_params
		(
			Session::$config['expiration'],
			Config::get('cookiePath'),
			Config::get('cookieDomain'),
			Config::get('cookieSecure'),
			Config::get('cookieHttponly')
		);

		// Start the session!
		session_start();

		// Put session_id in the session variable
		$_SESSION['session_id'] = session_id();

		// Set defaults
		if ( ! isset($_SESSION['_kf_flash_']))
		{
			$_SESSION['total_hits'] = 0;
			$_SESSION['_kf_flash_'] = array();

			$_SESSION['user_agent'] = Common::user_agent();
			$_SESSION['ip_address'] = $_SERVER['REMOTE_ADDR'];
		}

		// Set up flash variables
		Session::$flash =& $_SESSION['_kf_flash_'];

		// Increase total hits
		$_SESSION['total_hits'] += 1;

		// Validate data only on hits after one
		if ($_SESSION['total_hits'] > 1)
		{
			// Validate the session
			foreach (Session::$config['validate'] as $valid)
			{
				switch ($valid)
				{
					// Check user agent for consistency
					case 'user_agent':
						if ($_SESSION[$valid] !== $_SERVER['HTTP_USER_AGENT'])
							return $this->create();
					break;

					// Check ip address for consistency
					case 'ip_address':
						if ($_SESSION[$valid] !== $this->input->$valid())
							return $this->create();
					break;

					// Check expiration time to prevent users from manually modifying it
					case 'expiration':
						if (time() - $_SESSION['last_activity'] > ini_get('session.gc_maxlifetime'))
							return $this->create();
					break;
				}
			}
		}

		// Expire flash keys
		$this->expire_flash();

		// Update last activity
		$_SESSION['last_activity'] = time();

		// Set the new data
		Session::set($vars);
	}

	/**
	 * Regenerates the global session id.
	 *
	 * @return  void
	 */
	public function regenerate()
	{
		session_regenerate_id(TRUE);

		// Update session with new id
		$_SESSION['session_id'] = session_id();

		// Get the session name
		$name = session_name();

		if (isset($_COOKIE[$name]))
		{
			// Change the cookie value to match the new session id to prevent "lag"
			$_COOKIE[$name] = $_SESSION['session_id'];
		}
	}

	/**
	 * Destroys the current session.
	 *
	 * @return  void
	 */
	public function destroy()
	{
		if (session_id() !== '')
		{
			// Get the session name
			$name = session_name();

			// Destroy the session
			session_destroy();

			// Re-initialize the array
			$_SESSION = array();
			
			// Delete the session cookie
			Cookie::delete($name);
		}
	}

	/**
	 * Runs the system.session_write event, then calls session_write_close.
	 *
	 * @return  void
	 */
	public function write_close()
	{
		static $run;

		if ($run === NULL)
		{
			$run = TRUE;

			// Expire flash keys
			$this->expire_flash();

			// Close the session
			session_write_close();
		}
	}

	/**
	 * Set a session variable.
	 *
	 * @param   string|array  key, or array of values
	 * @param   mixed         value (if keys is not an array)
	 * @return  void
	 */
	public function set($keys, $val = FALSE)
	{
		if (empty($keys))
			return FALSE;

		if ( ! is_array($keys))
		{
			$keys = array($keys => $val);
		}

		foreach ($keys as $key => $val)
		{
			if (isset(Session::$protect[$key]))
				continue;

			// Set the key
			$_SESSION[$key] = $val;
		}
	}

	/**
	 * Set a flash variable.
	 *
	 * @param   string|array  key, or array of values
	 * @param   mixed         value (if keys is not an array)
	 * @return  void
	 */
	public function set_flash($keys, $val = FALSE)
	{
		if (empty($keys))
			return FALSE;

		if ( ! is_array($keys))
		{
			$keys = array($keys => $val);
		}

		foreach ($keys as $key => $val)
		{
			if ($key == FALSE)
				continue;

			Session::$flash[$key] = 'new';
			Session::set($key, $val);
		}
	}

	/**
	 * Freshen one, multiple or all flash variables.
	 *
	 * @param   string  variable key(s)
	 * @return  void
	 */
	public function keep_flash($keys = NULL)
	{
		$keys = ($keys === NULL) ? array_keys(Session::$flash) : func_get_args();

		foreach ($keys as $key)
		{
			if (isset(Session::$flash[$key]))
			{
				Session::$flash[$key] = 'new';
			}
		}
	}

	/**
	 * Expires old flash data and removes it from the session.
	 *
	 * @return  void
	 */
	public function expire_flash()
	{
		static $run;

		// Method can only be run once
		if ($run === TRUE)
			return;

		if ( ! empty(Session::$flash))
		{
			foreach (Session::$flash as $key => $state)
			{
				if ($state === 'old')
				{
					// Flash has expired
					unset(Session::$flash[$key], $_SESSION[$key]);
				}
				else
				{
					// Flash will expire
					Session::$flash[$key] = 'old';
				}
			}
		}

		// Method has been run
		$run = TRUE;
	}

	/**
	 * Get a variable. Access to sub-arrays is supported with key.subkey.
	 *
	 * @param   string  variable key
	 * @param   mixed   default value returned if variable does not exist
	 * @return  mixed   Variable data if key specified, otherwise array containing all session data.
	 */
	public function get($key = FALSE, $default = FALSE)
	{
		if (empty($key))
			return $_SESSION;

		$result = isset($_SESSION[$key]) ? $_SESSION[$key] : Common::key_string($_SESSION, $key);

		return ($result === NULL) ? $default : $result;
	}

	/**
	 * Get a variable, and delete it.
	 *
	 * @param   string  variable key
	 * @param   mixed   default value returned if variable does not exist
	 * @return  mixed
	 */
	public function get_once($key, $default = FALSE)
	{
		$return = Session::get($key, $default);
		Session::delete($key);

		return $return;
	}

	/**
	 * Delete one or more variables.
	 *
	 * @param   string  variable key(s)
	 * @return  void
	 */
	public function delete($keys)
	{
		$args = func_get_args();

		foreach ($args as $key)
		{
			if (isset(Session::$protect[$key]))
				continue;

			// Unset the key
			unset($_SESSION[$key]);
		}
	}

	public function open($path, $name)
	{
		return TRUE;
	}

	public function close()
	{
		return TRUE;
	}

	public function read($id)
	{
		/*
			TODO get cookie
		*/
		$data = (string) Cookie::get($this->cookie_name);

		if ($data == '')
			return $data;

		return empty($this->encrypt) ? base64_decode($data) : $this->encrypt->decode($data);
	}

	public function write($id, $data)
	{
		$data = empty($this->encrypt) ? base64_encode($data) : $this->encrypt->encode($data);

		if (strlen($data) > 4048)
		{
			die('Session data exceeds the 4KB limit, ignoring write.');
			return FALSE;
		}
		
		/*
			TODO set cookie
		*/
		return Cookie::set($this->cookie_name, $data, Config::get('cookieExpire'));
	}

	// public function destroy($id)
	// {
	// 	/*
	// 		TODO delete cookie
	// 	*/
	// 	return cookie::delete($this->cookie_name);
	// }
	// 
	// public function regenerate()
	// {
	// 	session_regenerate_id(TRUE);
	// 
	// 	// Return new id
	// 	return session_id();
	// }

	public function gc($maxlifetime)
	{
		return TRUE;
	}
} 
