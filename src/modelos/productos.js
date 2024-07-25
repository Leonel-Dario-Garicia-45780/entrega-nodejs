import mongoose from 'mongoose';

const productosSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true 
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

/* // Puedes definir un índice único para el campo 'id'
productosSchema.index({ id: 1 }, { unique: true }); */

export default mongoose.model("Producto", productosSchema);
