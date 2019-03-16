import { checkCollision } from '../utils/formulas'
// import { gameHeight } from '../utils/constants'

const checkCollisions = (Vehicle, roadHazards) => {
  const objectsHit = []
 roadHazards.forEach((roadHazard) => {
    const currentLifeTime = (new Date()).getTime() - roadHazard.createdAt
    const calculatedPosition = {
      x: roadHazard.position.x,
      y: roadHazard.position.y + ((currentLifeTime / 4000) * 860),
    }
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10,
    }

      const Vehicle = {
        x1: Vehicle.position.x - 8,
        y1: Vehicle.position.y - 8,
        x2: Vehicle.position.x + 8,
        y2: Vehicle.position.y + 8,
      }


      if (checkCollision(rectA, Vehicle)) {
        objectsHit.push({
            VehicleId: Vehicle.id,
          roadHazardId: roadHazard.id,
        })
      }
  })
  return objectsHit
}

export default checkCollisions