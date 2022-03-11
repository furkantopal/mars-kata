import { Position } from "../position";
import { Direction, DirectionSymbol } from "./direction";
import { North } from "./north";
import { South } from "./south";

export class West implements Direction {
  turnRight = (): Direction => new North();
  turnLeft = (): Direction => new South();
  move = (position: Position) => ({ x: position.x - 1, y: position.y });
  symbol: DirectionSymbol = "W";
}
