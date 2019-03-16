import React from 'react'
import { gameWidth } from '../utils/constants'

const StartGame = (props) => {
    const button = {
        x: gameWidth / -2, // half the width
        y: -280, // minus mean up above 0
        width: gameWidth,
        height: 200,
        rx: 10,
        ry: 10,
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    }
    const text = {
        textAnchor: 'middle', // centered
        x: -650, // center relative to X axis
        y: 85, // up 150
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 60,
            fill: '#e3e3e3',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };
    return (
        <g>
            <rect {...button}/>
            <text {...text}>
                Tap to Start!
            </text>
        </g>
    )
};

export default StartGame