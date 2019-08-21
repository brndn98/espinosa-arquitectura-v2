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
    <!--<link rel="stylesheet" href="css/style.css">-->
    <link rel="shortcut icon" type="image/jpg" href="images/icon/favicon.jpeg">
</head>
<body>
    
    <div class="wrapper">

        <nav class="navbar navbar-top" id="navbar-id">

            <div class="navbar-logo">
                <img src="images/logo/logo_720x720.png" id="navbar-logo-img">
            </div>
            <div class="navbar-menu">
                <a href="index.php">INICIO</a>
                <a href="servicios.php">SERVICIOS</a>
                <a href="nosotros.php" style="opacity: 1">NOSOTROS</a>
                <a id="nav-contact" onclick="openContact()">CONTACTO</a>
            </div>

        </nav>

        <div class="aboutus-wrapper">

            <div class="services-header services-img">
                <!--<h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum risus erat, eu tincidunt odio gravida sit amet. Cras arcu tellus, aliquet nec tortor vel, varius bibendum tortor.
                </h1>-->
                <h1>
                Espinosa Arquitectura es una empresa de ingeniería, arquitectura, construcción y mantenimiento. Que combina las diferentes disciplinas para ofrecer a sus clientes construcciones de cálidad.
                </h1>
            </div>

            <div class="services-presentation">
                <img src="images/services/loaded/services_03.jpg" class="services-img">
                <div class="presentation-info">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <!--<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum risus erat, eu tincidunt odio gravida sit amet. Cras arcu tellus, aliquet nec tortor vel, varius bibendum tortor. Cras facilisis dapibus iaculis. Nulla nec quam eget dui iaculis accumsan. Nam ultrices nibh at ante tincidunt, vitae varius magna suscipit. Curabitur luctus bibendum augue eu sodales. Fusce efficitur eros suscipit accumsan malesuada. Mauris tempus lorem tortor. Donec auctor nisi orci, sed fringilla velit aliquet dictum. Aliquam.
                    </p>-->
                    <p>
                    Nuestro objetivo es ofrecer a nuestros clientes una total satisfacción al momento de construir, excediendo sus expectativas y creando un valor agregado a su inversión. Esto lo logramos brindando soluciones integrales, desarrollando desde ante-proyecto, proyecto ejecutivo, ingenierías, construcción y seguimiento post-construcción.
                    </p>
                </div>
            </div>

            <div class="aboutus-content" id="aboutus-content-id">

                <img class="aboutus-content-img hector-background" src="images/aboutus/aboutus_02.jpg" alt="Hector Espinosa">
                <img class="aboutus-content-img orlando-background" src="images/aboutus/aboutus_01.jpg" alt="Orlando Espinosa">

                <h1>CONOCE A NUESTRO EQUIPO</h1>
            
                <div class="aboutus-profile" id="hector-profile" onmouseover="setImage(this.id)" onmouseout="removeImage()">

                    <div class="profile-info">
                        <h1>Acerca de Héctor</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum risus erat, eu tincidunt odio gravida sit amet. Cras arcu tellus, aliquet nec tortor vel, varius bibendum tortor. Cras facilisis dapibus iaculis. Nulla nec quam eget dui iaculis accumsan. Nam ultrices nibh at ante tincidunt, vitae varius magna suscipit.
                        </p>
                    </div>
                    <div class="profile-details">
                        <div class="profile-img" style="background-image: url(images/placeholder/profile_placeholder.png);"></div>
                        <h1>Héctor Espinosa</h1>
                        <p>Puesto en la empresa</p>
                        <br>
                        <div class="profile-email profile-social">
                            <i class="fas fa-envelope"></i>
                            <p>correo@ejemplo.com</p>
                        </div>
                        <div class="profile-phone profile-social">
                            <i class="fas fa-phone"></i>
                            <p>0180808080</p>
                        </div>
                        <div class="profile-fb profile-social">
                            <i class="fab fa-facebook-square"></i>
                            <p>facebook.com/usuario</p>
                        </div>
                        <div class="profile-linkedin profile-social">
                            <i class="fab fa-linkedin"></i>
                            <p>linkedin.com/usuario</p>
                        </div>
                    </div>

                </div>

                <div class="profile-br"></div>

                <div class="aboutus-profile" id="orlando-profile" onmouseover="setImage(this.id)" onmouseout="removeImage()">

                    <div class="profile-details">
                        <div class="profile-img" style="background-image: url(images/placeholder/profile_placeholder.png);"></div>
                        <h1>Orlando Espinosa</h1>
                        <p>Puesto en la empresa</p>
                        <br>
                        <div class="profile-email profile-social">
                            <i class="fas fa-envelope"></i>
                            <p>correo@ejemplo.com</p>
                        </div>
                        <div class="profile-phone profile-social">
                            <i class="fas fa-phone"></i>
                            <p>0180808080</p>
                        </div>
                        <div class="profile-fb profile-social">
                            <i class="fab fa-facebook-square"></i>
                            <p>facebook.com/usuario</p>
                        </div>
                        <div class="profile-linkedin profile-social">
                            <i class="fab fa-linkedin"></i>
                            <p>linkedin.com/usuario</p>
                        </div>
                    </div>
                    <div class="profile-info">
                        <h1>Acerca de Orlando</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum risus erat, eu tincidunt odio gravida sit amet. Cras arcu tellus, aliquet nec tortor vel, varius bibendum tortor. Cras facilisis dapibus iaculis. Nulla nec quam eget dui iaculis accumsan. Nam ultrices nibh at ante tincidunt, vitae varius magna suscipit.
                        </p>
                    </div>

                </div>

            </div>

            <div class="services-br services-img" style="margin-top: 0"></div>

        </div>

        <footer class="full-footer">

            <div class="full-footer-content">
                <div class="full-footer-widgets">
                    <div class="full-footer-widget full-footer-logo">
                        <img src="images/logo/logo_w_720x720.png" alt="footer logo">
                    </div>
                    <div class="full-footer-widget full-footer-aboutus">
                        <h1>MORE ABOUT US</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem rerum, provident possimus accusamus amet vitae fugiat distinctio nobis at iusto dolores recusandae quidem soluta beatae earum.</p>
                    </div>
                    <div class="full-footer-widget full-footer-info">
                        <div class="full-footer-contact">
                            <h1>CONTACT US</h1>
                            <div>
                                <i class="fas fa-phone"></i>
                                <p>(52) 1 55 1302 1187</p>
                            </div>
                            <div>
                                <i class="fas fa-phone"></i>
                                <p>(52) 81 8272 4092</p>
                            </div>
                            <div>
                                <i class="fas fa-envelope"></i>
                                <p>contacto@espinosa-arquitectura.com</p>
                            </div>
                        </div>
                        <div class="full-footer-social">
                            <h1>FOLLOW US</h1>
                            <div>
                                <i class="fab fa-facebook-square footer-icon"></i>
                                <i class="fab fa-twitter footer-icon"></i>
                                <i class="fab fa-instagram footer-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="full-footer-navbar">
                    <div class="full-footer-nav">
                        <a href="index.php">INICIO</a>
                        <a href="servicios.php">SERVICIOS</a>
                        <a href="nosotros.php">NOSOTROS</a>
                        <a id="nav-contact" onclick="openContact()">CONTACTO</a>
                    </div>
                    <p>Copyright &copy <?php echo date("Y"); ?> Espinosa Arquitectura</p>
                </div>
                <!--
                <p>cel: (52) 1 55 1302 1187 &nbsp;&nbsp;&nbsp;&nbsp; cel: (52) 81 8272 4092</p>
                <p>correo: contacto@espinosa-arquitectura.com</p>
                -->
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

    <script src="js/navbar.js?v=<?php echo time(); ?>"></script>
    <script src="js/contact.js?v=<?php echo time(); ?>"></script>
    <script src="js/aboutus.js?v=<?php echo time(); ?>"></script>

</body>
</html>