import { Router } from "express";
import { pool } from '../config/db.js';  

const router = Router();


router.get('/reservas', (req, res) => {
    res.send(' obtengo todas las reservas');
});
router.get('/reservas/:id', (req, res) => {
    res.send('filtro las reservas x id');
});
router.post('/reservas', (req, res) => {
    res.send('creo nueva reservas');
});

router.put('/reservas/:id', (req, res) => {
    res.send('actualizo la reserva x id');
});

router.delete('/reservas/:id', (req, res) => {
    res.send('elimino reserva x id');
});



export default router;