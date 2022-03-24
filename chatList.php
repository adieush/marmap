<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ChatList</title>
    <style>
        table {
            margin: 25px 0;
            width: 50%;
        }

        table th, table td {
            padding: 10px;
            text-align: center;
        }
        .num {
            width: 20%;
        }
        table, th, td {
            border: 1px solid;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<p><a href="index.html">Назад</a></p>
<table id="list">
    <thead>
    <tr>
        <th class="num">#</th>
        <th>Название чата</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
</table>

<script src="js/scripts.js?t=<?=time()?>"></script>
<script src="js/chatList.js?t=<?=time()?>"></script>
<script>
    Main.chatList.init();
</script>
</body>
</html>