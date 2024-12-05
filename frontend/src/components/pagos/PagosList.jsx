import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPagos } from '../../api/pagosApi';
import EditarPagoModal from './EditarPagoModal'; 
import useLoading from '../../hooks/useLoading'; 
import useDelete from '../../hooks/useDelete'; 

const PagosList = () => {
  const [pagos, setPagos] = useState([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPagoId, setSelectedPagoId] = useState(null);
  const navigate = useNavigate();

  // Cargar pagos
  useEffect(() => {
    const fetchPagos = async () => {
      startLoading();
      try {
        const data = await getPagos();
        setPagos(data);
      } catch (error) {
        console.error('Error al cargar pagos:', error);
      } finally {
        stopLoading();
      }
    };
    fetchPagos();
  }, []);

  const { deleteItem } = useDelete(
    'http://localhost:3001/api/pagos',
    'Pago eliminado exitosamente'
  );

  const handleAddPago = () => {
    navigate('/add-payment');
  };

  const handleEdit = (id) => {
    setSelectedPagoId(id);
    setShowEditModal(true); 
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setPagos(pagos.filter((pago) => pago.Id_pago !== id)); 
  };

  const updatePagosList = () => {
    const fetchPagos = async () => {
      startLoading();
      try {
        const data = await getPagos();
        setPagos(data);
      } catch (error) {
        console.error('Error al cargar pagos:', error);
      } finally {
        stopLoading();
      }
    };
    fetchPagos();
  };

  return (
    <div>
      <h2 id="list-title">Lista de Pagos</h2>
      <button className="add-button" onClick={handleAddPago}>
        Agregar Pago
      </button>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : pagos.length === 0 ? (
        <p>No hay pagos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID Reserva</th>
              <th>Fecha Pago</th>
              <th>Monto Pago</th>
              <th>Método Pago</th>
              <th>ID Empleado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((pago) => (
              <tr key={pago.Id_pago}>
                <td>{pago.Id_reserva}</td>
                <td>{pago.Fecha_pago}</td>
                <td>{pago.Monto_pago}</td>
                <td>{pago.Metodo_pago}</td>
                <td>{pago.Id_empleado}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(pago.Id_pago)}
                  >
                    Editar
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(pago.Id_pago)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      
      <EditarPagoModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        pagoId={selectedPagoId}
        updatePagosList={updatePagosList}
      />
    </div>
  );
};

export default PagosList;
