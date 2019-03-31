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
  redirectUri: 'https://coin-collector-renteria.herokuapp.com/',
  responseType: 'token id_token',
  scope: 'openid profile manage:points',
  audience: 'https://coin-collector-renteria.herokuapp.com/',
})

class App extends Component {
  constructor(props) {
    super(props)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.socket = null
    this.currentPlayer = null
  }
  
  componentDidMount() {
    const self = this

    Auth0.handleAuthCallback()
    Auth0.subscribe((auth) => {
      // console.log(auth)
      if (!auth) return

      self.playerProfile = Auth0.getProfile()
      self.currentPlayer = {
        id: self.playerProfile.sub,
        maxScore: 0,
        name: self.playerProfile.name,
      }
    
      this.props.loggedIn(self.currentPlayer)

      self.socket = io('https://coin-collector-server.herokuapp.com/', {
          query: `token=${Auth0.getAccessToken()}`,
      })

    self.socket.on('players', (players) => {
      this.props.leaderboardLoaded(players);
      players.forEach((player) => {
        if (player.id === self.currentPlayer.id) {
          self.currentPlayer.maxScore = player.maxScore;
        }
      })
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




    // TODO: decrement the timer from 60 to zero
    // setInterval(() => {
    //   this.props.countdown()
    // }, 1000)
    function myFunction () {
      this.props.countdown()
    }

    var i
    for (i = 0; i < 60; i++) {
      setTimeout(myFunction, 1000)
    }

    



  }
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.gamestate.started && this.props.gamestate.started) {
      if (this.currentPlayer.maxScore < this.props.gamestate.score) {
        this.socket.emit('new-max-score', {
          ...this.currentPlayer,
          maxScore: this.props.gamestate.score,
        })
      }
    }
  }

  // TODO: play coin sound
  // componentDidUpdate(prevProps) {
  //   if (prevProps.score !== this.props.score) {
  //     console.log('JUST SCORED')
  //   }
  // }

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
  rate: () => dispatch({type: 'RATE'}),
  leaderboardLoaded: (players) => dispatch({type: 'LEADERBOARD_LOADED', players}),
  loggedIn: (player) => dispatch({type: 'LOGGED_IN', player}),
  countdown: () => dispatch({type: 'COUNTDOWN'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)