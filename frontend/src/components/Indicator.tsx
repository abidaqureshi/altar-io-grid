import React from 'react';

export enum IndicatorStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
}

const Indicator = ({ text, status }: { text: string; status: string }) => {
    const bgString =
        status == IndicatorStatus.ONLINE ? 'bg-red-500' : 'bg-gray-400';
    const textString =
        status == IndicatorStatus.ONLINE ? 'text-red-600' : 'text-gray-500';
    return (
        <div className="flex items-center gap-1.5">
            {/* Animated red circle */}
            <div className="relative">
                <div className={`w-2.5 h-2.5 ${bgString} rounded-full`}></div>
                {/* Optional pulse effect */}
                <div
                    className={`absolute inset-0 ${bgString} rounded-full animate-ping  opacity-75`}
                ></div>
            </div>
            {/* "Live" text with subtle animation */}
            <span className={`text-sm font-medium tracking-wide ${textString}`}>
                {text}
            </span>
        </div>
    );
};

export default Indicator;
