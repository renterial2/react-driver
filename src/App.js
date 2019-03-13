import React, { Component } from 'react';
import Canvas from './components/Canvas'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1>{this.props.message}</h1>
      // </div>
      <Canvas />
    );
  }
}

// App.propTypes = {
//   message: PropTypes.string.isRequired
// }

export default App;