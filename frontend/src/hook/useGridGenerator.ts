import { useState } from 'react';
import { ApiService } from '../service/api/api.service';

export const useGridGenerator = () => {
    const [grid, setGrid] = useState<string[][]>([]);
    const [codeSecret, setCodeSecret] = useState<string>('');
    const [biasChar, setBiasChar] = useState<string>('');
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const startGenerator = async () => {
        try {
            const initialGridWithCode = await ApiService.getGridWithCode(
                biasChar,
            );
            const { grid, code_secret } = initialGridWithCode;
            setGrid(grid);
            setCodeSecret(code_secret);
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
        codeSecret,
        isRunning,
        biasChar,
        setBiasChar,
        startGenerator,
        stopGenerator,
    };
};
