import { Position } from "../position";
import { Direction, DirectionSymbol } from "./direction";
import { North } from "./north";
import { South } from "./south";

export class East implements Direction {
  turnRight = (): Direction => new South();
  turnLeft = (): Direction => new North();
  move = (position: Position) => ({ x: position.x + 1, y: position.y });
  symbol: DirectionSymbol = "E";
}
