//frontend/src/api/empleadosApi.js
// api/empleadosApi.js
import axios from 'axios';

// Base URL de la API
const API_URL = 'http://localhost:5000/api';

// Obtener todos los empleados
export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/empleados`);
    return response.data; // Retorna los datos de los empleados
  } catch (error) {
    console.error('Error al obtener empleados:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Obtener un empleado por su ID
export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/empleados/${id}`);
    return response.data; // Retorna los datos del empleado específico
  } catch (error) {
    console.error(`Error al obtener el empleado con ID ${id}:`, error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Crear un nuevo empleado
export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/empleados`, employeeData);
    return response.data; // Retorna los datos del nuevo empleado
  } catch (error) {
    console.error('Error al crear empleado:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Actualizar un empleado existente
export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/empleados/${id}`, employeeData);
    return response.data; // Retorna los datos del empleado actualizado
  } catch (error) {
    console.error(`Error al actualizar el empleado con ID ${id}:`, error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Eliminar un empleado por su ID
export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/empleados/${id}`);
    return response.data; // Retorna la respuesta después de eliminar al empleado
  } catch (error) {
    console.error(`Error al eliminar el empleado con ID ${id}:`, error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
