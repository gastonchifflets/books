const express = require("express");
const database = require("./database/config");
require("dotenv").config();

// Crea el servidor de express
const app = express();

// Lectura y parseo del body
app.use(express.json());

// Base de datos
database();

// Rutas
app.use("/api/auth", require("./routes/auth"));

// listener
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
