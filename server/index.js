const { app } = require("electron");
const server = require("./app");

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`API сервер запущен на http://localhost:${PORT}`);
  console.log(`Swagger доступен по адресу http://localhost:${PORT}/api-docs`);
});
