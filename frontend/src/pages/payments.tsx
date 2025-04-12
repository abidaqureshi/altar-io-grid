import React, { useEffect } from 'react';
import NavLinks from '../components/NavLinks';
import { useGridContext } from '../provider/GridProvider';
import CodeSecret from '../components/CodeSecret';
import NetworkStatus from '../components/NetworkStatus';
import { Button, Input, message } from 'antd';
import { TPaymentData } from '../types/payment-types';
import { io } from 'socket.io-client';
import axios from 'axios';

const Payments = () => {
    const { codeSecret, isLoading, grid } = useGridContext();
    const [itemName, setItemName] = React.useState<string>('');
    const [itemAmount, setItemAmount] = React.useState<number>(0);
    const [paymentList, setPaymentList] = React.useState<TPaymentData[]>([]);

    useEffect(() => {
        getPaymentList();
        const socketConnection = io(
            import.meta.env.VITE_SOCKET_URL + '/payments',
        );
        socketConnection.on('connect', () => {
            console.log('Payment websocket connected');
        });
        socketConnection.on('payment-list-updated', (data: TPaymentData[]) => {
            console.log('Received payment update:', data);

            setPaymentList(data);
        });

        return () => {
            socketConnection.disconnect();
        };
    }, []);

    const getPaymentList = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/payments`,
            );
            if (response.status == 200) {
                setPaymentList(response.data);
            }
        } catch (error) {
            message.error('Failed to fetch payments');
        }
    };

    const onAddPymentHandler = async () => {
        if (itemName === '' || itemAmount <= 0) {
            message.error(
                'Please enter a valid item name and amount greater than 0.',
            );
            return;
        }
        // Here you would typically send the payment data to your backend
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/payments`,
                {
                    name: itemName,
                    amount: itemAmount,
                    code: codeSecret,
                    gridSnapshot: grid,
                },
            );
            if (response.status === 201) {
                message.success('Payment added successfully!');
                setItemName('');
                setItemAmount(0);
            } else {
                message.error('Failed to add payment.');
            }
        } catch (error) {
            message.error('Error adding payment. Please try again.');
            console.error('Error adding payment:', error);
        }
    };

    return (
        <>
            <div className="container mx-auto p-4 max-w-4xl w-full">
                <NavLinks />
                <h1 className="text-2xl font-bold mb-6">Payments</h1>
                <div className="flex justify-center w-full">
                    <NetworkStatus isLoading={isLoading} />
                </div>
                <CodeSecret codeSecret={codeSecret} />
                <div className="m-4">
                    <h2 className="text-xl font-bold mb-4">Payment History</h2>
                    <div className="container flex gap-4">
                        <div>
                            <Input
                                type="text"
                                placeholder="Item name"
                                className="mb-4"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                        </div>
                        <div className="w-30">
                            <Input
                                type="number"
                                placeholder="amout"
                                className="mb-4"
                                value={itemAmount}
                                onChange={(e) =>
                                    setItemAmount(e.target.valueAsNumber)
                                }
                            />
                        </div>
                        <div>
                            <Button
                                type="primary"
                                className="mb-4"
                                onClick={() => onAddPymentHandler()}
                            >
                                Add Payment
                            </Button>
                        </div>
                    </div>
                    {paymentList.length > 0 && (
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b w-[50%] text-left">
                                        Name
                                    </th>
                                    <th className="py-2 px-4 border-b text-right">
                                        Amount
                                    </th>
                                    <th className="py-2 px-4 border-b text-right">
                                        Code
                                    </th>
                                    <th className="py-2 px-4 border-b text-right">
                                        Grid
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example rows */}
                                {paymentList.map((paymentItem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="py-2 px-4 border-b w-[50%] text-left">
                                                {paymentItem.name}
                                            </td>
                                            <td className="py-2 px-4 border-b text-right">
                                                {paymentItem.amount}
                                            </td>
                                            <td className="py-2 px-4 border-b text-right">
                                                {paymentItem.code}
                                            </td>
                                            <td className="py-2 px-4 border-b text-right">
                                                {100}
                                            </td>
                                        </tr>
                                    );
                                })}

                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default Payments;
