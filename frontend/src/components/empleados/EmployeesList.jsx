//EmployeesList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar los empleados desde la API
    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const response = await axios.get('/api/empleados');
                setEmpleados(response.data); // Guardar los empleados en el estado
                setLoading(false); // Termina de cargar
            } catch (error) {
                console.error('Error al cargar los empleados', error);
                setLoading(false); // Termina de cargar
            }
        };

        fetchEmpleados();
    }, []);

    const eliminarEmpleado = async (id_empleado) => {
        try {
            await axios.delete(`/api/empleados/${id_empleado}`);
            // Filtrar el empleado eliminado de la lista
            setEmpleados(empleados.filter(empleado => empleado.id_empleado !== id_empleado));
            console.log(`Empleado con ID ${id_empleado} eliminado con éxito`);
        } catch (error) {
            console.error('Error al eliminar el empleado', error.response || error.message);
        }
    };

    if (loading) {
        return <div>Cargando empleados...</div>;
    }

    return (
        <div>
            <h2>Lista de Empleados</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) => (
                        <tr key={empleado.id_empleado}>
                            <td>{empleado.id_empleado}</td>
                            <td>{empleado.nombre} {empleado.apellido}</td>
                            <td>{empleado.cargo}</td>
                            <td>
                                <button onClick={() => eliminarEmpleado(empleado.id_empleado)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmpleados;
