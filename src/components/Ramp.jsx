import React from 'react';
import useDateTime from '../hooks/useDateTime';

const DateTime = () => {
    const { seconds, minutes, hours, month, day, year } = useDateTime();

    return (
        <>
            <div>
                {month + ' '}
                {day}, {year}
            </div>
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        </>
    );
};

const Ramp = ({ input }) => {
    return <DateTime />;
};

export default Ramp;
