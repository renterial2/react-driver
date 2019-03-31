import React from 'react'
import { gameWidth } from '../utils/constants'
import CurrentScore from './CurrentScore'
import Hazard from './Hazard'
import Vehicle from './Vehicle'
import { signIn } from 'auth0-web'
import Leaderboard from './Leaderboard'
import StartScreenMusic from './StartScreenMusic'
import LevelMusic from './LevelMusic'
// import Clock from './Clock'
import Timer from './Timer'
// import CoinSound from './CoinSound'

const Canvas = (props) => {
    const gameHeight = gameWidth
    const viewBox = [window.innerWidth / - 2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id="driver"
            // perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            { ! props.gamestate.started &&
                <g>
                    <StartScreenMusic />
                    <Leaderboard currentPlayer={props.gamestate.currentPlayer} authenticate={signIn} leaderboard={props.gamestate.players} />
                </g>
            }
            
            { props.gamestate.hazards.map(hazard => ( <Hazard key={hazard.id} position={hazard.position} /> )) }

            <Vehicle />

            { props.gamestate.started &&
                <g>
                    {/* <Clock /> */}
                    <Timer time={props.gamestate.time}/>

                    <CurrentScore score={props.gamestate.score} />
                    <LevelMusic />
                </g>
            }

            {/* TODO: play coin sound */}
            {/* { props.gamestate.justScored && 
                <g>
                    <CoinSound play={props.gamestate.justScored}/>
                </g>
            } */}
        </svg>
    )
}

export default Canvas