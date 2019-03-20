import { connect } from 'react-redux';
import App from '../App';

// const mapStateToProps = (state) => ({
//   gameState: state.gameState,
// })

const Game = connect(mapStateToProps, null)(App)

export default Game