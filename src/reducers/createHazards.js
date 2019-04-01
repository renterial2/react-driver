import { createInterval, maxHazards, hazardsStarterYAxis, hazardsStarterPositions } from '../utils/constants'

export default (state) => {
    if ( ! state.gamestate.started) return state // game not running
  
    const now = (new Date()).getTime()
    const { lastHazardCreatedAt, hazards } = state.gamestate
    const createNewHazard = (
      now - (lastHazardCreatedAt).getTime() > createInterval &&
      hazards.length < maxHazards
    )

    if ( ! createNewHazard) return state // no need to create objects now

    const id = (new Date()).getTime()
    const predefinedPosition = Math.floor(Math.random() * maxHazards)
    const hazardsPosition = hazardsStarterPositions[predefinedPosition]
    const newHazard = {
        position: {
            x: hazardsPosition,
            y: hazardsStarterYAxis,
        },
        createdAt: (new Date()).getTime(),
        id,
    }

    return {
        ...state,
        gamestate: {
            ...state.gamestate,
            hazards: [
                ...state.gamestate.hazards,
                newHazard,
            ],
            lastHazardCreatedAt: new Date(),
        }
    }
}