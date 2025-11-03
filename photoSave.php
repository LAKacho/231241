<?php
session_start();

// Проверка авторизации
if (!isset($_COOKIE['idOG'])) {
    http_response_code(403);
    exit('Доступ запрещен');
}




header('Content-Type: text/plain; charset=utf-8');

try {
    $uploadDir = __DIR__ . '/uploads/';
    
    // Создание папки, если не существует
    if (!file_exists($uploadDir)) {
        if (!mkdir($uploadDir, 0777, true)) {
            throw new Exception('Не удалось создать директорию для загрузки');
        }
    }

    // Проверка наличия файла
    if (empty($_FILES['photo']) || !isset($_FILES['photo']['tmp_name'])) {
        throw new Exception('Файл не был загружен');
    }

    $file = $_FILES['photo'];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('Ошибка загрузки файла: ' . $file['error']);
    }

    if ($file['size'] > 5 * 1024 * 1024) {
        throw new Exception('Файл слишком большой');
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);

    $allowedMimes = ['image/jpeg', 'image/pjpeg'];
    if (!in_array($mime, $allowedMimes)) {
        throw new Exception('Недопустимый тип файла: ' . $mime);
    }

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, ['jpg', 'jpeg'])) {
        throw new Exception('Недопустимое расширение файла');
    }
    $d = date("Y-m-d H!i!s");
    $b = $_COOKIE['idOG'];
    
    $filename = 'face_' . $b ."_". $d . '.jpg';
    $destination = $uploadDir . $filename;

    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        throw new Exception('Ошибка сохранения файла');
    }

    echo 'success';
} catch (Exception $e) {
    http_response_code(500);
    error_log('[Face Upload Error] ' . $e->getMessage());
    echo 'Ошибка: ' . $e->getMessage();
}