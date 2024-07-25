import express from "express";
import { 
    agregar_usuario, 
    ver_usuarios, ver_usuario_tal, 
    actualizar_usuario, 
    eliminar_usuario_tal 
} from "../controladores/usuario_controlador.js";

const router_usuario = express.Router();

router_usuario.post  ("/usuarios",     agregar_usuario);
router_usuario.get   ("/usuarios",     ver_usuarios);
router_usuario.get   ("/usuarios/:id", ver_usuario_tal);
router_usuario.put   ("/usuarios/:id", actualizar_usuario);
router_usuario.delete("/usuarios/:id", eliminar_usuario_tal);

export default router_usuario;
