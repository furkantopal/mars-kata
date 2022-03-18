import { RoverState } from "../roverState";
import { Command } from "./command";

export class LeftCommand extends Command {
  execute(): RoverState {
    return {
      position: this.currentState.position,
      direction: this.currentState.direction.turnLeft(),
    };
  }

  toString = (): string => "LeftCommand";
}
