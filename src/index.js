import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

import rutaUsuarios from './rutas/ususario_rutas.js'; // Usa la extensión .js para archivos locales
import rutaProductos from './rutas/producto_rutas.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors({
    origin: '*', // Permite cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

app.use(express.json());
app.use("/api", rutaUsuarios);
app.use("/api", rutaProductos);

app.get("/", (req, res) => {
    res.send("Bienvenidos a mi aplicación");
});

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("El servidor está funcionando en el puerto", port));

