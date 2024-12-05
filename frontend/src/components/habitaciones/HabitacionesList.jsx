import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHabitaciones } from '../../api/habitacionesApi';
import EditarHabitacionModal from './EditarHabitacionModal'; // Componente de edición
import useLoading from '../../hooks/useLoading'; // Hook para manejo de carga
import useDelete from '../../hooks/useDelete'; // Hook para manejo de eliminación

const HabitacionesList = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedHabitacionId, setSelectedHabitacionId] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchHabitaciones = async () => {
      startLoading();
      try {
        const data = await getHabitaciones();
        setHabitaciones(data);
      } catch (error) {
        console.error('Error al cargar habitaciones:', error);
      } finally {
        stopLoading();
      }
    };
    fetchHabitaciones();
  }, []); 
  
  

  const { deleteItem } = useDelete(
    'http://localhost:3001/api/habitaciones',
    'Habitación eliminada exitosamente'
  );

  const handleAddHabitacion = () => {
    navigate('/add-room');
  };

  const handleEdit = (id) => {
    setSelectedHabitacionId(id);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setHabitaciones(habitaciones.filter((habitacion) => habitacion.Id_habitacion !== id));
  };

  const updateHabitacionesList = () => {
    const fetchHabitaciones = async () => {
      startLoading();
      try {
        const data = await getHabitaciones();
        setHabitaciones(data);
      } catch (error) {
        console.error('Error al cargar habitaciones:', error);
      } finally {
        stopLoading();
      }
    };
    fetchHabitaciones();
  };

  return (
    <div>
      <h2 id="list-title">Lista de Habitaciones</h2>
      <button className="add-button" onClick={handleAddHabitacion}>
        Agregar Habitacion
      </button>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : habitaciones.length === 0 ? (
        <p>No hay habitaciones registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Número</th>
              <th>Tipo</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {habitaciones.map((habitacion) => (
              
              <tr key={habitacion.Id_habitacion}>
                <td>{habitacion.Id_habitacion}</td>
                <td>{habitacion.Num_habitacion}</td>
                <td>{habitacion.Tipo_habitacion}</td>
                <td>{habitacion.Precio_noche}</td>
                <td>{habitacion.Estado}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(habitacion.Id_habitacion)}
                  >
                    Editar
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(habitacion.Id_habitacion)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

     
      <EditarHabitacionModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        habitacionId={selectedHabitacionId}
        updateHabitacionesList={updateHabitacionesList}
      />
    </div>
  );
};

export default HabitacionesList;
