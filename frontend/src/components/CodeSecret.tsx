import React from 'react';

const CodeSecret = ({ codeSecret }: { codeSecret: string }) => {
    return (
        <div className="flex justify-center mb-8">
            <div className="text-center border-1 border-gray-300 p-10">
                <h2 className="text-xl font-semibold">Live Code</h2>
                <p className="text-lg">{codeSecret}</p>
            </div>
        </div>
    );
};

export default CodeSecret;
