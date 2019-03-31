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

export default countdown