import { Position } from "./position";

export class Grid {
  private size: number;

  constructor(size: number, private obstacles: Position[] = []) {
    this.size = size;
  }

  wrapAround(position: Position): Position {
    if (position.x < 0) {
      return { x: this.size - 1, y: position.y };
    }

    if (position.y < 0) {
      return { x: position.x, y: this.size - 1 };
    }

    if (position.y >= this.size) {
      return { x: position.x, y: 0 };
    }

    if (position.x >= this.size) {
      return { x: 0, y: position.y };
    }

    return position;
  }

  isThereObstacle(position: Position) {
    return this.obstacles.some(
      (obstacle) => obstacle.x === position.x && obstacle.y === position.y
    );
  }
}
