const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const users = require("./routes/users.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/users", users);

module.exports = app;
