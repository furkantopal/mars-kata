import { Position } from "../position";

export type DirectionSymbol = "W" | "N" | "E" | "S";

export interface Direction {
  turnRight(): Direction;
  turnLeft(): Direction;
  move(position: Position): Position;
  symbol: DirectionSymbol;
}
