import { Button, Input } from 'antd';
import { useGridGenerator } from '../hook/useGridGenerator';
import GridComponent from '../components/GridComponent';

const Home = () => {
    const {
        grid,
        codeSecret,
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
                <div className="flex justify-center mb-4">
                    <div>Character</div>
                    <Input
                        type="text"
                        minLength={1}
                        maxLength={1}
                        className="w-16 mx-2"
                    />
                </div>
                <GridComponent cells={grid} />
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold">Code Secret:</h2>
                <p className="text-lg">{codeSecret}</p>
            </div>
        </div>
    );
};

export default Home;
