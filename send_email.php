<?php
// Enable error reporting and display errors
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Muțumim pentru mesaj! Vom reveni în curând.";
    } else {
        $error_message = error_get_last();
        if ($error_message !== null && isset($error_message['message'])) {
            $error_details = $error_message['message'];
            echo "A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou mai târziu. Detalii eroare: " . $error_details;
            
            // Log the error to a file
            file_put_contents('error.log', date('Y-m-d H:i:s') . ' - ' . $error_details . PHP_EOL, FILE_APPEND);
        } else {
            // If no specific error message is available, log a generic error message
            $generic_error_message = "A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou mai târziu.";
            echo $generic_error_message;
            
            // Log the generic error message to a file
            file_put_contents('error.log', date('Y-m-d H:i:s') . ' - ' . $generic_error_message . PHP_EOL, FILE_APPEND);
        }
    }
    exit; // Stop further execution
}
?>

