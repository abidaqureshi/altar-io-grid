import React from 'react';
import NavLinks from '../components/NavLinks';
import { useGridContext } from '../provider/GridProvider';
import CodeSecret from '../components/CodeSecret';

const Payments = () => {
    const { codeSecret } = useGridContext();
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <NavLinks />
            <h1 className="text-2xl font-bold mb-6">Payments</h1>
            <CodeSecret codeSecret={codeSecret} />
        </div>
    );
};

export default Payments;
