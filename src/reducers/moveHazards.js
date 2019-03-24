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
  // const vehiclePositionsCollected = objectsCollected.map(object => (object.vehicleId))
  // const hazardsCollected = objectsCollected.map(object => (object.hazardId))

  // // vehiclePositions = vehiclePositions.filter(vehicle => (vehiclePositionsCollected.indexOf(vehicle.id)))
  // hazards = hazards.filter(hazard => (hazardsCollected.indexOf(hazard.id)))


  return {
      ...newState,
      gamestate: {
        ...newState.gamestate,
        hazards,
      }
    }
}

export default moveHazards