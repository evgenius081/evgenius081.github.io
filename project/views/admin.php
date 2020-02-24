<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin</title>
</head>
<body>
    <h1>Control panel</h1>
    <div><a href="?logout">LogOut</a></div>
<div>
    <form method="post">
        <input type="text" name="file" placeholder="<?php echo isset($fileName) ?  $fileName :  'enter url' ?>">
        <input type="submit" value="OK">
    </form>
</div>
</body>
</html>