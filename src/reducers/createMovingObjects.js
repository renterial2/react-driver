import {
    createInterval, movingObjectsStarterYAxis, maxMovingObjects,
    movingObjectsStarterPositions
  } from '../utils/constants';
  
  export default (state) => {
    // if ( ! state.gameState.started) return state; // game not running
  
    const now = (new Date()).getTime();
    const { lastObjectCreatedAt, movingObjects } = state.gameState;
    const createNewObject = (
      now - (lastObjectCreatedAt).getTime() > createInterval &&
      movingObjects.length < maxMovingObjects
    );
  
    if ( ! createNewObject) return state; // no need to create objects now
  
    const id = (new Date()).getTime();
    const predefinedPosition = Math.floor(Math.random() * maxMovingObjects);
    const movingObjectPosition = movingObjectsStarterPositions[predefinedPosition];
    const newMovingObject = {
      position: {
        x: movingObjectPosition,
        y: movingObjectsStarterYAxis,
      },
      createdAt: (new Date()).getTime(),
      id,
    };
  
    return {
      ...state,
      gameState: {
        ...state.gameState,
        movingObjects: [
          ...state.gameState.movingObjects,
          newMovingObject
        ],
        lastObjectCreatedAt: new Date(),
      }
    }
  }