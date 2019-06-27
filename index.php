<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Espinosa Arquitectura</title>
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
                <a href="index.php">NOSOTROS</a>
                <a id="nav-contact">CONTACTO</a>
            </div>

        </nav>

        <div class="slider-wrapper">

            <div class="slider-container">

                <i class="fas fa-chevron-left" id="id-slider-prev" onclick="sliderPrevSlide()"></i>
                <i class="fas fa-chevron-right" id="id-slider-next" onclick="sliderNextSlide()"></i>

                <div class="slider-slide">

                    <div class="slide" id="lastSlideClone">
                        <img src="images/slider/unloaded/slider_lazy_img_3.jpg" class="slide-img slide-img-blur">
                    </div>
                    <div class="slide">
                        <img src="images/slider/unloaded/slider_lazy_img_1.jpg" class="slide-img slide-img-blur">
                        <div class="slide-info" onclick="slideInfoShow(this)">
                            <h1 class="slide-info-header">Slide Title 1</h1>
                            <p class="slide-info-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex odio, sodales eu maximus at, viverra vitae turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt, neque non cursus lobortis, sem augue porttitor enim, nec lobortis nulla nisi at arcu. Vivamus eget euismod sem, vel consequat tellus. Praesent et turpis mauris. Duis sit.
                            </p>
                        </div>
                        <div class="noScroll"></div>
                    </div>
                    <div class="slide">
                        <img src="images/slider/unloaded/slider_lazy_img_2.jpg" class="slide-img slide-img-blur">
                        <div class="slide-info" onclick="slideInfoShow(this)">
                            <h1 class="slide-info-header">Slide Title 2</h1>
                            <p class="slide-info-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum risus erat, eu tincidunt odio gravida sit amet. Cras arcu tellus, aliquet nec tortor vel, varius bibendum tortor. Cras facilisis dapibus iaculis. Nulla nec quam eget dui iaculis accumsan. Nam ultrices nibh at ante tincidunt, vitae varius magna suscipit. Curabitur luctus bibendum augue eu sodales. Fusce efficitur eros suscipit accumsan malesuada. Mauris tempus lorem tortor. Donec auctor nisi orci, sed fringilla velit aliquet dictum. Aliquam.
                            </p>
                        </div>
                        <div class="noScroll"></div>
                    </div>
                    <div class="slide">
                        <img src="images/slider/unloaded/slider_lazy_img_3.jpg" class="slide-img slide-img-blur">
                        <div class="slide-info" onclick="slideInfoShow(this)">
                            <h1 class="slide-info-header">Slide Title 3</h1>
                            <p class="slide-info-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ipsum odio, nec ultricies tortor fermentum ac. Donec at libero vitae tellus sagittis tempus. Duis tincidunt augue massa, nec pulvinar augue viverra vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer aliquet eros felis, vitae suscipit enim.
                            </p>
                        </div>
                        <div class="noScroll"></div>
                    </div>
                    <div class="slide" id="firstSlideClone">
                        <img src="images/slider/unloaded/slider_lazy_img_1.jpg" class="slide-img slide-img-blur">
                    </div>

                </div>

                <div class="slider-dots" id="slider-dots-id">
                    <div class="slider-dot"></div>
                    <div class="slider-dot"></div>
                    <div class="slider-dot"></div>
                </div>

            </div>

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

                <form action="php/test.php?page=index.php" method="post" class="contact-form">

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

    <script src="js/slider.js"></script>
    <script src="js/contact.js"></script>

</body>
</html>