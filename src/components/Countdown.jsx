import React from 'react'
import Countdown from 'react-countdown-now'

const Countdown = (props) => {
    const text = {
        textAnchor: 'middle', // centered
        y: -800,
        style: {
            fontFamily:  '"Press Start 2P", cursive',
            fontSize: 30,
            fill: 'white'
        }
    }

    return (
        <text {...text}>
            <Countdown date={Date.now() + 60000}/>
        </text>
    )
}

export default Countdown