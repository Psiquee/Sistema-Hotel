import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAdd from '../../hooks/useAdd';
import useEdit from '../../hooks/useEdit'; 
import { getHuespedPorId } from '../../api/huespedesApi';

const HuespedesForm = () => {
    const { id } = useParams();  
    const navigate = useNavigate();
    const [huesped, setHuesped] = useState({
        Nombre: '',
        Apellido: '',
        Direccion: '',
        Telefono: '',
        Mail: ''
    });
    const [loading, setLoading] = useState(false);

    const { addItem, error: addError } = useAdd('http://localhost:3001/api/huespedes', 'Huésped agregado correctamente');
    const { editItem, error: editError } = useEdit('http://localhost:3001/api/huespedes', 'Huésped actualizado correctamente');

    // cargo data para editar
    useEffect(() => {
        
        if (id) {
            setLoading(true);
            getHuespedPorId(id) //huesped x id
                .then((data) => {
                    setHuesped(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error al cargar el huésped:', error);
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
                await editItem(id, huesped);
            } else {
                // sino hay se crea uno nuevo
                await addItem(huesped);
            }
            setLoading(false);
            navigate('/guests');  //reedireccion
        } catch (error) {
            console.error('Error al guardar huesped:', error);
            setLoading(false);
        }
    };
    //manejo cambio
    const handleChange = (e) => {
        const { name, value } = e.target;
        setHuesped((prevHuesped) => ({
            ...prevHuesped,
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
            <h2>{id ? 'Editar Huésped' : 'Agregar Nuevo Huésped'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ color: 'white' }}>Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        value={huesped.Nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Apellido</label>
                    <input
                        type="text"
                        name="Apellido"
                        value={huesped.Apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Dirección</label>
                    <input
                        type="text"
                        name="Direccion"
                        value={huesped.Direccion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ color: 'white' }}>Teléfono</label>
                    <input
                        type="text"
                        name="Telefono"
                        value={huesped.Telefono}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label  style={{ color: 'white' }}>Email</label>
                    <input
                        type="email"
                        name="Mail"
                        value={huesped.Mail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
            </form>

            {addError && <div>{addError}</div>}
            {editError && <div>{editError}</div>}
        </div>
    );
};

export default HuespedesForm;
