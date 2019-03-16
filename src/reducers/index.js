import moveObjects from './moveObjects'
// import startGame from './startGame'

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),
    cannonBalls: [],
  }


const initialState = {
    // started: false,
    objects: [],
    lastObjectCreatedAt: new Date(),
    speedX: 0,
    x: 10,
    gameState: initialGameState,
}

function reducer(state = initialState, action) {

    switch (action.type) {

        case 'MOVE_OBJECTS':
            return moveObjects(state, action)
        
        // case 'START_GAME':
        //     return startGame(state, initialGameState)

        case 'MOVE_VEHICLERIGHT':
            return {
                speedX: state.speedX + 1,
                x: state.x + state.speedX
            }

        case 'MOVE_VEHICLELEFT':
            return {
                speedX: state.speedX - 1,
                x: state.x + state.speedX
            }
        case 'RATE':
            return {
                x: state.speedX + state.x,
                speedX: state.speedX
            }
        default:
            return state

    }
}

export default reducer