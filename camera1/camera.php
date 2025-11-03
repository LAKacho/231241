<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Верификация лица</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 20px; }
        video { width: 100%; max-width: 640px; border: 1px solid #ccc; }
        #overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        #message { margin-top: 10px; font-size: 16px; color: #333; }
        #videoContainer {
            position: relative;
            display: inline-block;
        }
        #targetOval {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 350px;
            height: 450px;
            border: 3px dashed rgba(0, 150, 255, 0.8);
            border-radius: 50%/60%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            box-sizing: border-box;
        }
        canvas { display: none; }
    </style>
</head>
<body>

<h2>Верификация лица</h2>
<p>Поместите лицо в овал</p>

<div id="videoContainer">
    <video id="video" autoplay muted playsinline></video>
    <div id="targetOval"></div>
    <canvas id="canvas"></canvas>
</div>

<div id="message">Загрузка моделей...</div>

<script src="libs/face-api.min.js"></script>
<script>
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const message = document.getElementById('message');
    let photoTaken = false;

    async function init() {
        await faceapi.nets.tinyFaceDetector.loadFromUri('models/');
        message.textContent = 'Модели загружены, включаю камеру...';

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            message.textContent = 'Ищем лицо...';
            detectFace();
        } catch (err) {
            message.textContent = 'Ошибка доступа к камере: ' + err.message;
        }
    }

    async function detectFace() {
        const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.85 });

        video.addEventListener('play', () => {
            const interval = setInterval(async () => {
                if (photoTaken) return;

                const detection = await faceapi.detectSingleFace(video, options);

                if (detection && detection.box && detection.box.top !== null && detection.box.bottom !== null) {
                    const { x, y, width, height } = detection.box;
                    const videoCenterX = video.videoWidth / 2;
                    const videoCenterY = video.videoHeight / 2;
                    const faceCenterX = x + width / 2;
                    const faceCenterY = y + height / 2;

                    const dx = Math.abs(faceCenterX - videoCenterX);
                    const dy = Math.abs(faceCenterY - videoCenterY);

                    const threshold = 80;

                    if (dx < threshold && dy < threshold) {
                        message.textContent = 'Лицо по центру. Сохраняем фото...';
                        photoTaken = true;
                        clearInterval(interval);
                        takePhoto();
                    } else {
                        message.textContent = 'Поместите лицо в центр';
                    }
                } else {
                    message.textContent = 'Лицо не обнаружено или ошибка распознавания';
                }
            }, 300);
        });
    }

    function takePhoto() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append('photo', blob, 'face.jpg');

            try {
                const response = await fetch('photoSave.php', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const result = await response.text();
                    if (result === 'success') {
                        message.textContent = 'Фото успешно сохранено';
                        window.location.href = 'success.php';
                    } else {
                        throw new Error(result);
                    }
                } else {
                    throw new Error('Ошибка сервера при сохранении');
                }
            } catch (err) {
                message.textContent = 'Ошибка: ' + err.message;
            }
        }, 'image/jpeg', 0.8);
    }

    init();
</script>

</body>
</html>