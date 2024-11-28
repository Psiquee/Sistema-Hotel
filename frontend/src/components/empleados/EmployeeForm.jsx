// EmployeeForm.js
import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cargo: '',
    telefono: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend.
    console.log('Datos del nuevo empleado:', formData);
    // Resetear formulario después de enviar
    setFormData({
      nombre: '',
      apellido: '',
      cargo: '',
      telefono: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nuevo Empleado</h2>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
      <input type="text" name="cargo" placeholder="Cargo" value={formData.cargo} onChange={handleChange} required />
      <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Agregar Empleado</button>
    </form>
  );
}

export default EmployeeForm;
