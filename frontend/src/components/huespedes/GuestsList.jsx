import React, { useState, useEffect } from 'react';
import '../huespedes/Huespedes.css';

function GuestsList() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    
    setGuests([
      { id: 100, name: 'Sofia', lastName: ' Villa', address: 'San Fco', phone: '3564-123456', email: 'sofivilla@gmail.com' },
      { id: 101, name: 'Carlos', lastName: ' Castro', address: 'Córdoba', phone: '351-654321', email: 'carloscastro@gmail.com' },
    ]);
  }, []);


  const handleEdit = (id) => {
    alert(`Editar huésped con ID: ${id}`);
    // Aquí iría la lógica para abrir un formulario de edición
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este huésped?');
    if (confirmDelete) {
      setGuests((prevGuests) => prevGuests.filter((guest) => guest.id !== id));
      alert(`Huésped con ID: ${id} eliminado.`);
    }
  };

  return (
    <div className="container mt-5 px-2">

      <div className="mb-2 d-flex justify-content-between align-items-center">
        <h2 className="list-title">
          <i className="fas fa-user-friends me-2"></i> Lista de Huéspedes
        </h2>
      </div>

      {guests.length === 0 ? (
        <p className="text-center">🚫 No hay huéspedes registrados.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col" width="5%">ID</th>
                <th scope="col" width="10%">Nombre</th>
                <th scope='col' width="10">Apellido</th>
                <th scope="col" width="20%">Dirección</th>
                <th scope="col" width="15%">Teléfono</th>
                <th scope="col" width="25%">Email</th>
                <th scope="col" width="15%" className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.id}>
                  <td data-label="ID">{guest.id}</td>
                  <td data-label="Nombre">{guest.name}</td>
                  <td data-label="Apellido">{guest.lastName}</td>
                  <td data-label="Dirección">{guest.address}</td>
                  <td data-label="Teléfono">{guest.phone}</td>
                  <td data-label="Email">{guest.email}</td>
                  <td data-label="Acciones" className="text-end">
                    <div className="btn-group" role="group" aria-label="Acciones">
                      <button
                        className="btn btn-sm btn-warning edit-button"
                        onClick={() => handleEdit(guest.id)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger delete-button"
                        onClick={() => handleDelete(guest.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
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
}

export default GuestsList;

