<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if ($login === 'admin' && $password === '12345') {
        $_SESSION['authenticated'] = true;
        $_SESSION["ids"] = $login;
        header('Location: camera.php');
        exit;
    } else {
        $error = 'Неверные учетные данные';
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
    <style>
        body {font-family: Arial; background: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;}
        .login-box {background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); width: 300px;}
        input {width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box;}
        button {background: #007bff; color: white; border: none; padding: 10px; width: 100%; cursor: pointer;}
        .error {color: red; font-size: 0.9em;}
    </style>
</head>
<body>
    <div class="login-box">
        <h2>Авторизация</h2>
        <?php if(isset($error)) echo "<p class='error'>$error</p>"; ?>
        <form method="POST">
            <input type="text" name="login" placeholder="Логин" required>
            <input type="password" name="password" placeholder="Пароль" required>
            <button type="submit">Войти</button>
        </form>
    </div>
</body>
</html>