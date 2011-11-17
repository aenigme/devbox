<?php 

class Data
{
	public static function autofill($type = 'text')
	{
		switch ($type) {
			case 'email':
				$output = strtolower(array_rand(self::get_names())) . '@email.com';
				break;
				
			case 'name':
				$output = array_rand(self::get_names());
				break;

			case 'street':
				$output = array_rand(self::get_streets());
				break;
				
			case 'city':
				$output = array_rand(self::get_cities());
				break;

			case 'state':
				$output = array_rand(self::get_states());
				break;
				
			case 'zipcode':
				$output = self::get_number(5);
				break;

			case 'country':
				$output = array_rand(self::get_countries());
				break;

			case 'phone':
				$output = common::format_phone(self::get_number(10));
				break;
					
			default:
				$output = $type;
				break;
		}
		return $output;
	}
	
	public static function get_countries($code = TRUE)
	{
		$countries = array(
			'AF'=>'Afghanistan',
			'AL'=>'Albania',
			'DZ'=>'Algeria',
			'AS'=>'American Samoa',
			'AD'=>'Andorra',
			'AO'=>'Angola',
			'AI'=>'Anguilla',
			'AQ'=>'Antarctica',
			'AG'=>'Antigua And Barbuda',
			'AR'=>'Argentina',
			'AM'=>'Armenia',
			'AW'=>'Aruba',
			'AU'=>'Australia',
			'AT'=>'Austria',
			'AZ'=>'Azerbaijan',
			'BS'=>'Bahamas',
			'BH'=>'Bahrain',
			'BD'=>'Bangladesh',
			'BB'=>'Barbados',
			'BY'=>'Belarus',
			'BE'=>'Belgium',
			'BZ'=>'Belize',
			'BJ'=>'Benin',
			'BM'=>'Bermuda',
			'BT'=>'Bhutan',
			'BO'=>'Bolivia',
			'BA'=>'Bosnia And Herzegovina',
			'BW'=>'Botswana',
			'BV'=>'Bouvet Island',
			'BR'=>'Brazil',
			'IO'=>'British Indian Ocean Territory',
			'BN'=>'Brunei',
			'BG'=>'Bulgaria',
			'BF'=>'Burkina Faso',
			'BI'=>'Burundi',
			'KH'=>'Cambodia',
			'CM'=>'Cameroon',
			'CA'=>'Canada',
			'CV'=>'Cape Verde',
			'KY'=>'Cayman Islands',
			'CF'=>'Central African Republic',
			'TD'=>'Chad',
			'CL'=>'Chile',
			'CN'=>'China',
			'CX'=>'Christmas Island',
			'CC'=>'Cocos (Keeling) Islands',
			'CO'=>'Columbia',
			'KM'=>'Comoros',
			'CG'=>'Congo',
			'CK'=>'Cook Islands',
			'CR'=>'Costa Rica',
			'CI'=>'Cote D\'Ivorie (Ivory Coast)',
			'HR'=>'Croatia (Hrvatska)',
			'CU'=>'Cuba',
			'CY'=>'Cyprus',
			'CZ'=>'Czech Republic',
			'CD'=>'Democratic Republic Of Congo (Zaire)',
			'DK'=>'Denmark',
			'DJ'=>'Djibouti',
			'DM'=>'Dominica',
			'DO'=>'Dominican Republic',
			'TP'=>'East Timor',
			'EC'=>'Ecuador',
			'EG'=>'Egypt',
			'SV'=>'El Salvador',
			'GQ'=>'Equatorial Guinea',
			'ER'=>'Eritrea',
			'EE'=>'Estonia',
			'ET'=>'Ethiopia',
			'FK'=>'Falkland Islands (Malvinas)',
			'FO'=>'Faroe Islands',
			'FJ'=>'Fiji',
			'FI'=>'Finland',
			'FR'=>'France',
			'FX'=>'France, Metropolitan',
			'GF'=>'French Guinea',
			'PF'=>'French Polynesia',
			'TF'=>'French Southern Territories',
			'GA'=>'Gabon',
			'GM'=>'Gambia',
			'GE'=>'Georgia',
			'DE'=>'Germany',
			'GH'=>'Ghana',
			'GI'=>'Gibraltar',
			'GR'=>'Greece',
			'GL'=>'Greenland',
			'GD'=>'Grenada',
			'GP'=>'Guadeloupe',
			'GU'=>'Guam',
			'GT'=>'Guatemala',
			'GN'=>'Guinea',
			'GW'=>'Guinea-Bissau',
			'GY'=>'Guyana',
			'HT'=>'Haiti',
			'HM'=>'Heard And McDonald Islands',
			'HN'=>'Honduras',
			'HK'=>'Hong Kong',
			'HU'=>'Hungary',
			'IS'=>'Iceland',
			'IN'=>'India',
			'ID'=>'Indonesia',
			'IR'=>'Iran',
			'IQ'=>'Iraq',
			'IE'=>'Ireland',
			'IL'=>'Israel',
			'IT'=>'Italy',
			'JM'=>'Jamaica',
			'JP'=>'Japan',
			'JO'=>'Jordan',
			'KZ'=>'Kazakhstan',
			'KE'=>'Kenya',
			'KI'=>'Kiribati',
			'KW'=>'Kuwait',
			'KG'=>'Kyrgyzstan',
			'LA'=>'Laos',
			'LV'=>'Latvia',
			'LB'=>'Lebanon',
			'LS'=>'Lesotho',
			'LR'=>'Liberia',
			'LY'=>'Libya',
			'LI'=>'Liechtenstein',
			'LT'=>'Lithuania',
			'LU'=>'Luxembourg',
			'MO'=>'Macau',
			'MK'=>'Macedonia',
			'MG'=>'Madagascar',
			'MW'=>'Malawi',
			'MY'=>'Malaysia',
			'MV'=>'Maldives',
			'ML'=>'Mali',
			'MT'=>'Malta',
			'MH'=>'Marshall Islands',
			'MQ'=>'Martinique',
			'MR'=>'Mauritania',
			'MU'=>'Mauritius',
			'YT'=>'Mayotte',
			'MX'=>'Mexico',
			'FM'=>'Micronesia',
			'MD'=>'Moldova',
			'MC'=>'Monaco',
			'MN'=>'Mongolia',
			'MS'=>'Montserrat',
			'MA'=>'Morocco',
			'MZ'=>'Mozambique',
			'MM'=>'Myanmar (Burma)',
			'NA'=>'Namibia',
			'NR'=>'Nauru',
			'NP'=>'Nepal',
			'NL'=>'Netherlands',
			'AN'=>'Netherlands Antilles',
			'NC'=>'New Caledonia',
			'NZ'=>'New Zealand',
			'NI'=>'Nicaragua',
			'NE'=>'Niger',
			'NG'=>'Nigeria',
			'NU'=>'Niue',
			'NF'=>'Norfolk Island',
			'KP'=>'North Korea',
			'MP'=>'Northern Mariana Islands',
			'NO'=>'Norway',
			'OM'=>'Oman',
			'PK'=>'Pakistan',
			'PW'=>'Palau',
			'PA'=>'Panama',
			'PG'=>'Papua New Guinea',
			'PY'=>'Paraguay',
			'PE'=>'Peru',
			'PH'=>'Philippines',
			'PN'=>'Pitcairn',
			'PL'=>'Poland',
			'PT'=>'Portugal',
			'PR'=>'Puerto Rico',
			'QA'=>'Qatar',
			'RE'=>'Reunion',
			'RO'=>'Romania',
			'RU'=>'Russia',
			'RW'=>'Rwanda',
			'SH'=>'Saint Helena',
			'KN'=>'Saint Kitts And Nevis',
			'LC'=>'Saint Lucia',
			'PM'=>'Saint Pierre And Miquelon',
			'VC'=>'Saint Vincent And The Grenadines',
			'SM'=>'San Marino',
			'ST'=>'Sao Tome And Principe',
			'SA'=>'Saudi Arabia',
			'SN'=>'Senegal',
			'SC'=>'Seychelles',
			'SL'=>'Sierra Leone',
			'SG'=>'Singapore',
			'SK'=>'Slovak Republic',
			'SI'=>'Slovenia',
			'SB'=>'Solomon Islands',
			'SO'=>'Somalia',
			'ZA'=>'South Africa',
			'GS'=>'South Georgia And South Sandwich Islands',
			'KR'=>'South Korea',
			'ES'=>'Spain',
			'LK'=>'Sri Lanka',
			'SD'=>'Sudan',
			'SR'=>'Suriname',
			'SJ'=>'Svalbard And Jan Mayen',
			'SZ'=>'Swaziland',
			'SE'=>'Sweden',
			'CH'=>'Switzerland',
			'SY'=>'Syria',
			'TW'=>'Taiwan',
			'TJ'=>'Tajikistan',
			'TZ'=>'Tanzania',
			'TH'=>'Thailand',
			'TG'=>'Togo',
			'TK'=>'Tokelau',
			'TO'=>'Tonga',
			'TT'=>'Trinidad And Tobago',
			'TN'=>'Tunisia',
			'TR'=>'Turkey',
			'TM'=>'Turkmenistan',
			'TC'=>'Turks And Caicos Islands',
			'TV'=>'Tuvalu',
			'UG'=>'Uganda',
			'UA'=>'Ukraine',
			'AE'=>'United Arab Emirates',
			'UK'=>'United Kingdom',
			'US'=>'United States',
			'UM'=>'United States Minor Outlying Islands',
			'UY'=>'Uruguay',
			'UZ'=>'Uzbekistan',
			'VU'=>'Vanuatu',
			'VA'=>'Vatican City (Holy See)',
			'VE'=>'Venezuela',
			'VN'=>'Vietnam',
			'VG'=>'Virgin Islands (British)',
			'VI'=>'Virgin Islands (US)',
			'WF'=>'Wallis And Futuna Islands',
			'EH'=>'Western Sahara',
			'WS'=>'Western Samoa',
			'YE'=>'Yemen',
			'YU'=>'Yugoslavia',
			'ZM'=>'Zambia',
			'ZW'=>'Zimbabwe'
		);

		if (!$code)
		{
			$countries = array_combine(array_values($countries), $countries);
		}
		return $countries;
	}
	
	public static function get_states($code = TRUE)
	{
		$states = array(
			'AL'=>"Alabama",  
			'AK'=>"Alaska",  
			'AZ'=>"Arizona",  
			'AR'=>"Arkansas",  
			'CA'=>"California",  
			'CO'=>"Colorado",  
			'CT'=>"Connecticut",  
			'DE'=>"Delaware",  
			'DC'=>"District Of Columbia",  
			'FL'=>"Florida",  
			'GA'=>"Georgia",  
			'HI'=>"Hawaii",  
			'ID'=>"Idaho",  
			'IL'=>"Illinois",  
			'IN'=>"Indiana",  
			'IA'=>"Iowa",  
			'KS'=>"Kansas",  
			'KY'=>"Kentucky",  
			'LA'=>"Louisiana",  
			'ME'=>"Maine",  
			'MD'=>"Maryland",  
			'MA'=>"Massachusetts",  
			'MI'=>"Michigan",  
			'MN'=>"Minnesota",  
			'MS'=>"Mississippi",  
			'MO'=>"Missouri",  
			'MT'=>"Montana",
			'NE'=>"Nebraska",
			'NV'=>"Nevada",
			'NH'=>"New Hampshire",
			'NJ'=>"New Jersey",
			'NM'=>"New Mexico",
			'NY'=>"New York",
			'NC'=>"North Carolina",
			'ND'=>"North Dakota",
			'OH'=>"Ohio",  
			'OK'=>"Oklahoma",  
			'OR'=>"Oregon",  
			'PA'=>"Pennsylvania",  
			'RI'=>"Rhode Island",  
			'SC'=>"South Carolina",  
			'SD'=>"South Dakota",
			'TN'=>"Tennessee",  
			'TX'=>"Texas",  
			'UT'=>"Utah",  
			'VT'=>"Vermont",  
			'VA'=>"Virginia",  
			'WA'=>"Washington",  
			'WV'=>"West Virginia",  
			'WI'=>"Wisconsin",  
			'WY'=>"Wyoming"
		);
		
		if (!$code)
		{
			$states = array_combine(array_values($states), $states);
		}
		return $states;
	}
	
	public static function get_names()
	{
		$array = array(
			'Victor',
			'Jenna',
			'India',
			'Skyler',
			'Camille',
			'Tad',
			'Leroy',
			'Kiona',
			'Maxine',
			'Catherine',
			'Cally',
			'Abdul',
			'Diana',
			'Hamilton',
			'Armand',
			'Kenneth',
			'Erich',
			'Kitra',
			'Jaime',
			'Althea',
			'Thor',
			'Blythe',
			'Cathleen',
			'Karyn',
			'Len',
			'Odessa',
			'Kelsey',
			'Jelani',
			'Curran',
			'Dahlia',
			'Derek',
			'Carly',
			'Nicole',
			'Natalie',
			'Alexander',
			'Simone',
			'Laura',
			'MacKensie',
			'Hoyt',
			'Dakota',
			'Rebecca',
			'Kylynn',
			'Damian',
			'Anjolie',
			'Virginia',
			'Emmanuel',
			'Lewis',
			'Darryl',
			'Sierra',
			'Andrew',
			'Echo',
			'Quamar',
			'Carly',
			'Jakeem',
			'Eagan',
			'Peter',
			'Chancellor',
			'Roth',
			'Cooper',
			'Hiram',
			'Amery',
			'Jessica',
			'Laith',
			'Phelan',
			'Cecilia',
			'Lev',
			'Lyle',
			'Philip',
			'Coby',
			'Alexis',
			'Yvonne',
			'Aaron',
			'Leroy',
			'Connor',
			'Anjolie',
			'Keith',
			'Kasper',
		);
		
		return array_combine(array_values($array), $array);
	}
	
	public static function get_streets()
	{
		$array = array(
			'3294 Sed St.',
			'682-6349 Luctus Ave',
			'284-1296 Enim. Rd.',
			'2453 Risus. St.',
			'Ap #589-1895 Vestibulum Road',
			'Ap #933-9779 Nec Av.',
			'5446 Mattis Street',
			'Ap #887-3114 Nec St.',
			'508-6500 Tellus St.',
			'834-4323 Non Street',
			'611-4787 Velit. Rd.',
			'Ap #601-1240 Morbi Street',
			'820-3726 A Ave',
			'858-7815 Aliquet. Av.',
			'1117 Vitae Street',
			'9855 Cursus Av.',
			'Ap #245-2665 Nullam St.',
			'2301 Odio, St.',
			'4089 Eu Av.',
			'749-8086 Urna Street',
			'7601 Praesent Rd.',
			'8877 Vel, Road',
			'7763 Donec St.',
			'Ap #149-4716 Magna. Av.',
			'448-8720 Proin Rd.',
			'7098 Mauris Street',
			'4395 Ac, Av.',	
		);
		
		return array_combine(array_values($array), $array);
	}	
	
	public static function get_cities()
	{
		$array = array(
			'Northampton',
			'Greensburg',
			'Bandon',
			'Norman',
			'Jamestown',
			'South Bend',
			'Kearns',
			'Altoona',
			'Gaithersburg',
			'McAllen',
			'Gainesville',
			'Mayagüez',
			'Phoenix',
			'Walla Walla',
			'Sedalia',
			'Palmdale',
			'Baytown',
			'Peekskill',
			'Moultrie',
			'Oxford',
		);
		
		return array_combine(array_values($array), $array);
	}	

	public static function get_number($num)
	{
		$output = '';
		$chars = "0123456789";
		$max = strlen($chars)-1;
		for ($i=0; $i<$num; $i++)
		{
			$output .= $chars[rand(0,$max)];
		}
		return $output;
	}
}


