import { useState } from 'react';
import { ApiService } from '../service/api/api.service';

export const useGridGenerator = () => {
    const [grid, setGrid] = useState<string[][]>([]);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const startGenerator = async () => {
        try {
            const initialGrid = await ApiService.getGrid();
            setGrid(initialGrid);
            setIsRunning(true);
        } catch (error) {
            console.error('Error starting generator:', error);
        }
    };

    const stopGenerator = () => {
        setIsRunning(false);
    };

    return {
        grid,
        isRunning,
        startGenerator,
        stopGenerator,
    };
};
