import { Button, Input, message } from 'antd';
import GridComponent from '../components/GridComponent';
import { useGridContext } from '../provider/GridProvider';
import NavLinks from '../components/NavLinks';
import CodeSecret from '../components/CodeSecret';
import NetworkStatus from '../components/NetworkStatus';

const Home = () => {
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
    } = useGridContext();

    const aplhabetInputHandler = (value: string) => {
        const re = /^[a-z]$/;
        if (value == '' || re.test(value)) {
            setBiasCharacter(value);
        } else {
            message.info(
                'Please enter a valid character (a-z) or leave it empty.',
            );
            return;
        }
    };

    const cooldownRemaining = Math.max(
        0,
        Math.ceil((4000 - (Date.now() - lastBiasUpdate)) / 1000),
    );

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <NavLinks />

            <h1 className="text-2xl font-bold mb-6">Grid Generator</h1>
            <div className="flex justify-center w-full">
                <NetworkStatus isLoading={isLoading} />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-4 mb-8">
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
                            disabled={isBiasLoading || cooldownRemaining > 0}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center mb-4">
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
            </div>
            <div className="mb-8">
                <GridComponent cells={grid} />
            </div>
            <CodeSecret codeSecret={codeSecret} />
        </div>
    );
};

export default Home;
