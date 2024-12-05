import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getReservas } from '../../api/reservacionesApi';
import EditarReservaModal from './EditarReservaModal'; 
import useLoading from '../../hooks/useLoading';
import useDelete from '../../hooks/useDelete';

const ReservasList = () => {
  const [reservas, setReservas] = useState([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedReservaId, setSelectedReservaId] = useState(null);
  const navigate = useNavigate();

  // cargar reservas
  useEffect(() => {
    const fetchReservas = async () => {
      startLoading();
      try {
        const data = await getReservas();
        setReservas(data);
      } catch (error) {
        console.error('Error al cargar reservas:', error);
      } finally {
        stopLoading();
      }
    };
    fetchReservas();
  }, []);

  const { deleteItem } = useDelete('http://localhost:3001/api/reservas', 'Reserva eliminada exitosamente');

  const handleAddReserva = () => {
    navigate('/add-reservation'); 
  };

  const handleEdit = (id) => {
    setSelectedReservaId(id);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setReservas(reservas.filter((reserva) => reserva.Id_reserva !== id));
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedReservaId(null);
  };

  const updateReservaInList = (updatedReserva) => {
    setReservas((prev) =>
      prev.map((reserva) =>
        reserva.Id_reserva === updatedReserva.Id_reserva ? updatedReserva : reserva
      )
    );
  };

  return (
    <div>
      <h2 id="list-title">Lista de Reservas</h2>
      <button className="add-button" onClick={handleAddReserva}>
        Agregar Reserva
      </button>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : reservas.length === 0 ? (
        <p>No hay reservas registradas.</p>
      ) : (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Huésped</th>
            <th>Habitación</th>
            <th>Fecha Llegada</th>
            <th>Fecha Salida</th>
            <th>Número de Noches</th>
            <th>Precio Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.Id_reserva}>
              <td>{reserva.Id_reserva}</td>
              <td>{reserva.Id_huesped}</td>
              <td>{reserva.Id_habitacion}</td>
              <td>{new Date(reserva.Fecha_llegada).toLocaleDateString()}</td>
              <td>{new Date(reserva.Fecha_salida).toLocaleDateString()}</td>
              <td>{reserva.Num_noches}</td>
              <td>{reserva.Precio_total}</td>
              <td>{reserva.Estado_reserva}</td>
              <td>
                <button onClick={() => handleEdit(reserva.Id_reserva)}>Editar</button>
                <button onClick={() => handleDelete(reserva.Id_reserva)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      {showEditModal && (
        <EditarReservaModal
          show={showEditModal}
          handleClose={closeEditModal}
          reservaId={selectedReservaId}
          updateReservaList={updateReservaInList}
        />
      )}
    </div>
  );
};

export default ReservasList;

