<?php
$params = require __DIR__ . '/config/config.php';
?>
<!DOCTYPE html>
<html>
<body>

<h3>Чаты Мариуполя</h3>

<div id="googleMap" style="width:100%;height:600px;"></div>

<script src="js/scripts.js?t=<?=time()?>"></script>

<script src="https://maps.googleapis.com/maps/api/js?key=<?=$params['googleMapsAPIKey']?>&callback=Main.myMap"></script>

</body>
</html>