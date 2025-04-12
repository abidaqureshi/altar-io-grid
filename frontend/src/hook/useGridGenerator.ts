import { useState } from 'react';
import { ApiService } from '../service/api/api.service';
import { io, Socket } from 'socket.io-client';
import { GridGeneratorProps } from '../types/grid-types';
import { message } from 'antd';

export const useGridGenerator = () => {
    const [grid, setGrid] = useState<string[][]>([]);
    const [codeSecret, setCodeSecret] = useState<string>('--');
    const [biasChar, setBiasChar] = useState<string>('');
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isBiasLoading, setIsBiasLoading] = useState<boolean>(false);
    const [lastBiasUpdate, setLastBiasUpdate] = useState<number>(0);

    const startGenerator = async () => {
        try {
            const socketConnection = io(import.meta.env.VITE_SOCKET_URL);
            setSocket(socketConnection);
            socketConnection.on('connect', () => {
                setIsLoading(true);
            });

            socketConnection.on('GRID_UPDATE', (data: GridGeneratorProps) => {
                setGrid(data.grid);
                setCodeSecret(data.code_secret);
                setIsBiasLoading(false);
            });

            socketConnection.on('error', (error) => {
                setIsLoading(false);
                message.error('Server stop unexpectedly');
                console.log('Server error:', error);
            });
            socketConnection.on('disconnect', () => {
                setIsLoading(false);
                message.error('Application is disconnected');
                console.log('Network down');
            });

            setIsRunning(true);
        } catch (error) {
            console.error('Error starting generator:', error);
        }
    };

    const stopGenerator = () => {
        socket?.disconnect();
        setIsRunning(false);
    };

    const setBiasCharacter = async (char: string) => {
        const now = Date.now();
        const timeSinceLastUpdate = now - lastBiasUpdate;

        if (timeSinceLastUpdate < 4000) {
            message.error(
                `Please wait ${Math.ceil(
                    (4000 - timeSinceLastUpdate) / 1000,
                )} more seconds before changing bias`,
            );
            return false;
        }

        const initialGridWithCode = await ApiService.getGridWithCode(char);
        const { grid, code_secret } = initialGridWithCode;
        setGrid(grid);
        setCodeSecret(code_secret);

        setBiasChar(char);
        setLastBiasUpdate(now);
        setIsBiasLoading(true);
    };

    // Fallback polling if WebSocket fails
    // useEffect(() => {
    //     if (!isRunning) return;

    //     const pollInterval = setInterval(async () => {
    //         try {
    //             const initialGridWithCode = await ApiService.getGridWithCode(
    //                 biasChar,
    //             );
    //             const { grid, code_secret } = initialGridWithCode;
    //             setGrid(grid);
    //             setCodeSecret(code_secret);
    //         } catch (error) {
    //             console.error('Polling error:', error);
    //         }
    //     }, 2100); // Slightly longer than server interval

    //     return () => clearInterval(pollInterval);
    // }, [isRunning, biasChar]);

    return {
        grid,
        codeSecret,
        isRunning,
        biasChar,
        isBiasLoading,
        isLoading,
        setBiasCharacter,
        startGenerator,
        stopGenerator,
        lastBiasUpdate,
    };
};
