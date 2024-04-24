const mongoose = require("mongoose");

const operariosSchemas = mongoose.Schema({
    cedula:{
        type: Number,
        require: true
    },
    nombre:{
        type:String,
        require: true
    },
    telefono:{
        type: Number,
        require: true
    },
    direccion:{
        type:String,
        require: true
    },
    email:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Operario",operariosSchemas); 