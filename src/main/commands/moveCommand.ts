import { RoverState } from "../roverState";
import { Command } from "./command";

export class MoveCommand extends Command {
  execute = (): RoverState => {
    const { position: startingPosition, direction } = this.currentState;

    let nextPosition = direction.move(startingPosition);

    nextPosition = this.grid.wrapAround(nextPosition);

    if (this.grid.isThereObstacle(nextPosition)) {
      nextPosition = startingPosition;
    }

    return {
      position: nextPosition,
      direction,
      foundObstacle: nextPosition === startingPosition,
    };
  };

  toString = (): string => "MoveCommand";
}
