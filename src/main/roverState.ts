import { Direction } from "./direction/direction";
import { Position } from "./position";

export type RoverState = {
  position: Position;
  direction: Direction;
  foundObstacle?: boolean;
};
