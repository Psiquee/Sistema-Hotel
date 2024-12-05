//frontend/src/ App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import ReservacionesList from './components/reservas/ReservacionesList';
import ReservacionesForm from './components/reservas/ReservacionesForm';
import Home from './components/home/Home';
import EmpleadosList from './components/empleados/EmpleadosList';
import EmpleadosForm from './components/empleados/EmpleadosForm';
import HuespedesForm from './components/huespedes/HuespedesForm';
import HuespedesList from './components/huespedes/HuespedesList';
import HabitacionesList from './components/habitaciones/HabitacionesList';
import HabitacionesForm from './components/habitaciones/HabitacionesForm';
import PagosList from './components/pagos/PagosList';
import PagosForm from './components/pagos/PagosForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Styles.css';
import './App.css';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/guests" element={<HuespedesList />} />
        <Route path="/add-guest" element={<HuespedesForm />} />

        <Route path="/employees" element={<EmpleadosList />} />
        <Route path="/add-employee" element={<EmpleadosForm />} />
        <Route path="/add-employee?id=:id" element={<EmpleadosForm />} />

    
        <Route path="/reservations" element={<ReservacionesList />} />
        <Route path="/add-reservation" element={<ReservacionesForm />} />

        
        <Route path="/payments" element={<PagosList />} />
        <Route path="/add-payment" element={<PagosForm />} />

        
        <Route path="/rooms" element={<HabitacionesList />} />
        <Route path="/add-room" element={<HabitacionesForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


