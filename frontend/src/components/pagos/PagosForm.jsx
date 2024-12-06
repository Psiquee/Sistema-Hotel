import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdd from "../../hooks/useAdd";
import useEdit from "../../hooks/useEdit";
import { getPagoPorId } from "../../api/pagosApi";
import '../../styles/Pagos.css';

const PagosForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Id_reserva: "",
    Fecha_pago: "",
    Monto_pago: "",
    Metodo_pago: "EFECTIVO",
    Id_empleado: "",
  });
  const [loading, setLoading] = useState(false);

  const { addItem } = useAdd(
    "http://localhost:3001/api/pagos",
    "Pago agregado correctamente"
  );
  const { editItem } = useEdit(
    "http://localhost:3001/api/pagos",
    "Pago actualizado correctamente"
  );

  // editar si el id existe
  useEffect(() => {
    if (id) {
      setLoading(true);
      getPagoPorId(id) // carga pago x id
        .then((data) => {
          setFormData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error al cargar el pago:", err);
          setLoading(false);
        });
    }
  }, [id]);

  // cambios de camposw form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    formData.Monto_pago = parseFloat(formData.Monto_pago); // montoPago a num

    try {
      if (id) {
        await editItem(id, formData); //  formData para editar
      }
      else {
        await addItem(formData); //  formData para agregar
      }
      setLoading(false);
      navigate("/payments"); // redirige
    }
    catch (error) {
      console.error("Error al guardar el pago:", error);
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    );

  return (

   
      <form id="form-pagos" onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">{id ? "Editar Pago" : "Agregar Nuevo Pago"}
        <i className="fas fa-money-bill-wave me-2"></i> Agregar Nuevo Pago
      </h2>

        <div>
          <label>Id Reserva</label>
          <input
            type="text"
            name="Id_reserva"
            value={formData.Id_reserva}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fecha Pago</label>
          <input
            type="date"
            name="Fecha_pago"
            value={formData.Fecha_pago}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Monto Pago</label>
          <input
            type="number"
            name="Monto_pago"
            value={formData.Monto_pago}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Método de Pago</label>
          <select
            name="Metodo_pago"
            value={formData.Metodo_pago}
            onChange={handleChange}
          >
            <option value="EFECTIVO">Efectivo</option>
            <option value="DÉBITO">Débito</option>
            <option value="TRANSFERENCIA">Transferencia</option>
          </select>
        </div>
        <div>
          <label>Id Empleado</label>
          <input
            type="text"
            name="Id_empleado"
            value={formData.Id_empleado}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="button-container">
        <button type="submit">{id ? "Actualizar" : "Agregar"}</button>
        </div>
      
      </form>

  );
};

export default PagosForm;
