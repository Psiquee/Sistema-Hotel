import React, { useState, useEffect } from 'react';
import '../reservas/Reservas.css';

function ReservationForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    idHuesped: '',
    idHabitacion: '',
    fechaLlegada: '',
    fechaSalida: '',
    numNoches: '',
    precioTotal: '',
    estadoReserva: 'PENDIENTE',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      idHuesped: '',
      idHabitacion: '',
      fechaLlegada: '',
      fechaSalida: '',
      numNoches: '',
      precioTotal: '',
      estadoReserva: 'PENDIENTE',
    });
  };

  return (
    <form id="form-reservas" onSubmit={handleSubmit}>
      <h2 id="form-title">
        <i className="fas fa-calendar-alt me-2"></i>
        {initialData ? 'Editar Reserva' : 'Agregar Nueva Reserva'}
      </h2>

      {/* Cada uno de estos divs es un campo del formulario */}
      <div>
        <label>Id Huésped</label>
        <input
          type="text"
          name="idHuesped"
          placeholder="Id Huésped"
          value={formData.idHuesped}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Id Habitación</label>
        <input
          type="text"
          name="idHabitacion"
          placeholder="Id Habitación"
          value={formData.idHabitacion}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Fecha Llegada</label>
        <input
          type="date"
          name="fechaLlegada"
          value={formData.fechaLlegada}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Fecha Salida</label>
        <input
          type="date"
          name="fechaSalida"
          value={formData.fechaSalida}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Número de Noches</label>
        <input
          type="number"
          name="numNoches"
          placeholder="Número de Noches"
          value={formData.numNoches}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Precio Total</label>
        <input
          type="number"
          name="precioTotal"
          placeholder="Precio Total"
          value={formData.precioTotal}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Estado Reserva</label>
        <select
          name="estadoReserva"
          value={formData.estadoReserva}
          onChange={handleChange}
        >
          <option value="PENDIENTE">Pendiente</option>
          <option value="CONFIRMADO">Confirmado</option>
          <option value="CANCELADO">Cancelado</option>
        </select>
      </div>

      {/* Contenedor de los botones */}
      <div className="button-container">
        <button type="submit">Guardar</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancelar
          </button>
        )}
      </div>
    </form>

  );
}

export default ReservationForm;
