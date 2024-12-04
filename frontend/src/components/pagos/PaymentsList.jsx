import React, { useState, useEffect } from 'react';
import '../pagos/Pagos.css';

function PaymentsList() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Simulamos datos de pagos
    // Cuando esté el backend, aquí haremos una llamada a la API.
    setPayments([
      {
        idPago: 20,
        idReserva: 50,
        fechaPago: '2024-10-18',
        montoPago: 30000,
        metodoPago: 'EFECTIVO',
        idEmpleado: 501
      },
      {
        idPago: 21,
        idReserva: 51,
        fechaPago: '2024-10-20',
        montoPago: 40000,
        metodoPago: 'DÉBITO',
        idEmpleado: 501
      },
      // Agrega más pagos según la base de datos
    ]);
  }, []);

  return (
    <div className="container">
   <h2 id="list-title">
        <i className="fas fa-money-bill-wave me-2"></i>Lista de Pagos
      </h2>
      <table>
        <thead>
          <tr>
            <th>Id Reserva</th>
            <th>Fecha Pago</th>
            <th>Monto Pago</th>
            <th>Método Pago</th>
            <th>Id Empleado</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.idPago}>
              <td>{payment.idReserva}</td>
              <td>{payment.fechaPago}</td>
              <td>{payment.montoPago}</td>
              <td>{payment.metodoPago}</td>
              <td>{payment.idEmpleado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentsList;

