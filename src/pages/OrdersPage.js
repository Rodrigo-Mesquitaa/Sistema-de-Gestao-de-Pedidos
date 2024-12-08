import React from 'react';
import OrderList from '../components/OrderList';
import OrderForm from '../components/OrderForm';

const OrdersPage = () => {
    return (
        <div>
            <h1>Manage Orders</h1>
            <OrderForm />
            <OrderList />
        </div>
    );
};

export default OrdersPage;