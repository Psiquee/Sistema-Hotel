import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAdd from '../../hooks/useAdd';
import useEdit from '../../hooks/useEdit';
import { getEmployeeById } from '../../api/empleadosApi';
import '../../styles/Empleados.css';

const EmpleadosForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        Nombre: '',
        Apellido: '',
        Cargo: '',
        Telefono: '',
        Email: ''
    });
    const [loading, setLoading] = useState(false);
    const { addItem, error: addError } = useAdd('http://localhost:3001/api/empleados', 'Empleado agregado correctamente');
    const { editItem, error: editError } = useEdit('http://localhost:3001/api/empleados', 'Empleado actualizado correctamente');

    useEffect(() => {
        if (id) { // Si el id coincide se habilita edición
            setLoading(true);
            getEmployeeById(id)
                .then((data) => {
                    setEmployee(data); // Rellenar campos
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error al cargar el empleado:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (id) {
                // Si coincide id, editar
                await editItem(id, employee);
            } else {
                // Si no hay id, crear uno nuevo
                await addItem(employee);
            }
            setLoading(false);
            navigate('/employees'); // Redirección
        } catch (error) {
            console.error('Error al guardar el empleado:', error);
            setLoading(false);
        }
    };

    // Manejo de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    if (loading)
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        );

    return (
        <div>
            <form id="form-employees" onSubmit={handleSubmit}>
                <h2 id="list-title">{id ? 'Editar Empleado' : 'Agregar Nuevo Empleado'}</h2>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        placeholder="Nombre"
                        value={employee.Nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="Apellido"
                        placeholder="Apellido"
                        value={employee.Apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Cargo</label>
                    <input
                        type="text"
                        name="Cargo"
                        placeholder="Cargo"
                        value={employee.Cargo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="Telefono"
                        placeholder="Teléfono"
                        value={employee.Telefono}
                        onChange={handleChange}
                    />
                </div>
                <div className="email-container">
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={employee.Email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="button-container">
                    <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
                </div>
            </form>

            {addError && <div className="alert alert-danger">{addError}</div>}
            {editError && <div className="alert alert-danger">{editError}</div>}
        </div>
    );
};

export default EmpleadosForm;




