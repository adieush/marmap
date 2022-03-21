<?php
$params = require __DIR__ . '/config/config.php';
?>
<!DOCTYPE html>
<html>
<body>

<h1>My First Google Map</h1>

<div id="googleMap" style="width:100%;height:600px;"></div>

<script src="js/scripts.js"></script>

<script src="https://maps.googleapis.com/maps/api/js?key=<?=$params['googleMapsAPIKey']?>&callback=Main.myMap"></script>

</body>
</html>