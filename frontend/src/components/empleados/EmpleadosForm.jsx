
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAdd from '../../hooks/useAdd';  
import useEdit from '../../hooks/useEdit'; 
import { getEmployeeById } from '../../api/empleadosApi'; 

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
    const { addItem,  error: addError } = useAdd('http://localhost:3001/api/empleados', 'Empleado agregado correctamente');
    const { editItem,  error: editError } = useEdit('http://localhost:3001/api/empleados', 'Empleado actualizado correctamente');

  
    
    useEffect(() => {
        if (id) {  //si el id coincide se habilita edicion
            setLoading(true);
            getEmployeeById(id)
                .then((data) => {
                    setEmployee(data);  //relleno campo
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error al cargar el empleado:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    //envio
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (id) {
                // si coincide id edit
                await editItem(id, employee);
            } else {
                // sino hay se crea uno nuevo
                await addItem(employee);
            }
            setLoading(false);
            navigate('/employees');  //reedireccion
        } catch (error) {
            console.error('Error al guardar el empleado:', error);
            setLoading(false);
        }
    };

    //manejo  cambios
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    
    if (loading) return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      );
      

    return (
        <div>
            <h2 id='list-title'>Datos del Empleado</h2>
            <form id='form-employees ' onSubmit={handleSubmit}>
                <div>
                    <label style={{ color: 'white' }}>Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        value={employee.Nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Apellido</label>
                    <input
                        type="text"
                        name="Apellido"
                        value={employee.Apellido}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Cargo</label>
                    <input
                        type="text"
                        name="Cargo"
                        value={employee.Cargo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Teléfono</label>
                    <input
                        type="text"
                        name="Telefono"
                        value={employee.Telefono}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={employee.Email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
            </form>

            {addError && <div>{addError}</div>}
            {editError && <div>{editError}</div>}
        </div>
    );
};

export default EmpleadosForm;


