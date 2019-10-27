# Autosalon
Клиент-серверное приложение Koa, PostgreSQL, React.
### Сервер 
Выполнен на Koa, база данных PostgreSQL работает через ORM Sequelize. Сервер отдает готовые данные в формате JSON.
### Клиент
Выполнен на React с использованием Хуков. CSS - Bootstrap. Клиент только отображает данные с сервера, но может быть легко расширяемым.

# Install
1) Download `git clone ***`
2) Config for PostgreSQL `/server/config/index.js`
3) Migration `/server/task/`
4) `npm install` in server and client directories
5) `npm start` first in server then client directories
6) Accsess in browser http://localhost:3000

# Server API
http://localhost:8081/revenue
http://localhost:8081/costs
http://localhost:8081/more
http://localhost:8081/orders

