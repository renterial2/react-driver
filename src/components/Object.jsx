import React from 'react'
import styled, { keyframes } from 'styled-components'
// import { gameHeight } from '../utils/constants'

const Object = (props) => {
    const style = {
      fill: '#979797',
      stroke: '#5c5c5c',
    }
  
    return (
      <ellipse
        // cx={props.position.x}
        // cy={props.position.y}
        rx="40"
        ry="10"
        style={style}
      />
    )
}

const moveVertically = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(860px)
  }
`

const Move = styled.g`
  animation: ${moveVertically} 4s linear
`

const movingObject = props => (
  <Move>
    <Object position={props.position} />
  </Move>
)

export default movingObject