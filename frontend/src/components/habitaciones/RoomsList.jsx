import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../habitaciones/Habitaciones.css'; // Asegúrate de tener este archivo de estilos

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Datos simulados de habitaciones
    setRooms([
      { idHabitacion: 1, numHabitacion: '101', tipoHabitacion: 'Individual', precioNoche: '50 USD', estado: 'Disponible' },
      { idHabitacion: 2, numHabitacion: '102', tipoHabitacion: 'Doble', precioNoche: '80 USD', estado: 'Ocupada' },
      { idHabitacion: 3, numHabitacion: '103', tipoHabitacion: 'Suite', precioNoche: '150 USD', estado: 'Disponible' },
      { idHabitacion: 4, numHabitacion: '104', tipoHabitacion: 'Individual', precioNoche: '55 USD', estado: 'Ocupada' },
    ]);
    setLoading(false);
  }, []);



  const handleEdit = (id) => {
    navigate(`/add-room?id=${id}`); // Redirige a un formulario de edición con el id de la habitación
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta habitación?');
    if (confirmDelete) {
      setLoading(true);
      try {
        // Simula la eliminación de la habitación
        setRooms(rooms.filter((room) => room.idHabitacion !== id));
        alert('Habitación eliminada correctamente.');
      } catch (error) {
        console.error('Error al eliminar la habitación:', error);
        alert('Error al eliminar la habitación.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mt-5 px-2">
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <h2 className="list-title">
          <i className="fas fa-bed me-2"></i> Lista de Habitaciones
        </h2>
       </div>

      {loading ? (
        <p className="text-center">⏳ Cargando habitaciones...</p>
      ) : rooms.length === 0 ? (
        <p className="text-center">🚫 No hay habitaciones registradas.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col" width="10%">Número</th>
                <th scope="col" width="20%">Tipo</th>
                <th scope="col" width="25%">Precio por Noche</th>
                <th scope="col" width="20%">Estado</th>
                <th scope="col" width="25%" className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.idHabitacion}>
                  <td>{room.numHabitacion}</td>
                  <td>{room.tipoHabitacion}</td>
                  <td>{room.precioNoche}</td>
                  <td>{room.estado}</td>
                  <td className="text-end">
                    <div className="btn-group" role="group" aria-label="Acciones">
                      <button
                        className="btn btn-sm btn-warning edit-button"
                        onClick={() => handleEdit(room.idHabitacion)}
                      >
                        <i className="fas fa-edit"></i> {/* Ícono de editar */}
                      </button>
                      <button
                        className="btn btn-sm btn-danger delete-button"
                        onClick={() => handleDelete(room.idHabitacion)}
                      >
                        <i className="fas fa-trash-alt"></i> {/* Ícono de eliminar */}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RoomsList;




