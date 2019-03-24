import React, { Component } from 'react';
import { connect } from 'react-redux'
import Canvas from './components/Canvas'
import RightButton from './components/RightButton'
import LeftButton from './components/LeftButton'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
  }
  
  componentDidMount() {
    window.onresize = () => {
      var cnvHeight = window.innerHeight - 50;
      const cnv = document.getElementById('driver');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${cnvHeight}px`;
    };
    window.onresize();
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
        <Canvas gamestate={this.props.gamestate} startGame={this.props.startGame} />
        <LeftButton id="leftButton" handleClick={(event) => this.moveLeft(event)} />
        <RightButton id="rightButton" handleClick={(event) => this.moveRight(event)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gamestate: state.gamestate,
})

const mapDispatchToProps = (dispatch) => ({
  moveHazards: () => dispatch({type: 'MOVE_HAZARDS'}),
  startGame: () => dispatch({type: 'START_GAME'}),
  moveLeft: () => dispatch({type: 'MOVE_VEHICLELEFT'}),
  moveRight: () => dispatch({type: 'MOVE_VEHICLERIGHT'}),
  rate: () => dispatch({type: "RATE"})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)