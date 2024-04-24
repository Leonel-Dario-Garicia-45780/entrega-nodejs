const express = require ("express");
const mongoose = require("mongoose");
require ("dotenv").config()  //Esto es para las variables de ambiente customizadas(seguras)
const rutaOperarios = require("./rutas/operarios");

const app = express();
const port = process.env.PORT || 9000;



app.use(express.json());

app.use("/api", rutaOperarios); 



//Rutas

app.get("/",(req, res)=>{
    res.send("Bienvenidos a mi aplicación")

})

//Conexion a mongo DB
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a Mongodb Compass"))
.catch((error)=>console.error(error))





app.listen(port, ()=> console.log("el servidor está funcionando en el puerto", port)); 



