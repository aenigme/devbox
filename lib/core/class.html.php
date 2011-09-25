<?php 
	class html 
	{
	 	/**
	 	 * Minify URI Builder
	 	 *
	 	 * @param string $href 
	 	 * @param string $type 
	 	 * @return string 
	 	 * @author j4kp07
	 	 */
		public function minify($href, $type = 'CSS')
		{
			$compiled = (is_array($href)) ? implode("." . strtolower($type) . ",", $href): $href;
		
			if (strtolower($type) == 'css') 
				$output = '<link rel="stylesheet" href="/min/?f=' . $compiled . '.css" type="text/css" media="screen" charset="utf-8" />' . "\r\n\t";
		
			if (strtolower($type) == 'js') 
				$output = '<script type="text/javascript" src="/min/?f=' . $compiled . '.js" charset="utf-8"></script>' . "\r\n\t";
		
			return $output;
		}
	
		/**
		 * Creates a stylesheet link with version based on datetime stamp.
		 *
		 * @param   string|array  filename, or array of filenames to match to array of medias
		 * @param   string|array  media type of stylesheet, or array to match filenames
		 * @param   boolean       include the index_page in the link
		 * @return  string
	 	 * 
		 * @todo stylesheet helper should detect 'config.display_errors' and minify when necessary
		 */
		public static function stylesheet($style, $media = FALSE, $index = FALSE, $debug = FALSE)
		{
			$output = (!$debug) ? self::minify($style) : self::link($style, 'stylesheet', 'text/css', '.css', $media, $index);
			return $output;
		}
	
		/**
		 * Creates a link tag with version based on datetime stamp.
		 *
		 * @param   string|array  filename
		 * @param   string|array  relationship
		 * @param   string|array  mimetype
		 * @param   string        specifies suffix of the file
		 * @param   string|array  specifies on what device the document will be displayed
		 * @param   boolean       include the index_page in the link
		 * @return  string
		 */
		public static function link($href, $rel, $type, $suffix = FALSE, $media = FALSE, $index = FALSE)
		{
			$compiled = '';
		
			if (is_array($href))
			{
				foreach ($href as $_href)
				{
					$_rel   = is_array($rel) ? array_shift($rel) : $rel;
					$_type  = is_array($type) ? array_shift($type) : $type;
					$_media = is_array($media) ? array_shift($media) : $media;

					$compiled .= self::link($_href, $_rel, $_type, $suffix, $_media, $index);
				}
			}
			else
			{
				$_href = $href;
			
				if (strpos($href, '://') === FALSE)
				{
					$href = url::base($index).$href; // Make the URL absolute
				}

				$length = strlen($suffix);
			
				if ($length > 0 AND substr_compare($href, $suffix, -$length, $length, FALSE) !== 0)
				{
					$href .= $suffix; // Add the defined suffix
					$_href .= $suffix;
				
					$filename = DOCROOT . trim($_href, '/'); // Add version
					if (file_exists($filename)) 
					{
						$version = date("mdYHis", filemtime($filename));
						$href .= '?' . $version;
					}
				}

				$attr = array
				(
					'rel' => $rel,
					'type' => $type,
					'href' => $href,
				);

				if (!empty($media))
				{
					$attr['media'] = $media; // Add the media type to the attributes
				}

				$compiled = '<link' . self::attributes($attr).' />';
			}

			return $compiled."\n";
		}
	
		/**
		 * Creates a script link with version based on datetime stamp.
		 *
		 * @param   string|array  filename
		 * @param   boolean       include the index_page in the link
		 * @return  string
		 * 
		 * @todo script helper should detect 'config.display_errors' and minify when necessary
		 */
		public static function script($script, $index = FALSE, $debug = FALSE)
		{
			$compiled = '';
		
			if (!$debug) 
			{
				$compiled = self::minify($script, 'js');
			}
			else if (is_array($script))
			{
				foreach ($script as $name)
				{
					$compiled .= self::script($name, $index, $debug);
				}
			}
			else
			{
				$_script = $script;
			
				if (strpos($script, '://') === FALSE)
				{
					$script = url::base((bool) $index).$script; // Add the suffix only when it's not already present
				}

				if (substr_compare($script, '.js', -3, 3, FALSE) !== 0)
				{
					$script .= '.js'; // Add the javascript suffix
					$_script .= '.js';
				
					$filename = DOCROOT . trim($_script, '/'); // Add version
					if (file_exists($filename)) 
					{
						$version = date("mdYHis", filemtime($filename));
						$script .= '?' . $version;
					}
				}

				$compiled = '<script type="text/javascript" src="'.$script.'"></script>';
			}

			return $compiled."\n";
		}
	
		/**
		 * apply || decode, htmlspecialchars || htmlentities recursivly to arrays() || to regular $variables. 
		 * Also protect against "double encoding".
		 * May also return a default value if variable not found.
		 * 
		 * Source: http://us3.php.net/manual/en/function.htmlspecialchars.php
		 *
		 * @author j4kp07
		 */
		public static function specialchars_or(&$mixed , $default = '', $quote_style = ENT_QUOTES)
		{
			$mixed = common::set_default($mixed, $default);
			return is_array($mixed) ? array_map('htmlspecialchars_or',$mixed, array_fill(0,count($mixed),$quote_style)) : htmlspecialchars(htmlspecialchars_decode($mixed, $quote_style ),$quote_style);
		}

		public static function specialchars_decode(&$mixed, $default = '', $quote_style = ENT_QUOTES) 
		{
		    $mixed = common::set_default($mixed, $default);
			if(is_array($mixed))
			{				    
		      return array_map('htmlspecialchars_decode',$mixed, array_fill(0,count($mixed),$quote_style));
		  	}
	  
			$trans_table = get_html_translation_table( HTML_SPECIALCHARS, $quote_style );
	    
		    return (strtr($mixed, array_flip($trans_table)));
		}

		public static function entities_or(&$mixed, $default = '', $quote_style = ENT_QUOTES)
		{
			$mixed = common::set_default($mixed, $default);
		    return is_array($mixed) ? array_map('htmlentities_or',$mixed, array_fill(0,count($mixed),$quote_style)) : htmlentities(html_entity_decode($mixed, $quote_style ),$quote_style);
		}

		public static function entities_decode(&$mixed, $default = '', $quote_style = ENT_QUOTES) 
		{
			$mixed = common::set_default($mixed, $default);		
			if(is_array($mixed))
			{
				return array_map('htmlentities_decode',$mixed, array_fill(0,count($mixed),$quote_style));
			}
	    
			$trans_table = get_html_translation_table(HTML_ENTITIES, $quote_style );
	    
		    return (strtr($mixed, array_flip($trans_table)));
		}
	}
