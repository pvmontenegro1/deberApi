import {pool} from "../db.js";

export const getUsers=async(req, res)=>{

    const {rows}= await pool.query("SELECT * FROM productos");//result es un objeto grande
    res.json(rows);
 
 
 };
 export const getUser=async(req,res)=>{ //trae parametros
    const {id}=req.params;
    const {rows}= await pool.query("SELECT * FROM productos WHERE producto_id= $1", [id]);//result es un objeto grande
   

   if (rows.length == 0){
    return res.status(404).json({message:"Usuario no encontrado"});
   }
   res.json(rows);

    
    };
    export const postUser = async (req, res) => {
        const producto = req.body;  // Espera un único producto
        console.log(producto);
    
        // Validar si faltan campos
        const { nombre, descripcion, precio, cantidad_stock, categoria_id } = producto;
        if (!nombre || !descripcion || !precio || !cantidad_stock || !categoria_id) {
            return res.status(400).send('Faltan datos necesarios para el producto.');
        }
    
        try {
            // Verificar si ya existe un producto con el mismo nombre
            const existeProducto = await pool.query(
                'SELECT * FROM productos WHERE nombre = $1',
                [nombre]
            );
    
            if (existeProducto.rowCount > 0) {
                return res.status(409).json({ message: 'El producto con ese nombre ya existe.' });
            }
    
            // Insertar el nuevo producto
            await pool.query(
                'INSERT INTO productos (nombre, descripcion, precio, cantidad_stock, categoria_id) VALUES ($1, $2, $3, $4, $5)', 
                [nombre, descripcion, precio, cantidad_stock, categoria_id]
            );
    
            res.send('Producto creado exitosamente.');
        } catch (error) {
            console.error('Error al crear el producto:', error);
            return res.status(500).json({ message: "Error del servidor interno" });
        }
    };
    
export const updateUser=async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, cantidad_stock, categoria_id } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!nombre || !descripcion || !precio || !cantidad_stock || !categoria_id) {
        return res.status(400).send('Faltan datos necesarios para actualizar el producto.');
    }

    try {
        const resultado = await pool.query(
            'UPDATE productos SET nombre=$1, descripcion=$2, precio=$3, cantidad_stock=$4, categoria_id=$5 WHERE producto_id=$6', 
            [nombre, descripcion, precio, cantidad_stock, categoria_id, id]
        );
        
        if (resultado.rowCount === 0) {
            return res.status(404).send('Producto no encontrado.');
        }

        console.log('Producto actualizado:', resultado);
        res.send(`Producto con ID ${id} actualizado exitosamente.`);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error al actualizar el producto.');
    }
};
export const deleteUser=async(req,res)=>{
    const {id}= req.params
     const {rows, rowCount}= await pool.query("DELETE FROM productos WHERE producto_id= $1 RETURNING *", [id]);//result es un objeto grande
     console.log(rows)

     if (rowCount == 0){
        return res.status(404).json({message:"usuario no encontrado"});
     }
    
     return res.json(rows);
   
            
};