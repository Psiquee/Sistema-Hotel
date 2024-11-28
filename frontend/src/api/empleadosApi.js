import api from './api';

// obtener todos los empleados
export const getEmployees = async () => {
  try {
    const response = await api.get('/empleados'); //  obtener empleados
    return response.data; //  datos de los empleados
  } catch (error) {
    console.error('Error al obtener empleados:', error);
    throw error;
  }
};

//  crear un nuevo empleado
export const createEmployee = async (employeeData) => {
  try {
    const response = await api.post('/empleados', employeeData); // Endpoint crear empleado
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error('Error al crear empleado:', error);
    throw error;
  }
};
