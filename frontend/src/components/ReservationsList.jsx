// ReservationsList.jsx
import React, { useState, useEffect } from 'react';

function ReservationsList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Aquí simularemos los datos de reservas
    // Cuando esté el backend, reemplaza esta parte con un fetch a la API.
    setReservations([
      {
        idReserva: 50,
        idHuesped: 100,
        idHabitacion: 200,
        fechaLlegada: '2024-10-15',
        fechaSalida: '2024-10-18',
        numNoches: 3,
        precioTotal: 30000.0,
        estadoReserva: 'CONFIRMADO'
      },
      {
        idReserva: 51,
        idHuesped: 101,
        idHabitacion: 201,
        fechaLlegada: '2024-10-18',
        fechaSalida: '2024-10-20',
        numNoches: 2,
        precioTotal: 40000.0,
        estadoReserva: 'PENDIENTE'
      },
      // Agrega más reservas según la base de datos
    ]);
  }, []);

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Id Huésped</th>
            <th>Id Habitación</th>
            <th>Fecha Llegada</th>
            <th>Fecha Salida</th>
            <th>Noches</th>
            <th>Precio Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reserva) => (
            <tr key={reserva.idReserva}>
              <td>{reserva.idHuesped}</td>
              <td>{reserva.idHabitacion}</td>
              <td>{reserva.fechaLlegada}</td>
              <td>{reserva.fechaSalida}</td>
              <td>{reserva.numNoches}</td>
              <td>{reserva.precioTotal}</td>
              <td>{reserva.estadoReserva}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsList;
