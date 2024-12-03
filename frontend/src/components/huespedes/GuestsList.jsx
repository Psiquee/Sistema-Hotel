// GuestsList.jsx
import React, { useState, useEffect } from 'react';

function GuestsList() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // Aquí iría la llamada a la API para obtener los huéspedes
    // fetch('/api/guests').then(response => response.json()).then(data => setGuests(data));
    setGuests([
      { id: 100, name: 'Sofia Villa', address: 'San Fco', phone: '3564-123456', email: 'sofivilla@gmail.com' },
      { id: 101, name: 'Carlos Castro', address: 'Córdoba', phone: '351-654321', email: 'carloscastro@gmail.com' },
    ]);
  }, []);

  return (
    <div>
      <h2 id='list-title'>Lista de Huéspedes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
      
       
            <tbody>
              {guests.map(guest => (
                <tr key={guest.id}>
                  <td>{guest.id}</td>
                  <td>{guest.name}</td>
                  <td>{guest.address}</td>
                  <td>{guest.phone}</td>
                  <td>{guest.email}</td>
                </tr>
              )
              )}
            </tbody>
        
      </table>
    </div>
  );
}

export default GuestsList;
