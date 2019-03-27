import React, { Component } from 'react'
import { connect } from 'react-redux'
import Canvas from './components/Canvas'
import RightButton from './components/RightButton'
import LeftButton from './components/LeftButton'
import * as Auth0 from 'auth0-web'
import io from 'socket.io-client'

Auth0.configure({
  domain: 'renterial.auth0.com',
  clientID: 'dXV5rHU2lqnDQ6UwxU2Vq8HZ3qJ0Y0uJ',
  redirectUri: 'http://localhost:3000/',
  responseType: 'token id_token',
  scope: 'openid profile manage:points',
  audience: 'https://coin-collector-renteria.herokuapp.com/',
})

class App extends Component {
  constructor(props) {
    super(props)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
  }
  
  componentDidMount() {

    Auth0.handleAuthCallback()
    Auth0.subscribe((auth) => {
      console.log(auth)
      if (!auth) return

      const playerProfile = Auth0.getProfile()
      const currentPlayer = {
        id: playerProfile.sub,
        maxScore: 0,
        name: playerProfile.name,
      }
      // console.log(currentPlayer)
      // console.log(this.props.loggedIn(currentPlayer))
    
      this.props.loggedIn(currentPlayer)

      const socket = io('http://localhost:3001', {
          query: `token=${Auth0.getAccessToken()}`,
      })

    let emitted = false
    socket.on('players', (players) => {
      
      // console.log("Hello", this.props.leaderboardLoaded(players))
      this.props.leaderboardLoaded(players)
      
      if (emitted) return

      socket.emit('new-max-score', {
        id: playerProfile.sub,
        maxScore: 120,
        name: playerProfile.name,
      })

      emitted = true
      
      setTimeout(() => {
        socket.emit('new-max-score', {
          id: playerProfile.sub,
          maxScore: 222,
          name: playerProfile.name
        })
    }, 5000)
  })
})

    window.onresize = () => {
      var cnvHeight = window.innerHeight - 50
      const cnv = document.getElementById('driver')
      cnv.style.width = `${window.innerWidth}px`
      cnv.style.height = `${cnvHeight}px`
    }
    window.onresize()

    setInterval(() => {
      this.props.rate()
      this.props.moveHazards()
    }, 10)
  }

  moveLeft (event) {
    this.props.moveLeft(event)
  }
  
  moveRight (event) {
    this.props.moveRight(event)
  }

  render() {
    return (
      <div>
        <Canvas 
          currentPlayer={this.props.player} 
          gamestate={this.props.gamestate} 
          players={this.props.players} 
          startGame={this.props.startGame} />
        <LeftButton id="leftButton" handleClick={(event) => this.moveLeft(event)} />
        <RightButton id="rightButton" handleClick={(event) => this.moveRight(event)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gamestate: state.gamestate,
  currentPlayer: state.currentPlayer,
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  moveHazards: () => dispatch({type: 'MOVE_HAZARDS'}),
  startGame: () => dispatch({type: 'START_GAME'}),
  moveLeft: () => dispatch({type: 'MOVE_VEHICLELEFT'}),
  moveRight: () => dispatch({type: 'MOVE_VEHICLERIGHT'}),
  rate: () => dispatch({type: "RATE"}),
  leaderboardLoaded: (players) => dispatch({type: "LEADERBOARD_LOADED", players}),
  loggedIn: (player) => dispatch({type: "LOGGED_IN", player}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)