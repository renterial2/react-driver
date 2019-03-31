function countdown (state, action) {
    if (!state.gamestate.started) return state

    setInterval(caculateTimeRemaining, 1000)

    function caculateTimeRemaining() {
        let gametime = gamestate.time
        const time = gametime - 1

        return {
            ...newState,
            gamestate: {
                time,
            }
        }
    }
}

export default countdown