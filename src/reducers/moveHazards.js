import createHazards from './createHazards'
import checkCollisions from './checkCollisions'

function moveHazards(state, action) {
  if (!state.gamestate.started) return state
  const newState = createHazards(state)
  const now = (new Date()).getTime()
  let hazards = newState.gamestate.hazards.filter(hazard => (
    (now - hazard.createdAt) < 4000
  ))

  let vehicleX = state.x
  let vehicleY = state.y

  const objectsCollected = checkCollisions(vehicleX, vehicleY, hazards)

  const hazardsCollected = objectsCollected.map(object => (object.hazardId))

  hazards = hazards.filter(hazard => (hazardsCollected.indexOf(hazard.id)))

  const score = state.gamestate.score + hazardsCollected.length
  // console.log(score)

  return {
      ...newState,
      gamestate: {
        ...newState.gamestate,
        hazards,
        score,
      }
    }
}

export default moveHazards