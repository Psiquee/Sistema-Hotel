// ReservationForm.jsx
import React, { useState } from 'react';

function ReservationForm() {
  const [formData, setFormData] = useState({
    idHuesped: '',
    idHabitacion: '',
    fechaLlegada: '',
    fechaSalida: '',
    numNoches: '',
    precioTotal: '',
    estadoReserva: 'PENDIENTE'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Nueva reserva:', formData);
    setFormData({
      idHuesped: '',
      idHabitacion: '',
      fechaLlegada: '',
      fechaSalida: '',
      numNoches: '',
      precioTotal: '',
      estadoReserva: 'PENDIENTE'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Reserva</h2>
      <input type="text" name="idHuesped" placeholder="Id Huésped" value={formData.idHuesped} onChange={handleChange} required />
      <input type="text" name="idHabitacion" placeholder="Id Habitación" value={formData.idHabitacion} onChange={handleChange} required />
      <input type="date" name="fechaLlegada" placeholder="Fecha Llegada" value={formData.fechaLlegada} onChange={handleChange} required />
      <input type="date" name="fechaSalida" placeholder="Fecha Salida" value={formData.fechaSalida} onChange={handleChange} required />
      <input type="number" name="numNoches" placeholder="Número de Noches" value={formData.numNoches} onChange={handleChange} required />
      <input type="number" name="precioTotal" placeholder="Precio Total" value={formData.precioTotal} onChange={handleChange} required />
      <select name="estadoReserva" value={formData.estadoReserva} onChange={handleChange}>
        <option value="PENDIENTE">Pendiente</option>
        <option value="CONFIRMADO">Confirmado</option>
        <option value="CANCELADO">Cancelado</option>
      </select>
      <button type="submit">Agregar Reserva</button>
    </form>
  );
}

export default ReservationForm;
