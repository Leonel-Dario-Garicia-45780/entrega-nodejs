import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rutaUsuarios from './rutas/ususario.js'; // Usa la extensión .js para archivos locales

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api", rutaUsuarios);

app.get("/", (req, res) => {
    res.send("Bienvenidos a mi aplicación");
});

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("El servidor está funcionando en el puerto", port));

