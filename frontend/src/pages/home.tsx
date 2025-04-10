import { Button, Input, message } from 'antd';
import { useGridGenerator } from '../hook/useGridGenerator';
import GridComponent from '../components/GridComponent';

const Home = () => {
    const {
        grid,
        codeSecret,
        isRunning,
        biasChar,
        startGenerator,
        stopGenerator,
        setBiasChar,
    } = useGridGenerator();

    const aplhabetInputHandler = (value: string) => {
        const re = /^[a-z]$/;
        if (value == '' || re.test(value)) {
            setBiasChar(value);
        } else {
            message.info(
                'Please enter a valid character (a-z) or leave it empty.',
            );
            return;
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Grid Generator</h1>
            <div className="flex justify-between">
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
                <div className="flex flex-col justify-center mb-4">
                    <div>Character</div>
                    <div>
                        <Input
                            type="text"
                            minLength={1}
                            maxLength={1}
                            value={biasChar}
                            className="w-5 mx-2"
                            style={{ width: '100px' }}
                            onChange={(e) =>
                                aplhabetInputHandler(e.target.value)
                            }
                            placeholder="Enter a character"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-8">
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
