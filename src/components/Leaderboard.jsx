import React from 'react'
import Login from './Login'
import Rank from "./Rank"

const Leaderboard = (props) => {

  const leaderboardTitle = {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: 50,
    fill: 'green',
    cursor: 'default',
  }

  let leaderboard = props.leaderboard || [];
  console.log(leaderboard)
  leaderboard = leaderboard.sort((prev, next) => {
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? 1 : -1
    }
    return prev.maxScore < next.maxScore ? 1 : -1
  }).map((member, index) => ({
    ...member,
    rank: index + 1,
    currentPlayer: member.id === props.currentPlayer.id,
  })).filter((member, index) => {
    if (index < 3 || member.id === props.currentPlayer.id) return member
    return null
  })

  return (
    <g>
      {
        props.currentPlayer &&
        <text style={leaderboardTitle} y="-630" textAnchor="middle">Leaderboard</text>
      }
      
      {
        props.currentPlayer && leaderboard.map((player, idx) => {
          const position = {
            x: -100,
            y: -530 + (70 * idx)
          }
          return <Rank key={player.id} player={player} position={position}/>
        })
      }
      {
        ! props.currentPlayer && <Login authenticate={props.authenticate} />
      }
    </g>
  )
}

export default Leaderboard