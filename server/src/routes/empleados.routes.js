import { Router } from "express";
import { pool } from '../config/db.js';  

const router = Router();


router.get('/empleados', (req, res) => {
    res.send('obteniendo empleados');
});


router.get('/empleados/:id', (req, res) => {
    res.send('obteniendo empleado x id');
});

router.post('/empleados', (req, res) => {
    res.send('creando empleado');
});

router.put('/empleados/:id', (req, res) => {
    res.send('actualizando empleado');
});

router.delete('/empleados/:id', (req, res) => {
    res.send('eliminar empleado');
});

export default router;
