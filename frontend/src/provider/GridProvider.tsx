import { createContext, ReactNode, useContext } from 'react';
import { useGridGenerator } from '../hook/useGridGenerator';

type ContextPropTypes = {
    grid: string[][]; // 2D array of strings representing the grid cells
    codeSecret: string; // Secret code for the grid
    isRunning: boolean; // Indicates if the generator is running
    biasChar: string; // Character used for biasing the grid
    lastBiasUpdate: number; // Timestamp of the last bias update
    isBiasLoading: boolean; // Indicates if bias loading is in progress
    isLoading: boolean; // Indicates if data is loading
    startGenerator: () => void; // Function to start the generator
    stopGenerator: () => void; // Function to stop the generator
    setBiasCharacter: (value: string) => void; // Function to set the bias character
};

const GridContext = createContext<ContextPropTypes>({
    grid: [],
    codeSecret: '--',
    isRunning: false,
    biasChar: '',
    lastBiasUpdate: 0,
    isBiasLoading: false,
    isLoading: false,
    startGenerator: () => {},
    stopGenerator: () => {},
    setBiasCharacter: (value: string) => {},
});

export function GridProvider({ children }: { children: ReactNode }) {
    const {
        grid,
        codeSecret,
        isRunning,
        biasChar,
        lastBiasUpdate,
        isBiasLoading,
        isLoading,
        startGenerator,
        stopGenerator,
        setBiasCharacter,
    } = useGridGenerator();

    return (
        <GridContext.Provider
            value={{
                grid,
                codeSecret,
                isRunning,
                biasChar,
                lastBiasUpdate,
                isBiasLoading,
                isLoading,
                startGenerator,
                stopGenerator,
                setBiasCharacter,
            }}
        >
            {children}
        </GridContext.Provider>
    );
}

export const useGridContext = () => {
    const context = useContext(GridContext);
    if (!context) {
        throw new Error('useGridContext must be used within a GridProvider');
    }
    return context;
};
