import { RoverState } from "../roverState";
import { Command } from "./command";

export class RightCommand extends Command {
  execute(): RoverState {
    return {
      position: this.currentState.position,
      direction: this.currentState.direction.turnRight(),
    };
  }

  toString = (): string => "RightCommand";
}
