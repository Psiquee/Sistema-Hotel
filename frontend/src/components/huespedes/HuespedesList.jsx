import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHuespedes } from '../../api/huespedesApi';
import EditarHuespedModal from './EditarHuespedModal'; // Corrige el import
import useLoading from '../../hooks/useLoading';
import useDelete from '../../hooks/useDelete';

const HuespedesList = () => {
  const [huespedes, setHuespedes] = useState([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedHuespedId, setSelectedHuespedId] = useState(null);
  const navigate = useNavigate();

  // cargar huespedes
  useEffect(() => {
    const fetchHuespedes = async () => {
      startLoading();
      try {
        const data = await getHuespedes();
        //console.log('huesped:', data); //trae data
        setHuespedes(data);
      } catch (error) {
        console.error('Error al cargar huéspedes:', error);
      } finally {
        stopLoading();
      }
    };
    fetchHuespedes();
  }, []);

  const { deleteItem } = useDelete('http://localhost:3001/api/huespedes', 'Huésped eliminado exitosamente');

  const handleAddHuesped = () => {
    navigate('/add-guest');
  };

  const handleEdit = (id) => {
    setSelectedHuespedId(id);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setHuespedes(huespedes.filter((huesped) => huesped?.Id_huesped !== id)); //evita error si el huesped es undef
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedHuespedId(null);
  };

  const updateHuespedInList = (updatedHuesped) => {
    setHuespedes((prev) =>
      prev.map((huesped) =>
        huesped.Id_huesped === updatedHuesped.Id_huesped ? updatedHuesped : huesped
      )
    );
  };

  return (
    <div>
      <h2 id="list-title">Lista de Huéspedes</h2>
      <button className="add-button" onClick={handleAddHuesped}>
        Agregar Huésped
      </button>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : huespedes.length === 0 ? (
        <p>No hay huéspedes registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {huespedes.map((huesped) => (
              huesped && huesped.Id_huesped ? ( //corroboro que exista el huesped
                <tr key={huesped.Id_huesped}>
                  <td>{huesped.Id_huesped}</td>
                  <td>{huesped.Nombre}</td>
                  <td>{huesped.Direccion}</td>
                  <td>{huesped.Telefono}</td>
                  <td>{huesped.Mail}</td>
                  <td>
                    <button onClick={() => handleEdit(huesped.Id_huesped)}>Editar</button>
                    <button onClick={() => handleDelete(huesped.Id_huesped)}>Eliminar</button>
                  </td>
                </tr>
              ) : null // si no tiene id no undefin
            ))}
          </tbody>
        </table>
      )}
      {showEditModal && (
        <EditarHuespedModal
          show={showEditModal}
          handleClose={closeEditModal}
          huespedId={selectedHuespedId}
          updateHuespedList={updateHuespedInList}
        />
      )}
    </div>
  );
};

export default HuespedesList;
