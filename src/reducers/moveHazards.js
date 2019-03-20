import createHazards from './createHazards'

function moveHazards(state) {
    const newState = createHazards(state)
    // console.log(newState)
    return newState
}

export default moveHazards