<?php

    if(isset($_POST['submit'])){

        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "contacto@espinosa-arquitectura.com";
        $header = "From: ".$mailFrom;
        $text = "Has recibido un correo por parte de ".$name.".\n\n".$message;

        if(mail($mailTo, $subject, $text, $header)){
            echo "<p>Tu correo ha sido enviado :)</p>";
            header('Location: ../index.html');
            die();
        } else {
            echo "<p>Algo ha salido mal :(</p>";
            header('Location: ../index.html');
            die();
        }

    }

    //echo "this is a test";
    //readfile("index.html");
    //header('Location: ../index.html');

?>