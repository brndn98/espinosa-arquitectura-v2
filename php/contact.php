<?php

    if(isset($_POST['submit'])){

        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        if(empty($name) || empty($mailFrom) || empty($subject) || empty($message)){

            header('Location: ../index.php?contact=empty');
            exit();

        } else {

            if(!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)){

                header('Location: ../index.php?contact=invalidEmail');
                exit();

            } else {

                $finalSubject = $name.": ".$subject;
                $mailTo = "contacto@espinosa-arquitectura.com";
                $header = "From: ".$mailFrom;
                $text = "Has recibido un correo por parte de ".$name.".\n\n".$message;

                if(mail($mailTo, $finalSubject, $text, $header)){

                    header('Location: ../index.php?contact=emailSend');
                    die();

                } else {

                    header('Location: ../index.php?contact=emailFailed');
                    die();

                }

            }

        }

    }

?>