import { Button } from 'antd';
import { useGridGenerator } from '../hook/useGridGenerator';
import GridComponent from '../components/GridComponent';

const Home = () => {
    const {
        grid,
        startGenerator,
        stopGenerator,
        isRunning,
    } = useGridGenerator();

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Grid Generator</h1>

            <div className="flex gap-4 mb-8">
                {!isRunning ? (
                    <Button type="primary" onClick={startGenerator}>
                        Start Generator
                    </Button>
                ) : (
                    <Button danger onClick={stopGenerator}>
                        Stop Generator
                    </Button>
                )}
            </div>

            <div className="mb-8">
                <GridComponent cells={grid} />
            </div>
        </div>
    );
};

export default Home;
