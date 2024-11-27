import { Router } from "express";
import { pool } from '../config/db.js';  

const router = Router();


router.get('/huespedes', (req, res) => {
    res.send(' obtengo todos los huespedes');
});

router.get('/huespedes/:id', (req, res) => {
    res.send(' obtengo todos los huespedes x id');
});

router.post('/huespedes', (req, res) => {
    res.send(' registro huespedes');
});


router.put('/huespedes/:id', (req, res) => {
    res.send(' actualizo huesped');
});

router.get('/huespedes/:id', (req, res) => {
    res.send(' obtengo todos los huespedes x id');
});

router.delete('/huespedes/:id', (req, res) => {
    res.send(' elimino huesped');
});

export default router;
