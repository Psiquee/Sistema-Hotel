// PaymentForm.jsx
import React, { useState } from 'react';

function PaymentForm() {
  const [formData, setFormData] = useState({
    idReserva: '',
    fechaPago: '',
    montoPago: '',
    metodoPago: 'EFECTIVO',
    idEmpleado: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Nuevo pago:', formData);
    setFormData({
      idReserva: '',
      fechaPago: '',
      montoPago: '',
      metodoPago: 'EFECTIVO',
      idEmpleado: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 Id="form-title">Agregar Nuevo Pago</h2>
      <input type="text" name="idReserva" placeholder="Id Reserva" value={formData.idReserva} onChange={handleChange} required />
      <input type="date" name="fechaPago" placeholder="Fecha Pago" value={formData.fechaPago} onChange={handleChange} required />
      <input type="number" name="montoPago" placeholder="Monto Pago" value={formData.montoPago} onChange={handleChange} required />
      <select name="metodoPago" value={formData.metodoPago} onChange={handleChange}>
        <option value="EFECTIVO">Efectivo</option>
        <option value="DÉBITO">Débito</option>
        <option value="TRANSFERENCIA">Transferencia</option>
      </select>
      <input type="text" name="idEmpleado" placeholder="Id Empleado" value={formData.idEmpleado} onChange={handleChange} required />
      <button type="submit">Agregar Pago</button>
    </form>
  );
}

export default PaymentForm;

