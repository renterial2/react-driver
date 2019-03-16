import createMovingObjects from './createMovingObjects'
// import checkCollisions from './checkCollisions'

function moveObjects(state, action) {
  if (!state.gameState.started) return state

  const newState = createMovingObjects(state)

  const now = (new Date()).getTime()
  let movingObjects = newState.gameState.movingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ))

//   const lostLife = state.gameState.movingObjects.length > movingObjects.length
//   let lives = state.gameState.lives
//   if (lostLife) {
//     lives--
//   }


movingObjects = []
//   const started = lives > 0
//   if (!started) {
//     movingObjects = []
//     cannonBalls = []
//     lives = 3
//   }


//   const objectsDestroyed = checkCollisions(cannonBalls, movingObjects)
//   const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId))
//   const roadHazardHit = objectsDestroyed.map(object => (object.roadHazardsId))

//   movingObjects = movingObjects.filter(roadHazards => (roadHazardHit.indexOf(roadHazards.id)))

//   const kills = state.gameState.kills + roadHazardHit.length

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      movingObjects,
    //   started,
    }
  }
}

export default moveObjects