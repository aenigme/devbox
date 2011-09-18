Simple PHP Contact Form Library
===============================

Ever had to make a quick contact form on PHP site that's not using a framework or doesn't have contact form stuff built in? Well I got fed up of doing just that. The last time I had to make a PHP contact form I put a little bit more effort into making it reusable and bam we have this little library.

Installation
------------

* Paste the files into your site
* Edit your database settings, email address and subject line in the lib/contact_form.php file.
* Run the lib/enquiries.sql to add data table to your database

Notes
-----

Feel free to extend and if you have any comments or improvements, do let me know. Passing the entire $_POST array may seem a little dodgy but there is some stuff to cleanup and prevent MySQL injections.

	<?php

		include 'libraries/contact_form.php'; // Include the contact class.

		$contact = new Contact_form($_POST); // Instantiate the class and pass the post array

		$rowsaffected = $contact->save_data(); // Save the data to your database

		if($rowsaffected) : // If the data is saved email it and redirect
			$mailme = $contact->send_mail();
			header('Location: /contact/thanks');
		else : // There was a problem, show an error
			echo 'Sorry there was a problem, make sure you filled in all of the fields and please go back and try again.';
		endif;
	?>
