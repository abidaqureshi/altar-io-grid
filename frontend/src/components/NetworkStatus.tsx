import Indicator, { IndicatorStatus } from './Indicator';

const NetworkStatus = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <div>
            <div>
                {isLoading ? (
                    <Indicator text="Live" status={IndicatorStatus.ONLINE} />
                ) : (
                    <Indicator
                        text="Offline"
                        status={IndicatorStatus.OFFLINE}
                    />
                )}
            </div>
        </div>
    );
};

export default NetworkStatus;
