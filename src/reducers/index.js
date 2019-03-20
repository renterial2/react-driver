// import createHazards from './createHazards'
import moveHazards from './moveHazards'

const initialGameState = {
    started: false,
    lives: 3,
    hazards: [],
    lastHazardCreatedAt: new Date(),
}

const initialState = {
    speedX: 0,
    x: 0,
    gamestate: initialGameState,
}

function reducer(state = initialState, action) {

    switch (action.type) {

        case 'MOVE_HAZARDS': 
            return moveHazards(state)
        case 'START_GAME': 
            return {
                ...state,
                gamestate: {
                    ...initialGameState,
                    started: true,
                }
            }
        case 'MOVE_VEHICLERIGHT':
            return {
                ...state,
                speedX: state.speedX + 1,
                x: state.x + state.speedX
            }
        case 'MOVE_VEHICLELEFT':
            return {
                ...state,
                speedX: state.speedX - 1,
                x: state.x + state.speedX
            }
        case 'RATE':
            return {
                ...state,
                x: state.speedX + state.x,
                speedX: state.speedX
            }
        default:
            return state
    }
}

export default reducer