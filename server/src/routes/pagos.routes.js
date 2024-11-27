import { Router } from "express";
import { pool } from '../config/db.js';  

const router = Router();

router.get('/pagos', (req, res) => {
    res.send('Obtengo todos los pagos');
});

router.get('/pagos/:id', (req, res) => {
    res.send('Filtro pagos por su id');
});

router.post('/pagos', (req, res) => {
    res.send('Registro un nuevo pago');
});
router.put('/pagos/:id', (req, res) => {
    res.send('Actualizo un pago');
});
router.delete('/pagos/:id', (req, res) => {
    res.send('Elimino un pago');
});


export default router;