import './Ramp.css';
import React from 'react';
import useDateTime from '../hooks/useDateTime';

const DateTime = () => {
    const { seconds, minutes, hours, month, day, year } = useDateTime();

    return (
        <div className="clock">
            <div>{month + ' ' + day}</div>
            <div style={{ fontSize: '1.9em' }}>{year}</div>
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        </div>
    );
};

const List = ({ input }) => {
    return input.map((item, idx) => <div key={idx}>{item}</div>);
};

const Ramp = ({ input }) => {
    let isArray = false;
    try {
        isArray = Array.isArray(JSON.parse(input));
    } catch (error) {
        isArray = false;
    }
    return (
        <div className="container">
            {!input ? (
                <DateTime />
            ) : isArray ? (
                <List input={JSON.parse(input)} />
            ) : (
                <div>{input}</div>
            )}
        </div>
    );
};

export default Ramp;
