import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getOrders();
            setOrders(response.data);
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order ID: {order.id} - Total: {order.totalAmount} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;