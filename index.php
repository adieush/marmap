<?php
$params = require __DIR__ . '/config/config.php';
?>
<!DOCTYPE html>
<html>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-38LF5KWF3G"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-38LF5KWF3G');
    </script>
</head>
<body>

<h3>Чаты Мариуполя</h3>
<p>Для добавления вашего чата свяжитесь со мной в Телеграмме @adieush</p>

<div id="googleMap" style="width:100%;height:600px;"></div>

<script src="js/scripts.js?t=<?=time()?>"></script>

<script src="https://maps.googleapis.com/maps/api/js?key=<?=$params['googleMapsAPIKey']?>&callback=Main.myMap"></script>

</body>
</html>