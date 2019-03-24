import { checkCollision } from '../utils/formulas'
import { gameHeight } from '../utils/constants'

let i = 0
const checkCollisions = (vehicleX, vehicleY, hazards) => {
    i++
    const objectsCollected = []
    hazards.forEach((hazard) => {
        const currentLifeTime = (new Date()).getTime() - hazard.createdAt
        const calculatedHazardPosition = {
            x: hazard.position.x,
            y: hazard.position.y + ((currentLifeTime / 4000) * gameHeight),
        }
        // todo: move this into constants
        const hazardWidth = 50
        const hazardHeight = 70
        const hazardRect = {
            x1: calculatedHazardPosition.x - hazardWidth,
            y1: calculatedHazardPosition.y - hazardHeight,
            x2: calculatedHazardPosition.x + hazardWidth,
            y2: calculatedHazardPosition.y + hazardHeight,
        }

        // if (i === 1) {
        //     console.log("hazardRect", i, "coordinates are ", hazardRect )
        // }
        
        const calculatedVehiclePosition = {
            x: vehicleX,
            y: vehicleY,
        }
        // todo: move this into constants
        const vehicleWidth = 50
        const vehicleHeight = 70
        const vehicleRect = {
            x1: calculatedVehiclePosition.x - vehicleWidth,
            y1: calculatedVehiclePosition.y - vehicleHeight,
            x2: calculatedVehiclePosition.x + vehicleWidth,
            y2: calculatedVehiclePosition.y + vehicleHeight
        }
        // console.log("vehicleRect coordinates are ", vehicleRect)

        if (checkCollision(hazardRect, vehicleRect)) {
            console.log("COLLISION at hazard", i, ":", hazardRect, "and vehicle:", vehicleRect)
            objectsCollected.push({
                hazardId: hazard.id
            })
        }
    })
    return console.log(objectsCollected.length)
}

export default checkCollisions