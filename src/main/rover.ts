import { CommandManager } from "./commands/commandManager";
import { LeftCommand } from "./commands/leftCommand";
import { MoveCommand } from "./commands/moveCommand";
import { RightCommand } from "./commands/rightCommand";
import { North } from "./direction/north";
import { Grid } from "./grid";
import { RoverState } from "./roverState";

type AllowedInputs = "M" | "L" | "R" | "U";

export class Rover {
  private currentState: RoverState;

  constructor(private grid: Grid, private manager: CommandManager) {
    this.currentState = {
      position: { x: 0, y: 0 },
      direction: new North(),
    };
  }

  execute(characters: string) {
    for (const character of characters.split("")) {
      this.currentState = this.getNextState(character as AllowedInputs);

      if (this.currentState.foundObstacle) {
        break;
      }
    }
  }

  private getNextState(input: AllowedInputs) {
    if (input === "U") {
      return this.manager.undo();
    }

    const command = this.getCommand(input);

    if (!command) {
      throw new Error("command not supported");
    }

    return this.manager.execute(command);
  }

  private getCommand(input: string) {
    if (input === "M") {
      return new MoveCommand(this.currentState, this.grid);
    } else if (input === "R") {
      return new RightCommand(this.currentState, this.grid);
    } else if (input === "L") {
      return new LeftCommand(this.currentState, this.grid);
    }
  }

  getPosition() {
    const { foundObstacle, position, direction } = this.currentState;
    const prefix = foundObstacle ? "O:" : "";

    return `${prefix}${position.x.toString()}:${position.y.toString()}:${
      direction.symbol
    }`;
  }
}
