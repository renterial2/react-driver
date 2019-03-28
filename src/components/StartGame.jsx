import React from 'react'

const StartGame = (props) => {
    const text = {
        textAnchor: 'middle', // centered
        y: -50,
        style: {
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 60,
            fill: 'yellow',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };
    return (
        <g>
            <text class="flashit" {...text}>
                Click to Start!
            </text>
        </g>
    )
};

export default StartGame