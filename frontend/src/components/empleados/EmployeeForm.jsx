//frontend/src/components/empleados/ EmployeeForm.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee, createEmployee } from '../../api/empleadosApi'; 

const EmployeeForm = () => {
    const { id } = useParams();  // Este 'id' es de la URL
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        Nombre: '',
        Apellido: '',
        Cargo: '',
        Telefono: '',
        Email: ''
    });
    const [loading, setLoading] = useState(false);

    // Cargar datos del empleado si existe el id en la URL (editando un empleado)
    useEffect(() => {
        if (id) {  // Si el id existe, significa que estamos en el modo de edición
            setLoading(true);
            getEmployeeById(id)
                .then((data) => {
                    setEmployee(data);  // Rellenar los campos con los datos del empleado
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error al cargar el empleado:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (id) {
                // Si hay un id, significa que estamos actualizando
                await updateEmployee(id, employee);
            } else {
                // Si no hay id, significa que estamos creando un nuevo empleado
                await createEmployee(employee);
            }
            setLoading(false);
            navigate('/employees');  // Redirigir a la lista de empleados después de guardar
        } catch (error) {
            console.error('Error al guardar el empleado:', error);
            setLoading(false);
        }
    };

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    // Mostrar un mensaje de carga mientras obtenemos los datos del empleado
    if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <h2 id='list-title'>Datos del Empleado</h2>
            <form id='form-employees' onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        value={employee.Nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="Apellido"
                        value={employee.Apellido}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cargo</label>
                    <input
                        type="text"
                        name="Cargo"
                        value={employee.Cargo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="Telefono"
                        value={employee.Telefono}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={employee.Email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;




