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
    setInterval(() => {
      this.props.rate()
    }, 25)
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
        <Canvas />
        <LeftButton id="leftButton" handleClick={(event) => this.moveLeft(event)}/>
        <RightButton id="rightButton" handleClick={(event) => this.moveRight(event)}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  moveLeft: () => dispatch({type: 'MOVE_VEHICLELEFT'}),
  moveRight: () => dispatch({type: 'MOVE_VEHICLERIGHT'}),
  rate: () => dispatch({type: "RATE"})
})

export default connect(null, mapDispatchToProps)(App)