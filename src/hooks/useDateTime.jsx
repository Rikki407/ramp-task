import React from 'react';
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const useDateTime = () => {
    const [date, setDate] = React.useState(new Date());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return {
        seconds:
            date.getSeconds() < 10
                ? `0${date.getSeconds()}`
                : date.getSeconds(),
        minutes:
            date.getMinutes() < 10
                ? '0' + date.getMinutes()
                : date.getMinutes(),
        hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        month: months[date.getMonth()],
        day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        year: date.getFullYear(),
    };
};

export default useDateTime;
