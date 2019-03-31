import React from 'react'

const Timer = (props) => {
    const text = {
        textAnchor: 'middle', // centered
        y: -750,
        style: {
            fontFamily:  '"Press Start 2P", cursive',
            fontSize: 30,
            fill: 'white'
        }
    }
    return (
        <g>
            <text {...text}>
                {props.time}
            </text>
        </g>
    )
}

export default Timer