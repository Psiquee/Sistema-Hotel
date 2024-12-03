// RoomForm.jsx
import React, { useState } from 'react';

function RoomForm() {
  const [formData, setFormData] = useState({
    numHabitacion: '',
    tipoHabitacion: 'Simple',
    precioNoche: '',
    estado: 'Disponible'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Nueva habitación:', formData);
    setFormData({
      numHabitacion: '',
      tipoHabitacion: 'Simple',
      precioNoche: '',
      estado: 'Disponible'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 Id="form-title">Agregar Nueva Habitación</h2>
      <input
        type="number"
        name="numHabitacion"
        placeholder="Número de Habitación"
        value={formData.numHabitacion}
        onChange={handleChange}
        required
      />
      <select
        name="tipoHabitacion"
        value={formData.tipoHabitacion}
        onChange={handleChange}
      >
        <option value="Simple">Simple</option>
        <option value="Doble">Doble</option>
        <option value="Suite">Suite</option>
        <option value="Familiar">Familiar</option>
      </select>
      <input
        type="number"
        name="precioNoche"
        placeholder="Precio por Noche"
        value={formData.precioNoche}
        onChange={handleChange}
        required
      />
      <select
        name="estado"
        value={formData.estado}
        onChange={handleChange}
      >
        <option value="Disponible">Disponible</option>
        <option value="Ocupada">Ocupada</option>
        <option value="A confirmar">A confirmar</option>
      </select>
      <button type="submit">Agregar Habitación</button>
    </form>
  );
}

export default RoomForm;
