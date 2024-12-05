import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../../api/empleadosApi';
import axios from 'axios';
import '../empleados/Empleados.css';

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
            } finally {
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);


    const handleEdit = (id) => {
        navigate(`/add-employee?id=${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este empleado?');
        if (confirmDelete) {
            setLoading(true);
            try {
                await axios.delete(`http://localhost:3001/api/empleados/${id}`);
                setEmployees(employees.filter((employee) => employee.Id_empleado !== id));
                alert('Empleado eliminado correctamente.');
            } catch (error) {
                console.error('Error al eliminar el empleado:', error);
                alert('Error al eliminar el empleado.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container mt-5 px-2">

            <div className="mb-2 d-flex justify-content-between align-items-center">
                <h2 className="list-title">
                    <i class="fas fa-users me-2"></i>
                    Lista de Empleados
                </h2>
            </div>

            {loading ? (
                <p className="text-center">⏳ Cargando empleados...</p>
            ) : employees.length === 0 ? (
                <p className="text-center">🚫 No hay empleados registrados.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="5%">#</th>
                                <th scope="col" className="text-truncate" width="20%">Nombre</th>
                                <th scope="col" className="text-truncate" width="20%">Apellido</th>
                                <th scope="col" className="text-truncate" width="20%">Cargo</th>
                                <th scope="col" className="text-truncate" width="15%">Teléfono</th>
                                <th scope="col" className="text-truncate" width="20%">Email</th>
                                <th scope="col" width="20%" className="text-end text-truncate">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={employee.Id_empleado}>
                                    <td data-label="#"> {index + 1} </td>
                                    <td data-label="Nombre"> {employee.Nombre} </td>
                                    <td data-label="Apellido"> {employee.Apellido} </td>
                                    <td data-label="Cargo"> {employee.Cargo} </td>
                                    <td data-label="Teléfono"> {employee.Telefono} </td>
                                    <td data-label="Email" className="text-truncate"> {employee.Email} </td>
                                    <td data-label="Acciones" className="text-end">
                                        <div className="btn-group" role="group" aria-label="Acciones">
                                            <button
                                                className="btn btn-sm btn-warning edit-button"
                                                onClick={() => handleEdit(employee.Id_empleado)}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger delete-button"
                                                onClick={() => handleDelete(employee.Id_empleado)}
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
};

export default EmployeesList;

