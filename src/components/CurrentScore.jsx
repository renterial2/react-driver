import React from 'react'

const CurrentScore = (props) => {
    const text = {
        textAnchor: 'middle', // centered
        y: -700,
        style: {
            fontFamily:  '"Joti One", cursive',
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