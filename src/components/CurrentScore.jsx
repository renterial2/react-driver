import React from 'react'

const CurrentScore = (props) => {
    const text = {
        textAnchor: 'middle', // centered
        y: -700,
        style: {
            fontFamily:  '"Press Start 2P", cursive',
            fontSize: 30,
            fill: 'blue'
        }
    }
    return (
        <g>
            <text {...text}>
                Score: {props.score}
            </text>
        </g>
    )
}

export default CurrentScore