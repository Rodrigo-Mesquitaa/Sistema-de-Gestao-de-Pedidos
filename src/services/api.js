import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // URL do seu back-end
});

export const getCustomers = () => api.get('/customers');
export const getOrders = () => api.get('/orders');
export const createCustomer = (customer) => api.post('/customers', customer);
export const createOrder = (order) => api.post('/orders', order);