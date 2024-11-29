// EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hacer una solicitud POST para agregar el nuevo empleado
      const response = await axios.post('/api/empleados', formData);
      console.log('Empleado agregado con éxito', response.data);
      // Resetear formulario después de enviar
      setFormData({
        nombre: '',
        apellido: '',
        cargo: '',
        telefono: '',
        email: ''
      });
    } catch (error) {
      console.error('Error al agregar el empleado', error.response || error.message);
    }
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

