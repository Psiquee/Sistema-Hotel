// RoomsList.jsx
import React, { useState, useEffect } from 'react';

function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Aquí simulamos los datos de habitaciones
    // En el futuro, estos datos se pueden obtener desde una API.
    setRooms([
      {
        idHabitacion: 200,
        numHabitacion: 20,
        tipoHabitacion: 'Simple',
        precioNoche: 10000.0,
        estado: 'Ocupada'
      },
      {
        idHabitacion: 201,
        numHabitacion: 21,
        tipoHabitacion: 'Doble',
        precioNoche: 20000.0,
        estado: 'A confirmar'
      },
      {
        idHabitacion: 202,
        numHabitacion: 22,
        tipoHabitacion: 'Suite',
        precioNoche: 40000.0,
        estado: 'Disponible'
      },
      {
        idHabitacion: 203,
        numHabitacion: 23,
        tipoHabitacion: 'Familiar',
        precioNoche: 30000.0,
        estado: 'Ocupada'
      },
    ]);
  }, []);

  return (
    <div>
      <h2 id='list-title'>Lista de Habitaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Número Habitación</th>
            <th>Tipo</th>
            <th>Precio por Noche</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.idHabitacion}>
              <td>{room.numHabitacion}</td>
              <td>{room.tipoHabitacion}</td>
              <td>{room.precioNoche}</td>
              <td>{room.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomsList;
