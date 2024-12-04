import React, { useState} from 'react';
import '../huespedes/Huespedes.css';

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
    <div>
      <form id="form-guest" onSubmit={handleSubmit}>
      <h2 id="form-title">
        <i className="fas fa-user me-2"></i> Agregar Nuevo Huésped
      </h2>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <div className="email-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit" className="edit-button">
              Agregar Huésped
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GuestForm;

