<?php

    //last tested for passing the file path through the form as a GET variable, and redirecting to the same page using that variable

    if(isset($_POST['submit'])){

        $page = $_GET['page'];
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "contacto@espinosa-arquitectura.com";
        $header = "From: ".$mailFrom;
        $text = "Has recibido un correo por parte de ".$name.".\n\n".$message;

        echo "<p>URL: $page";
        echo "<p>name: $name";
        echo "<p>mailFrom: $mailFrom";
        echo "<p>subject: $subject";
        echo "<p>message: $message";

        header('Location: ../' . $page . '?contact=emailSend');

        /*
        if(mail($mailTo, $subject, $text, $header)){
            echo "<p>Tu correo ha sido enviado :)</p>";
            header('Location: ../index.html');
            die();
        } else {
            echo "<p>Algo ha salido mal :(</p>";
            header('Location: ../index.html');
            die();
        }
        */

    }

    //echo "this is a test";
    //readfile("index.html");
    //header('Location: ../index.html');

?>