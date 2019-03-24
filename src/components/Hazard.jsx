import React from 'react'
import styled, { keyframes } from 'styled-components'
import { gameHeight } from '../utils/constants'

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${gameHeight}px);
  }
`

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`

const Hazard = (props) => {
    const hazardStyle = {
        fill: "yellow",
        stroke: '#444',
        strokeWidth: '2px',
        width: 50,
        height: 70,
    }
    return (
        <Move>
            <rect style={hazardStyle} x={props.position.x} y={props.position.y}/>
        </Move>
        
    )
}

export default Hazard