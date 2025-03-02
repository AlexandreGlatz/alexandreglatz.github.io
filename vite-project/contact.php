<?php

if(isset($_POST["send"]))
{
    extract($_POST);

    if(isset($name) && $name != "" &&
        isset($email) && $email != "" &&
        isset($message) && $message != "" &&
        isset($subject) && $subject != "")
        {
            $to = "alexandre.glatzpro@gmail.com";

            $message = "
            <p>You received a message from : <strong>".$email."</strong></p>
            <p><strong>Name / Company : </strong>".$name."</p>
            <p><strong>Message : </strong".$message."</p>";

            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

            $headers .= "From: <".$mail.">" . "\r\n";

            $send = mail($to, $subject, $message, $headers);
            if($send)
            {
                $info = "Message Sent !";
                $color = "#0088a9";
                $shadow_color = "rgba(5, 167, 208, 0.5)";    
            }
            else
            {
                $info = "Message couldn't be sent !";
                $color = "#a90000";
                $shadow_color = "rgba(208, 5, 5, 0.5)";
            }
        } 

    else
    {
        $info = "Please fill all required fields !";
        $color = "#a90000";
        $shadow_color = "rgba(208, 5, 5, 0.5)";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel = "icon" type="images/png" href="images/logox32.png"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link rel="stylesheet" href="css/style.css"/>
		<link rel="stylesheet" href="css/contact.css"/>
		<title>Contact</title>
	</head>
	<body>
        <header>
            <a href="index.html" class="logo"><img src="images/logox64.png" alt="logo"/></a>
            <nav>
                <ul class="nav__links">
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a class="cta" href="contact.php"><button>Contact</button></a>

        </header>
        
        <div id="contact_form">
            <form action="" method="POST">
                <h2>Contact Me</h2>
                <label>First Name / Company</label>
                <input type="text" name="name" placeholder="John">
                <label>Email</label>
                <input type="email" name="email" placeholder="example@domain.tld">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="About">

                <label>Message</label>
                <textarea name="message" cols="30" rows="10" placeholder="Message here"></textarea>
                <button id="send_btn" name="send">Send</button>
            </form>

            <?php
                if(isset($info)) {
            ?>
                <p class="request_message" 
                style="background-color: <?=$color?>; box-shadow:0 0 8px <?=$shadow_color?>">
                    <?= $info ?>
                </p>

            <?php 
                }
            ?>
        </div>

	</body>
</html>