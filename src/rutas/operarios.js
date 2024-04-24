const express = require ("express");
const operariosSchemas = require("../modelos/operarios");
const router = express.Router();


//Crear ruta operarios
router.post("/operarios",(req, res)=>{
    /* res.send("Ésta es la ruta del usaurio") */ /* Esto es para hacer la prueba de respuesta */

    /* Esto es para que se guarden los datos en la base de datos(Los datos que vienen del modelo y de request.http) */
    const operario = operariosSchemas(req.body);
    operario
    .save()
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
}

);

//Ruta para obtnener todos los usuarios
router.get("/operarios",(req, res)=>{
    operariosSchemas
    .find()
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
}

);


//Ruta para obtnener un solo usuario
router.get("/operarios/:id",(req, res)=>{
    const {id} = req.params;
    operariosSchemas
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
}

);



//Ruta para actualizar o editar un usuario
router.put("/operarios/:id",(req, res)=>{
    const {id} = req.params;
    const {cedula,nombre, telefono,direccion,email} = req.body
  
    operariosSchemas
    .updateOne({ _id:id},{$set:{cedula, nombre, telefono, direccion, email}})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
}

);



/* //Ruta para eliminar un usuario  //Con esta funcion no se pudo eliminar al usuario porque hay un error con el metodo remove
router.delete("/operarios/:id",(req, res)=>{
    const {id} = req.params;
    operariosSchemas
    .remove({ _id:id})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
}

); */

//Esta es otra forma de eliminar un usuario con el  método .findByIdAndDelete(Fuente: chatGPT)
router.delete("/operarios/:id",(req, res)=>{
    const {id} = req.params;
    operariosSchemas
    .findByIdAndDelete(id)
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
});




module.exports = router;




