import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Cambié useHistory por useNavigate
import '../habitaciones/Habitaciones.css';

function RoomForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    numHabitacion: '',
    tipoHabitacion: 'Simple',
    precioNoche: '',
    estado: 'Disponible',
  });

  const { roomId } = useParams(); // Usamos el parámetro para obtener el ID de la habitación
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  // Efecto para cargar los datos de la habitación en caso de que sea un formulario de edición
  useEffect(() => {
    if (roomId) {
      // Si estamos editando, simulamos la carga de los datos
      const room = {
        idHabitacion: roomId,
        numHabitacion: 20,
        tipoHabitacion: 'Doble',
        precioNoche: 15000,
        estado: 'Ocupada',
      };
      setFormData(room);
    }
  }, [roomId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la habitación:', formData);
    if (onSubmit) onSubmit(formData);
    navigate('/habitaciones');  // Redirigir al listado de habitaciones
  };

  return (
    <form id="form-habitaciones" onSubmit={handleSubmit}>
      <h2 id="form-title">
        <i className="fas fa-bed me-2"></i> {roomId ? 'Editar Habitación' : 'Agregar Nueva Habitación'}
      </h2>
      <div>
        <label htmlFor="numHabitacion">Número de Habitación</label>
        <input
          type="number"
          id="numHabitacion"
          name="numHabitacion"
          placeholder="Número de Habitación"
          value={formData.numHabitacion}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="tipoHabitacion">Tipo de Habitación</label>
        <select
          id="tipoHabitacion"
          name="tipoHabitacion"
          value={formData.tipoHabitacion}
          onChange={handleChange}
        >
          <option value="Simple">Simple</option>
          <option value="Doble">Doble</option>
          <option value="Suite">Suite</option>
          <option value="Familiar">Familiar</option>
        </select>
      </div>
      <div>
        <label htmlFor="precioNoche">Precio por Noche</label>
        <input
          type="number"
          id="precioNoche"
          name="precioNoche"
          placeholder="Precio por Noche"
          value={formData.precioNoche}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="estado">Estado</label>
        <select
          id="estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
        >
          <option value="Disponible">Disponible</option>
          <option value="Ocupada">Ocupada</option>
          <option value="A confirmar">A confirmar</option>
        </select>
      </div>
      <button type="submit">{roomId ? 'Actualizar Habitación' : 'Agregar Habitación'}</button>
    </form>
  );
}

export default RoomForm;


