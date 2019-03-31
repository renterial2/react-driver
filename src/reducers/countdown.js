import { connect } from 'react-redux'

setInterval(() => {
    this.props.countdown()
  }, 1000)

function countdown (state, action) {
    if (!state.gamestate.started) return state
    let gametime = state.gamestate.time
    const time = gametime - 1

    return {
        ...state,
        gamestate: {
            // ...initialGameState,
            time,
        }
    }
}

const mapDispatchToProps = dispatch => ({
    countdown: () => dispatch({type: 'COUNTDOWN'}),
})

export default connect(null, mapDispatchToProps)(countdown)