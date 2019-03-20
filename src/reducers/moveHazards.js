import createHazards from './createHazards'

function moveHazards(state) {

    const newState = createHazards(state)
    const now = (new Date()).getTime();
    const hazards = newState.gamestate.hazards.filter(hazard => (
      (now - hazard.createdAt) < 5000
    ))

    return {
        ...newState,
        gamestate: {
          ...newState.gamestate,
          hazards,
        }
    }
}

export default moveHazards