<?php
$to = 'islammurat95@gmail.com';

// Subject
$subject = 'New Form Submission';

// Message
$name = htmlentities($_POST['name']);
$email = htmlentities($_POST['email']);
$details = htmlentities($_POST['details']);

$message = <<<message
<html>
<head>
  <title>New Form Submission</title>
</head>
<body>
<p>
<h2>Name:</h2> $name
</p>
<p>
<h2>Email:</h2> $email
</p>
<p>
<h2>Details:</h2> $details
</p>

</body>
</html>
message;

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
//$headers[] = 'From: Amir <amir@internetplus.biz>';

// Additional headers
//$headers[] = 'From: My Web Site';

// Mail it

mail($to, $subject, $message, implode("\r\n", $headers));
include_once 'thank-you.html';