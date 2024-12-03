//frontend/src/ App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/Navbar';
import GuestsList from './components/huespedes/GuestsList';
import GuestForm from './components/huespedes/GuestForm';
import EmployeesList from './components/empleados/EmployeesList';
import EmployeeForm from './components/empleados/EmployeeForm';
import ReservationsList from './components/reservas/ReservationsList';
import ReservationForm from './components/reservas/ReservationForm';
import PaymentsList from './components/pagos/PaymentsList';
import PaymentForm from './components/pagos/PaymentForm';
import RoomsList from './components/habitaciones/RoomsList';
import RoomForm from './components/habitaciones/RoomForm';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Styles.css';
import './App.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Gestión de Personas */}
        <Route path="/guests" element={<GuestsList />} />
        <Route path="/add-guest" element={<GuestForm />} />

        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/add-employee?id=:id" element={<EmployeeForm />} />

        {/* Gestión de Reservas */}
        <Route path="/reservations" element={<ReservationsList />} />
        <Route path="/add-reservation" element={<ReservationForm />} />

        {/* Gestión de Cobros */}
        <Route path="/payments" element={<PaymentsList />} />
        <Route path="/add-payment" element={<PaymentForm />} />

        {/* Habitaciones */}
        <Route path="/rooms" element={<RoomsList />} />
        <Route path="/add-room" element={<RoomForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


