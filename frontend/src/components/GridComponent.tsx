import React from 'react';
import { GridProps } from '../types/grid-types';

const GridComponent: React.FC<GridProps> = ({ cells }) => {
    return (
        <div className="grid grid-cols-10 gap-1">
            {cells.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                        <div
                            key={`cell-${rowIndex}-${colIndex}`}
                            className="w-10 h-10 flex items-center justify-center border border-gray-300"
                        >
                            {cell}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
export default GridComponent;
