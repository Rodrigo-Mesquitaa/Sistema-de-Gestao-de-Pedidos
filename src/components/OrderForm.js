import React, { useState } from 'react';
import { createOrder } from '../services/api';

const OrderForm = () => {
    const [order, setOrder] = useState({ customerId: '', orderDate: '', totalAmount: 0, status: 'Pending' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createOrder(order);
        // Adicione lógica para atualizar a lista de pedidos após a criação
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="customerId" placeholder="Customer ID" onChange={handleChange} required />
            <input type="date" name="orderDate" onChange={handleChange} required />
            <input type="number" name="totalAmount" placeholder="Total Amount" onChange={handleChange} required />
            <button type="submit">Create Order</button>
        </form>
    );
};

export default OrderForm;