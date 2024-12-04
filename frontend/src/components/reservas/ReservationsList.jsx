import React, { useState, useEffect } from 'react';
import '../reservas/Reservas.css';
import ReservationForm from './ReservationForm';

function ReservationsList() {
  const [reservations, setReservations] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);

  useEffect(() => {
    setReservations([
      {
        idReserva: 50,
        idHuesped: 100,
        idHabitacion: 200,
        fechaLlegada: '2024-10-15',
        fechaSalida: '2024-10-18',
        numNoches: 3,
        precioTotal: 30000.0,
        estadoReserva: 'CONFIRMADO',
      },
      {
        idReserva: 51,
        idHuesped: 101,
        idHabitacion: 201,
        fechaLlegada: '2024-10-18',
        fechaSalida: '2024-10-20',
        numNoches: 2,
        precioTotal: 40000.0,
        estadoReserva: 'PENDIENTE',
      },
    ]);
  }, []);

  const handleDelete = (idReserva) => {
    setReservations(reservations.filter((reserva) => reserva.idReserva !== idReserva));
  };

  const handleEdit = (reserva) => {
    setEditingReservation(reserva);
  };

  const handleSave = (updatedReservation) => {
    setReservations(
      reservations.map((reserva) =>
        reserva.idReserva === updatedReservation.idReserva ? updatedReservation : reserva
      )
    );
    setEditingReservation(null);
  };

  return (
    <div className="container">
      {editingReservation ? (
        <ReservationForm
          initialData={editingReservation}
          onSubmit={handleSave}
          onCancel={() => setEditingReservation(null)}
        />
      ) : (
        <>
          <h2 id="list-title">
            <i className="fas fa-calendar-alt me-2"></i> Lista de Reservas
          </h2>
          <div className="table-responsive">
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
                  <th>Acciones</th>
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
                    <td>
                      <button
                        className="edit-button btn"
                        onClick={() => handleEdit(reserva)}
                      >
                        Editar
                      </button>
                      <button
                        className="delete-button btn"
                        onClick={() => handleDelete(reserva.idReserva)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default ReservationsList;


