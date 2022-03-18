import { LogicalOperatorOrHigher } from "typescript";
import { Logger } from "../logger";
import { RoverState } from "../roverState";
import { Command } from "./command";

export class CommandManager {
  private history: Command[] = [];

  constructor(private logger: Logger) {}

  execute(command: Command): RoverState {
    this.logger.log(`${command.toString()} called`);
    this.history.push(command);
    return command.execute();
  }

  undo(): RoverState {
    const command = this.history.pop();
    return command!.undo();
  }
}
