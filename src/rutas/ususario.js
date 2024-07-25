import express from "express";

// const usuariosSchemas = require("../modelos/usuarios");
import { agregar_usuario, ver_usuarios, ver_usuario_tal, actualizar_usuario, eliminar_usuario_tal } from "../controladores/usuariocontrolador.js";

const router_usuario = express.Router();

router_usuario.post("/usuarios",agregar_usuario);

//Ruta para obtnener todos los usuarios
router_usuario.get("/usuarios",ver_usuarios);

//Ruta para obtnener un solo usuario
router_usuario.get("/usuarios/:id",ver_usuario_tal);

//Ruta para actualizar o editar un usuario
router_usuario.put("/usuarios/:id",actualizar_usuario);

//Esta es otra forma de eliminar un usuario 
router_usuario.delete("/usuarios/:id",eliminar_usuario_tal);

export default router_usuario;
