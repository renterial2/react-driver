import React from 'react'

const StartGame = (props) => {
    const text = {
        textAnchor: 'middle', // centered
        y: -50,
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 60,
            fill: 'grey',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };
    return (
        <g>
            <text {...text}>
                Tap to Start!
            </text>
        </g>
    )
};

export default StartGame