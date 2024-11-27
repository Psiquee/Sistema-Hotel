import { Router } from "express";
import { pool } from '../config/db.js';  

const router = Router();

router.get('/habitaciones', (req, res) => {
    res.send('obteniendo todas las habitaciones');
});

router.get('/habitaciones/:id', (req, res) => {
    res.send('filtrando habitaciones x id');
});

router.post('/habitaciones', (req, res) => {
    res.send('creando habitacion');
});

router.put('/habitaciones/:id', (req, res) => {
    res.send('actualizando habitacion');
});

router.delete('/habitaciones/:id', (req, res) => {
    res.send('eliminando habitacion x id ');
});

export default router;