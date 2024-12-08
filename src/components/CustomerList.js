import React, { useEffect, useState } from 'react';
import { getCustomers } from '../services/api';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await getCustomers();
            setCustomers(response.data);
        };
        fetchCustomers();
    }, []);

    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;