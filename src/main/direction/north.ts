import { Position } from "../position";
import { Direction, DirectionSymbol } from "./direction";
import { East } from "./east";
import { West } from "./west";

export class North implements Direction {
  turnRight = (): Direction => new East();
  turnLeft = (): Direction => new West();
  move = (position: Position) => ({ x: position.x, y: position.y + 1 });
  symbol: DirectionSymbol = "N";
}
