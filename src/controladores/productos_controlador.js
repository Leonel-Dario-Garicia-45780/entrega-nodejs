import Producto from '../modelos/productos.js';

export const agregar_producto = async (req, res) => {
    try {
        await Producto.validate(req.body); 
        const nuevo_producto = new Producto(req.body); 
        const producto = await nuevo_producto.save(); 
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al agregar el producto', error: error.message });
    }
};

export const ver_productos = async (req, res) => {
    try {
        const productos = await Producto.find({}); 
        res.status(200).json(productos); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
    }
};

export const ver_producto_tal = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findOne({ id }); 
        if (!producto) {
            return res.status(404).json({ mensaje: `Producto con ID ${id} no encontrado` });
        }
        res.status(200).json(producto); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el producto', error: error.message });
    }
};

export const actualizar_producto = async (req, res) => {
    const { id } = req.params;
    const actualizaciones = req.body;
    try {
        const productoActualizado = await Producto.findOneAndUpdate(
            { id },
            actualizaciones,
            { new: true, runValidators: true } 
        );
        if (!productoActualizado) {
            return res.status(404).json({ mensaje: `Producto con ID ${id} no encontrado` });
        }
        res.status(200).json(productoActualizado); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error: error.message });
    }
};

export const eliminar_producto_tal = async (req, res) => {
    const { id } = req.params;
    try {
        const eliminar = await Producto.deleteOne({ id }); 
        if (eliminar.deletedCount === 0) {
            return res.status(404).json({ mensaje: `Producto con ID ${id} no encontrado` });
        }
        res.status(200).json({ mensaje: `Producto con ID ${id} eliminado exitosamente` }); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error: error.message });
    }
};
