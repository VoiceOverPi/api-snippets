<?php
// Get the PHP helper library from https://twilio.com/docs/libraries/php
require_once '/path/to/vendor/autoload.php'; // Loads the library
use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/user/account
$sid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token = "your_auth_token";
$client = new Client($sid, $token);

$numbers = $client->incomingPhoneNumbers->read(
    array("phoneNumber" => "+14158675310")
);
// Loop over the list of numbers and echo a property for each one
foreach ($numbers as $number) {
    echo $number->phoneNumber;
}
