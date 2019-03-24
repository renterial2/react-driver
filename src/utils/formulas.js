export const checkCollision = (rectA, rectB) => (
    rectA.x1 < rectB.x2 &&
    rectA.y1 < rectB.y2 &&
    rectA.x2 > rectB.x1 &&
    rectA.y2 > rectB.y1
  )