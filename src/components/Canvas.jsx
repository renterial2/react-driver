import React from 'react'
// import Road from './Road'
import { gameWidth } from '../utils/constants'
import StartGame from './StartGame'
import Hazard from './Hazard'
import Vehicle from './Vehicle'

const Canvas = (props) => {
    console.log(props)
    const gameHeight = gameWidth
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id="driver"
            // perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            {/* <Road /> */}

            { ! props.gamestate.started &&
                <g>
                    <StartGame onClick={() => props.startGame()} />
                </g>
            }
            
            { props.gamestate.hazards.map(hazard => ( <Hazard key={hazard.id} position={hazard.position} /> )) }

            {/* { props.gamestate.started && 
                <g>
                    <Hazard position={{x: -150, y: -700}}/>
                    <Hazard position={{x: 150, y: -700}}/>
                </g>
            } */}

            <Vehicle />
                      
        </svg>
    )
}

export default Canvas