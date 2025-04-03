<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if ($name && $email && $subject && $message) {
        $to = "alexandre.glatzpro@gmail.com";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: <$email>" . "\r\n";

        $messageBody = "
            <p>You received a message from: <strong>$email</strong></p>
            <p><strong>Name / Company:</strong> $name</p>
            <p><strong>Message:</strong> $message</p>";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Message Sent!']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Message couldn\'t be sent!']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Please fill all required fields!']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method!']);
}
?>
