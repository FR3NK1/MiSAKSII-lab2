const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger");
const equationRoutes = require("./routes/equationRoutes");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", equationRoutes);

module.exports = app;
