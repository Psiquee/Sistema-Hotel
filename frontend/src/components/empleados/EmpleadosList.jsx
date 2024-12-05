import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../../api/empleadosApi';
import EditarEmpleadoModal from './EditarEmpleadoModal';
import useLoading from '../../hooks/useLoading';  // Importar el hook de carga
import useDelete from '../../hooks/useDelete';  
import '../../styles/Empleados.css';



const EmpleadosList = () => {
    const [employees, setEmployees] = useState([]);
    const { loading, startLoading, stopLoading } = useLoading();  
    const [showEditModal, setShowEditModal] = useState(false); 
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null); // almaceno el id del seleccionado
    const navigate = useNavigate();

    // usamos hook para obtener empleados
    useEffect(() => {
        const fetchEmployees = async () => {
            startLoading(); 
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error al cargar empleados:', error);
            } finally {
                stopLoading(); 
            }
        };
        fetchEmployees();
    }, []);

    const { deleteItem } = useDelete('http://localhost:3001/api/empleados', 'Empleado eliminado exitosamente');

    const handleAddEmployee = () => {
        navigate('/add-employee');
    };

    const handleEdit = (id) => {
        setSelectedEmployeeId(id);
        setShowEditModal(true);
    };

    const handleDelete = async (id) => {
        await deleteItem(id); //  hook para eliminar
        setEmployees(employees.filter((employee) => employee.Id_empleado !== id)); // actualizamos
    };

    // funcion actualizar
    const updateEmployeeList = () => {
        const fetchEmployees = async () => {
            startLoading();  
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error al cargar empleados:', error);
            } finally {
                stopLoading();  
            }
        };
        fetchEmployees();
    };

    return (
        <div>
            <h2 id="list-title">Lista de Empleados</h2>
            <button className="add-button" onClick={handleAddEmployee}>
                Agregar Empleado
            </button>
            {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
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

            {/* Modal de Edición */}
            <EditarEmpleadoModal
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                employeeId={selectedEmployeeId}
                updateEmployeeList={updateEmployeeList}
            />
        </div>
    );
};

export default EmpleadosList;
