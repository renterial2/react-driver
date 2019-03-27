import React from 'react'

const Rank = (props) => {
  const { x, y } = props.position

  const rectId = 'rect' + props.player.rank

  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 35,
    fill: '#e3e3e3',
    cursor: 'default',
  }

  if (props.player.currentPlayer) textStyle.fill = '#e9ea64'

  return (
    <g>
      <defs>
        <rect id={rectId} />
      </defs>
      <text style={textStyle} x={x - 200} y={y}>{props.player.rank}º</text>
      <text style={textStyle} x={x - 60} y={y}>{props.player.name}</text>
      <text style={textStyle} x={x + 350} y={y}>{props.player.maxScore}</text>
    </g>
  )
}

export default Rank