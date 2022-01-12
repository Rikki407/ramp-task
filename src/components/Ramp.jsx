import './Ramp.css';
import React from 'react';
import useDateTime from '../hooks/useDateTime';
import { motion } from 'framer-motion';

const DateTime = () => {
    const { seconds, minutes, hours, month, day, year } = useDateTime();

    return (
        <motion.div
            className="clock"
            initial={{ opacity: 0, scale: 0, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: 150 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 120 }}
        >
            <div>{month + ' ' + day}</div>
            <div style={{ fontSize: '1.9em' }}>{year}</div>
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        </motion.div>
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
