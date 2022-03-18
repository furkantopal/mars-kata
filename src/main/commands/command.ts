import { Grid } from "../grid";
import { RoverState } from "../roverState";

export abstract class Command {
  constructor(protected currentState: RoverState, protected grid: Grid) {}

  abstract execute(): RoverState;

  undo(): RoverState {
    return this.currentState;
  }
}
