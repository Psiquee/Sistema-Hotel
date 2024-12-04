import React, { useState } from 'react';
import '../pagos/Pagos.css';

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
    <form id="form-pagos" onSubmit={handleSubmit}>
      <h2 id="form-title">
        <i className="fas fa-money-bill-wave me-2"></i> Agregar Nuevo Pago
      </h2>

      <div>
        <label htmlFor="idReserva">Id Reserva</label>
        <input
          type="text"
          id="idReserva"
          name="idReserva"
          placeholder="Id Reserva"
          value={formData.idReserva}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="fechaPago">Fecha Pago</label>
        <input
          type="date"
          id="fechaPago"
          name="fechaPago"
          placeholder="Fecha Pago"
          value={formData.fechaPago}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="montoPago">Monto Pago</label>
        <input
          type="number"
          id="montoPago"
          name="montoPago"
          placeholder="Monto Pago"
          value={formData.montoPago}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="metodoPago">Método de Pago</label>
        <select
          id="metodoPago"
          name="metodoPago"
          value={formData.metodoPago}
          onChange={handleChange}
        >
          <option value="EFECTIVO">Efectivo</option>
          <option value="DÉBITO">Débito</option>
          <option value="TRANSFERENCIA">Transferencia</option>
        </select>
      </div>

      <div>
        <label htmlFor="idEmpleado">Id Empleado</label>
        <input
          type="text"
          id="idEmpleado"
          name="idEmpleado"
          placeholder="Id Empleado"
          value={formData.idEmpleado}
          onChange={handleChange}
          required
        />
      </div>

      {/* Contenedor de los botones */}
      <div className="button-container">
        <button type="submit">Agregar Pago</button>
      </div>
    </form>
  );
}

export default PaymentForm;



