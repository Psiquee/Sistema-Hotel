import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../../api/empleadosApi';
import axios from 'axios';

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error al cargar empleados:', error);
                //alert('No se pudieron cargar los empleados.');
            } finally {
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);

    const handleAddEmployee = () => {
        navigate('/add-employee');
    };

    const handleEdit = (id) => {
        navigate(`/add-employee?id=${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este empleado?');
        if (confirmDelete) {
            setLoading(true); // Muestra un indicador de carga mientras elimina
            try {
                await axios.delete(`http://localhost:3001/api/empleados/${id}`);
                setEmployees(employees.filter((employee) => employee.Id_empleado !== id));
                alert('Empleado eliminado correctamente.');
            } catch (error) {
                console.error('Error al eliminar el empleado:', error);
                alert('Error al eliminar el empleado.');
            } finally {
                setLoading(false); // Oculta el indicador de carga una vez completado
            }
        }
    };

    return (
        <div>
            <h2 id="list-title">Lista de Empleados</h2>
            <button className="add-button" onClick={handleAddEmployee}>
                Agregar Empleado
            </button>
            {loading ? (
                <p>Cargando empleados...</p>
            ) : employees.length === 0 ? (
                <p>No hay empleados registrados.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cargo</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.Id_empleado}>
                                <td>{employee.Id_empleado}</td>
                                <td>{employee.Nombre}</td>
                                <td>{employee.Apellido}</td>
                                <td>{employee.Cargo}</td>
                                <td>{employee.Telefono}</td>
                                <td>{employee.Email}</td>
                                <td>
                                    <button
                                        className="edit-button"
                                        onClick={() => handleEdit(employee.Id_empleado)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDelete(employee.Id_empleado)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EmployeesList;
