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
      <h2>Lista de Huéspedes</h2>
      <ul>
        {guests.map(guest => (
          <li key={guest.id}>
            {guest.name} - {guest.address} - {guest.phone} - {guest.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestsList;
