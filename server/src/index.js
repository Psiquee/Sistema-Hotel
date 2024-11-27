import express from 'express';
import dotenv from 'dotenv';
import { pool } from './config/db.js';
import empleadosRoutes from './routes/empleados.routes.js'
import habitacionesRoutes  from "./routes/habitaciones.routes.js";
import huespedesRoutes from './routes/huespedes.routes.js';
import reservasRoutes from './routes/reservas.routes.js';
import pagosRoutes from './routes/pagos.routes.js';


//  dotenv
dotenv.config();

// inicializacion express
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

app.get('/ping', async(req,res)=> {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
});

// Definimos una ruta basica 
app.get("/", (req, res) => {
    res.status(200).end('Bienvenidos a la API del hotel!');
});


// Rutas de empleados
app.use(empleadosRoutes);

// Rutas de habitaciones
app.use(habitacionesRoutes);

// Rutas de huespedes
app.use(huespedesRoutes);

// Rutas de reservas
app.use(reservasRoutes);


// Rutas de pagos
app.use(pagosRoutes);



// Puerto de servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
