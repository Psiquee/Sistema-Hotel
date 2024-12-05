import React, { useState, useEffect } from 'react';
import '../pagos/Pagos.css';

function PaymentsList() {
  const [payments, setPayments] = useState([]);
  const [editingPayment, setEditingPayment] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Simulamos datos de pagos
    setPayments([
      {
        idPago: 20,
        idReserva: 50,
        fechaPago: '2024-10-18',
        montoPago: 30000,
        metodoPago: 'EFECTIVO',
        idEmpleado: 501
      },
      {
        idPago: 21,
        idReserva: 51,
        fechaPago: '2024-10-20',
        montoPago: 40000,
        metodoPago: 'DÉBITO',
        idEmpleado: 501
      },
    ]);
  }, []);

  const handleDelete = (idPago) => {
    setPayments(payments.filter((payment) => payment.idPago !== idPago));
  };

  const handleEdit = (payment) => {
    setEditingPayment(payment);
    setEditing(true); // Activa el modo de edición
  };

  const handleCancelEdit = () => {
    setEditingPayment(null);
    setEditing(false); // Desactiva el modo de edición
  };

  return (
    <div className="container">
      <h2 id="list-title">
        <i className="fas fa-money-bill-wave me-2"></i> Lista de Pagos
      </h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Id Reserva</th>
              <th>Fecha Pago</th>
              <th>Monto Pago</th>
              <th>Método Pago</th>
              <th>Id Empleado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.idPago}>
                <td>{payment.idReserva}</td>
                <td>{payment.fechaPago}</td>
                <td>{payment.montoPago}</td>
                <td>{payment.metodoPago}</td>
                <td>{payment.idEmpleado}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning edit-button"
                    onClick={() => handleEdit(payment)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger delete-button"
                    onClick={() => handleDelete(payment.idPago)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div id="form-reservas">
          <h3>Editar Pago</h3>
          <form>
            <div>
              <label>Id Reserva:</label>
              <input
                type="text"
                value={editingPayment.idReserva}
                readOnly
              />
            </div>
            <div>
              <label>Fecha Pago:</label>
              <input
                type="date"
                value={editingPayment.fechaPago}
                onChange={(e) =>
                  setEditingPayment({ ...editingPayment, fechaPago: e.target.value })
                }
              />
            </div>
            <div>
              <label>Monto Pago:</label>
              <input
                type="number"
                value={editingPayment.montoPago}
                onChange={(e) =>
                  setEditingPayment({ ...editingPayment, montoPago: e.target.value })
                }
              />
            </div>
            <div>
              <label>Método Pago:</label>
              <select
                value={editingPayment.metodoPago}
                onChange={(e) =>
                  setEditingPayment({ ...editingPayment, metodoPago: e.target.value })
                }
              >
                <option value="EFECTIVO">EFECTIVO</option>
                <option value="DÉBITO">DÉBITO</option>
                <option value="CRÉDITO">CRÉDITO</option>
              </select>
            </div>
            <div>
              <label>Id Empleado:</label>
              <input
                type="number"
                value={editingPayment.idEmpleado}
                readOnly
              />
            </div>
            <div className="button-container">
              <button
                type="button"
                onClick={() => {
                  setPayments((prev) =>
                    prev.map((p) =>
                      p.idPago === editingPayment.idPago ? editingPayment : p
                    )
                  );
                  setEditing(false); // Desactiva el modo de edición
                  setEditingPayment(null); // Limpia el estado
                }}
              >
                Guardar
              </button>
              <button type="button" onClick={handleCancelEdit}>
                Cancelar
              </button>
            </div>
          </form>
        </div>

      )}
    </div>
  );
}

export default PaymentsList;



