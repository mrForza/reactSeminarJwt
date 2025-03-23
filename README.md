## reactSeminarJwt

### Как запустить:

1) С помощью docker:

    ```
    docker-compose up -d
    ```

2) Локально

    Устанавливаем зависимости:

    ```
    npm install
    ```

    Запускаем бэкенд сервер вместе с переменными окружения:

    ```
    PORT=1883 SALT_ROUNDS=10 JWT_SECRET_KEY=cn4ghognh3n33gunogmg npm run start
    ```

### Как запустить тесты

    Используем коллекцию тестов из файла `./tests/reactSeminar9Jwt.postman_collection`

    Импортируем данный файл в утилиту Postman