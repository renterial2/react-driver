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
    const time = (props.time) / 100
    return (
        <g>
            <text {...text}>
                Time:{time}
            </text>
        </g>
    )
}

export default Timer