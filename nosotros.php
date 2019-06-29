<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nosotros</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,700,700i|PT+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css?v=<?php echo time(); ?>">
    <link rel="shortcut icon" type="image/jpg" href="images/icon/favicon.jpeg">
</head>
<body>
    
    <div class="wrapper">

        <nav class="navbar">

            <div class="navbar-logo">
                <img src="images/logo/logo_720x720.png" id="navbar-logo-img">
            </div>
            <div class="navbar-menu">
                <a href="index.php">INICIO</a>
                <a href="servicios.php">SERVICIOS</a>
                <a href="nosotros.php">NOSOTROS</a>
                <a id="nav-contact">CONTACTO</a>
            </div>

        </nav>

        <div class="aboutus-wrapper">

            <div class="aboutus-header">
                <h1>ACERCA DE NOSOTROS</h1>
            </div>

            <div class="aboutus-content" id="aboutus-content-id">
            
                <div class="aboutus-profile" onmouseover="setContainerImage('images/aboutus/aboutus_02.jpg')" onmouseout="quitContainerImage()">
                
                    <div class="profile-img" style="background-image: url(images/placeholder/profile_placeholder.png);"></div>
                    <h1 class="profile-info">Héctor Espinosa</h1>
                    <br>
                    <div class="profile-email">
                        <i class="fas fa-envelope profile-info"></i>
                        <p class="profile-info">correo@ejemplo.com</p>
                    </div>
                    <div class="profile-phone">
                        <i class="fas fa-phone profile-info"></i>
                        <p class="profile-info">0180808080</p>
                    </div>
                    <div class="profile-fb">
                        <i class="fab fa-facebook-square profile-info"></i>
                        <p class="profile-info">facebook.com/usuario</p>
                    </div>

                </div>

                <div class="aboutus-profile" onmouseover="setContainerImage('images/aboutus/aboutus_01.jpg')" onmouseout="quitContainerImage()">
                
                    <div class="profile-img" style="background-image: url(images/placeholder/profile_placeholder.png);"></div>
                    <h1 class="profile-info">Orlando Espinosa</h1>
                    <br>
                    <div class="profile-email">
                        <i class="fas fa-envelope profile-info"></i>
                        <p class="profile-info">correo@ejemplo.com</p>
                    </div>
                    <div class="profile-phone">
                        <i class="fas fa-phone profile-info"></i>
                        <p class="profile-info">0180808080</p>
                    </div>
                    <div class="profile-fb">
                        <i class="fab fa-facebook-square profile-info"></i>
                        <p class="profile-info">facebook.com/usuario</p>
                    </div>

                </div>

            </div>

            <div class="aboutus-br"></div>

        </div>

        <footer class="footer">

            <div class="footer-content">
                <p>cel: (52) 1 55 1302 1187 &nbsp;&nbsp;&nbsp;&nbsp; cel: (52) 81 8272 4092</p>
                <!--<p>cel: (52) 81 8272 4092</p>-->
                <p>correo: contacto@espinosa-arquitectura.com</p>
            </div>

        </footer>

        <?php

        $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        if(strpos($url, "contact=empty") == true || strpos($url, "contact=invalidEmail") == true || strpos($url, "contact=emailSend") == true || strpos($url, "contact=emailFailed") == true){
            echo "<div id='contact-container' class='contact-container-active'>";
        } else {
            echo "<div id='contact-container' class='contact-container-hidden'>";
        }

        ?>

            <div id="contact-content">

                <div class="contact-close" onclick="closeContact()">+</div>

                <?php

                if(strpos($url, "contact=empty") == true){
                    echo "<h2 class='answer-fail'>LLene todos los campos</h2>";
                }
                elseif(strpos($url, "contact=invalidEmail") == true){
                    echo "<h2 class='answer-fail'>Ingrese un correo válido</h2>";
                }
                elseif(strpos($url, "contact=emailSend") == true){
                    echo "<h2 class='answer-success'>Su correo ha sido envíado</h2>";
                }
                elseif(strpos($url, "contact=emailFailed") == true){
                    echo "<h2 class='answer-fail'>El correo no se envió, intente de nuevo</h2>";
                }

                ?>

                <h1>CONTACTANOS</h1>
                <p>envíenos un correo</p>

                <form action="php/test.php?page=nosotros.php" method="post" class="contact-form">

                    <p>nombre</p>
                    <input type="text" name="name" id="contact-name" class="contact-input form-input" placeholder="Escriba su nombre">
                    <p>correo electrónico</p>
                    <input type="email" name="email" id="contact-email" class="contact-input form-input" placeholder="Escriba su correo">
                    <p>asunto</p>
                    <input type="text" name="subject" id="contact-subject" class="contact-input form-input" placeholder="Escriba el asunto de su mensaje">
                    <p>mensaje</p>
                    <textarea name="message" id="contact-message" class="form-input" placeholder="Redacte su mensaje"></textarea>
                    <div class="contact-send">
                        <input type="submit" name="submit" value="Enviar" id="contact-submit" class="contact-submit contact-submit-hidden">
                    </div> 

                </form>
            
            </div>

        </div>

    </div>

    <script src="js/contact.js"></script>
    <script src="js/aboutus.js"></script>

</body>
</html>