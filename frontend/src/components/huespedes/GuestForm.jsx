// GuestForm.jsx
import React, { useState } from 'react';

function GuestForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend.
    console.log('Enviando datos:', formData);
    // Resetear formulario después de enviar
    setFormData({
      name: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 Id="form-title">Agregar Nuevo Huésped</h2>
      <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Agregar Huésped</button>
    </form>
  );
}

export default GuestForm;
