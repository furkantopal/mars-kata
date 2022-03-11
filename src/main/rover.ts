import { Direction } from "./direction/direction";
import { North } from "./direction/north";
import { Grid } from "./grid";
import { Position } from "./position";

export class Rover {
  private previousPosition: Position;
  private currentPosition: Position;
  private direction: Direction = new North();
  private foundObstacle: boolean = false;

  constructor(private grid: Grid) {
    this.previousPosition = { x: 0, y: 0 };
    this.currentPosition = { x: 0, y: 0 };
  }

  execute(commands: string) {
    for (const command of commands.split("")) {
      if (command === "M") {
        this.move();
      } else if (command === "R") {
        this.direction = this.direction.turnRight();
      } else if (command === "L") {
        this.direction = this.direction.turnLeft();
      }

      if (this.grid.isThereObstacle(this.currentPosition)) {
        this.currentPosition = this.previousPosition;
        this.foundObstacle = true;
        break;
      } else {
        this.previousPosition = { ...this.currentPosition };
        this.foundObstacle = false;
      }
    }
  }

  private move() {
    this.currentPosition = this.direction.move(this.currentPosition);
    this.currentPosition = this.grid.wrapAround(this.currentPosition);
  }

  getPosition() {
    const prefix = this.foundObstacle ? "O:" : "";

    return `${prefix}${this.currentPosition.x.toString()}:${this.currentPosition.y.toString()}:${
      this.direction.symbol
    }`;
  }
}
