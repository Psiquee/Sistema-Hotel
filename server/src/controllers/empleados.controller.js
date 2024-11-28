import { pool } from '../config/db.js';

export const obtenerEmpleados = async (req, res) => {
    try {
        //throw new Error('DB ERROR')
        const [rows] = await pool.query('SELECT * FROM EMPLEADOS')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}
export const obtenerEmpleadoPorId = async (req, res) => {
    try {
        //throw new Error('DB ERROR')
        const [rows] = await pool.query('SELECT * FROM EMPLEADOS WHERE id_empleado = ?',
            [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No se encontro el empleado'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }

}
export const crearEmpleado = async (req, res) => {
    const { nombre, apellido, cargo, telefono, email } = req.body;
    try {
        //throw new Error('DB ERROR')
        const [rows] = await pool.query('INSERT INTO EMPLEADOS (nombre, apellido, cargo, telefono, email) VALUES(?, ?, ?, ?, ?)', [nombre, apellido, cargo, telefono, email])
        res.send({
            id: rows.insertId, // obtengo el id AI nuevo
            nombre,
            apellido,
            cargo,
            telefono,
            email
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}
export const actualizarEmpleado = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, cargo, telefono, email } = req.body;
    try {
        //throw new Error('DB ERROR')
        const [result] = await pool.query('UPDATE EMPLEADOS SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), cargo = IFNULL(?, cargo), telefono = IFNULL(?, telefono), email = IFNULL(?, email) WHERE id_empleado = ?',
            [nombre, apellido, cargo, telefono, email, id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM EMPLEADOS WHERE id_empleado = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}
export const eliminarEmpleado = async (req, res) => {
    try {
        //throw new Error('DB ERROR')
        const [result] = await pool.query('DELETE FROM EMPLEADOS WHERE id_empleado = ?',
            [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        //console.log(result)
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}