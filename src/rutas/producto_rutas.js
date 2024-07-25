import express from 'express';
import {
    agregar_producto,
    ver_productos,
    ver_producto_tal,
    actualizar_producto,
    eliminar_producto_tal
} from '../controladores/productos_controlador.js'; 

const router_productos = express.Router();

router_productos.post('/productos', agregar_producto);
router_productos.get('/productos', ver_productos);
router_productos.get('/productos/:id', ver_producto_tal);
router_productos.put('/productos/:id', actualizar_producto);
router_productos.delete('/productos/:id', eliminar_producto_tal);

export default router_productos;
