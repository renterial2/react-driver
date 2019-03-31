import React, { Component } from 'react'
import Countdown from 'react-countdown-now'

class Clock extends Component {

    render() {
        return <Countdown date={Date.now() + 60000} />
    }
}

export default Clock