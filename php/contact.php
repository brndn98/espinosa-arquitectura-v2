<?php

    if(isset($_POST['submit'])){

        $page = $_GET['page'];
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        if(empty($name) || empty($mailFrom) || empty($subject) || empty($message)){

            header('Location: ../' . $page . '?contact=empty');
            exit();

        } else {

            if(!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)){

                header('Location: ../' . $page . '?contact=invalidEmail');
                exit();

            } else {

                $finalSubject = $name.": ".$subject;
                $mailTo = "contacto@espinosa-arquitectura.com";
                $header = "From: ".$mailFrom;
                $text = "Has recibido un correo por parte de ".$name.".\n\n".$message;

                if(mail($mailTo, $finalSubject, $text, $header)){

                    header('Location: ../' . $page . '?contact=emailSend');
                    die();

                } else {

                    header('Location: ../' . $page . '?contact=emailFailed');
                    die();

                }

            }

        }

    }

?>