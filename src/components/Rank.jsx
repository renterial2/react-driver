import React from 'react'

const Rank = (props) => {
  const { x, y } = props.position

  const rectId = 'rect' + props.player.rank

  const textStyle = {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: 35,
    fill: 'darkgrey',
    cursor: 'default',
  }

  if (props.player.currentPlayer) textStyle.fill = '#e9ea64'

  return (
    <g>
      <defs>
        <rect id={rectId} />
      </defs>
      <text style={textStyle} x={x - 675} y={y}>{props.player.rank}</text>
      <text style={textStyle} x={x - 600} y={y}>{props.player.name}</text>
      <text style={textStyle} x={x + 800} y={y}>{props.player.maxScore}</text>
    </g>
  )
}

export default Rank