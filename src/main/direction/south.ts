import { Position } from "../position";
import { Direction, DirectionSymbol } from "./direction";
import { East } from "./east";
import { West } from "./west";

export class South implements Direction {
  turnRight = (): Direction => new West();
  turnLeft = (): Direction => new East();
  move = (position: Position) => ({ x: position.x, y: position.y - 1 });
  symbol: DirectionSymbol = "S";
}
