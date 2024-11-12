// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import GuestsList from './components/GuestsList';
import GuestForm from './components/GuestForm';
import EmployeesList from './components/EmployeesList';
import EmployeeForm from './components/EmployeeForm';
import ReservationsList from './components/ReservationsList';
import ReservationForm from './components/ReservationForm';
import PaymentsList from './components/PaymentsList';
import PaymentForm from './components/PaymentForm';
import RoomsList from './components/RoomsList';
import RoomForm from './components/RoomForm';
import Footer from './components/Footer';
import './Styles.css';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Gestión de Personas */}
        <Route path="/guests" element={<GuestsList />} />
        <Route path="/add-guest" element={<GuestForm />} />
        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/add-employee" element={<EmployeeForm />} />

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


