import React from 'react'
import Login from './Login'
import Rank from './Rank'
import { connect } from 'react-redux'
import StartGame from './StartGame'

const Leaderboard = (props) => {

  const leaderboardTitle = {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: 50,
    fill: 'green',
    cursor: 'default',
  }

  // let leaderboard = props.leaderboard || []
  // leaderboard = leaderboard.sort((prev, next) => {
  //   if (prev.maxScore === next.maxScore) {
  //     return prev.name <= next.name ? 1 : -1
  //   }
  //   return prev.maxScore < next.maxScore ? 1 : -1
  // }).map((member, index) => ({
  //   ...member,
  //   rank: index + 1,
  //   currentPlayer: member.id === props.currentPlayer.id,
  // })).filter((member, index) => {
  //   if (index < 3 || member.id === props.currentPlayer.id) return member
  //   return null
  // })

  let leaderboard = props.leaderboard || []
  leaderboard = leaderboard.sort((prev, next) => {
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? 1 : -1
    }
    return prev.maxScore < next.maxScore ? 1 : -1
  }).map((currentPlayer, index) => ({
    ...currentPlayer,
    rank: index + 1,
    currentPlayer: props.currentPlayer.id,
  })).filter((member, index) => {
    if (index < 3 || props.currentPlayer.id) return currentPlayer
    return null
  })

  return (
    <g>
      {
        props.currentPlayer &&
        <text className="flashit" style={leaderboardTitle} y="-630" textAnchor="middle" >Leaderboard</text>
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
        ! props.currentPlayer && 
        <g>
          <Login authenticate={props.authenticate} />
        </g>
      }
      {
        props.currentPlayer && 
        <StartGame onClick={() => props.startGame()} />
      }
    </g>
  )
}

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({type: 'START_GAME'}),
})

export default connect(null, mapDispatchToProps)(Leaderboard)