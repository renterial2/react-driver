import React from 'react'
// import Road from './Road'
import { gameWidth } from '../utils/constants'
import StartGame from './StartGame'
import Hazard from './Hazard'
import Vehicle from './Vehicle'

const Canvas = (props) => {
    const gameHeight = gameWidth
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id="driver"
            // perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >

            {/* <Road /> */}

            <Hazard position={{x: -150, y: -700}}/>
            <Hazard position={{x: 150, y: -700}}/>

            <StartGame onClick={() => console.log('Start!')} />

            <Vehicle />
                      
        </svg>
    )
}

export default Canvas