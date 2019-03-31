import React from 'react'
import Countdown from 'react-countdown-now'

const Clock = () => {
    const renderer = ({ seconds }) => {
        return (
            <span>{ seconds }</span>
        )
    }
    return (
        <Countdown renderer={renderer} date={Date.now() + 60000}/>    
    )
}

export default Clock