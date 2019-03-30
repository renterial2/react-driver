import { checkCollision } from '../utils/formulas'
import { gameHeight } from '../utils/constants'

const checkCollisions = (vehicleX, vehicleY, hazards) => {

    const objectsCollected = []
    hazards.forEach((hazard) => {

        const currentLifeTime = (new Date()).getTime() - hazard.createdAt
        const calculatedHazardPosition = {
            x: hazard.position.x,
            y: hazard.position.y + ((currentLifeTime / 4000) * gameHeight),
        }

        const hazardRect = {
            x1: calculatedHazardPosition.x,
            y1: calculatedHazardPosition.y,
            x2: calculatedHazardPosition.x,
            y2: calculatedHazardPosition.y,
        }
        
        const calculatedVehiclePosition = {
            x: vehicleX,
            y: vehicleY,
        }

        const vehicleWidth = 50
        const vehicleHeight = 70

        const vehicleRect = {
            x1: calculatedVehiclePosition.x - vehicleWidth,
            y1: calculatedVehiclePosition.y - vehicleHeight,
            x2: calculatedVehiclePosition.x + vehicleWidth,
            y2: calculatedVehiclePosition.y + vehicleHeight
        }

        if (checkCollision(hazardRect, vehicleRect)) {
            objectsCollected.push({
                hazardId: hazard.id
            })
        }
    })

    return objectsCollected

}

export default checkCollisions