import mongoose from 'mongoose';

const usuariosSchemas = mongoose.Schema({
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
    },
    contraseña:{
        type: String,
        require: true
    }
});

/* module.exports = mongoose.model("Usuario",usuariosSchemas);  */
export default mongoose.model("Usuario",usuariosSchemas);  
