// const initialGameState = {
//     movingObject: [],
    
// }

const initialState = {
    speedX: 0,
    x: 0,
}

function reducer(state = initialState, action) {

    switch (action.type) {

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