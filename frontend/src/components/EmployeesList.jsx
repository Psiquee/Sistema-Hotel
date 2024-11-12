// EmployeesList.jsx
import React, { useEffect, useState } from 'react';

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Aquí simula una API para traer los datos de la tabla EMPLEADOS
    // En el futuro aquí llamaremos a un backend real.
    setEmployees([
      { id: 500, nombre: 'Juan', apellido: 'Romero', cargo: 'Recepcionista', telefono: '3564586947', email: 'juanrom@live.com' },
      { id: 501, nombre: 'César', apellido: 'Bustos', cargo: 'Conserje', telefono: '3564123456', email: 'cesar@outlook.com' },
      { id: 502, nombre: 'Rosana', apellido: 'Cabrera', cargo: 'Mucama', telefono: '3564808586', email: 'rosanac@gmail.com' }
    ]);
  }, []);

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.nombre}</td>
              <td>{employee.apellido}</td>
              <td>{employee.cargo}</td>
              <td>{employee.telefono}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
