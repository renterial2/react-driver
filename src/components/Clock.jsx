import React from 'react'
import Countdown from 'react-countdown-now'

const Clock = (props) => {
        const style = {
            fontFamily:  '"Press Start 2P", cursive',
            fontSize: 30,
            fill: 'white'
        }
    return (
            <Countdown style={...style} date={Date.now() + 60000}/>
    )
}

export default Clock