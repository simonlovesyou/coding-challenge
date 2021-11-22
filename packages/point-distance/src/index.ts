type Point = {
  x: number;
  y: number;
};

const calculatePointDistance = (pointA: Point, pointB: Point) => {
  return Math.abs(pointA.x - pointB.x) + Math.abs(pointA.y - pointB.y)
}

export default calculatePointDistance
