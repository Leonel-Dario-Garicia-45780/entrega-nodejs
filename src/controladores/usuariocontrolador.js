import { json } from "express";
import Usuario from "../modelos/usuarios.js";

//encryptar contraseña
import bcrypt from 'bcrypt';

export const agregar_usuario = async(req,res)=>{
    try {
        await Usuario.validate(req.body)
        //encriptar contraseña
        const contraseñacrypt = await bcrypt.hash(req.body.contraseña, 10);
        const nuevo_usuario = new Usuario({...req.body, contraseña:contraseñacrypt});
        //guardar usuario con contraseña encryptda
        const usuario = await nuevo_usuario.save();
        res.status(200).json(usuario);
    } catch (error) {
        console.log("error al agregar el ususario " + error);
    }
};

export const ver_usuarios = async(req,res)=>{
    try {
        const datos = await Usuario.find({});
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({mensaje: error.message});
    }
}

export const ver_usuario_tal = async(req,res)=>{
    const {id} = req.params;
    try {
        const dato = await Usuario.findById(id);
        if (!dato){
            return res.status(404).json({mensaje: "el usuario con id "+id+" no existe"})
        }
        res.status(200).json(dato)
    } catch (error) {
        res.status(500).json({mensaje: error.message});
    }
}

export const actualizar_usuario = async(req,res)=>{
    const { cedula, nombre, telefono, direccion, email, contraseña } = req.body;
    try {
        const actualizar = await Usuario.findByIdAndUpdate( //findByIdAndUpdate busca y atualiza a la vez
            cedula, 
            {
                nombre,
                telefono,
                direccion,
                email,
                contraseña
            },
            { new: true, runValidators: true }//! esto evuelve el documento actualizado y valida los datos de una vez, es mas optimo
        );
        if (!actualizar){
            return res.status(404).json({ mensaje: 'usuario no encotrado'})
        }
        res.status(200).json(actualizar);
    } catch (error) {
        res.status(500).json({mensaje: error.message});
    }
}

export const eliminar_usuario_tal = async(req,res)=>{
    const {id} = req.params;
    try {
        const eliminar = await Usuario.deleteOne({_id: id});
        if(eliminar.deletedCount === 0 ){
            return res.status(404).json({mensaje: "usuario no encontrado"})
        }
        res.status(200).json({mensaje: "usuario con id "+id+" eliminado exitodamente"})
    } catch (error) {
        res.status(500).json({mensaje: error.message});
    }
}