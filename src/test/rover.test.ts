import { GeneratedIdentifierFlags } from "typescript";
import { CommandManager } from "../main/commands/commandManager";
import { Grid } from "../main/grid";
import { Logger } from "../main/logger";
import { Position } from "../main/position";
import { Rover } from "../main/rover";

const manager = new CommandManager(new Logger());

describe("Mars Rover", () => {
  it.each([
    ["", "0:0:N"],
    ["M", "0:1:N"],
    ["MM", "0:2:N"],
    ["R", "0:0:E"],
    ["RR", "0:0:S"],
    ["RRR", "0:0:W"],
    ["RRRR", "0:0:N"],
    ["L", "0:0:W"],
    ["LL", "0:0:S"],
    ["LLL", "0:0:E"],
    ["LLLL", "0:0:N"],
    ["RM", "1:0:E"],
    ["MMMRRM", "0:2:S"],
    ["RMMMRRM", "2:0:W"],
    ["LM", "9:0:W"],
    ["RRM", "0:9:S"],
    ["MMMMMMMMMM", "0:0:N"],
    ["RMMMMMMMMMM", "0:0:E"],
    ["MMMMMMMMMMMMMMM", "0:5:N"],
    ["MMU", "0:1:N"],
  ])("should parse command %p and move to %p", (commands, position) => {
    const rover = new Rover(new Grid(10), manager);

    rover.execute(commands);

    expect(rover.getPosition()).toEqual(position);
  });

  it.each([
    ["MMM", "O:0:2:N"],
    ["MMMRM", "O:0:2:N"],
  ])(
    "should handle obstacles for move %p and be at %p",
    (commands, position) => {
      const obstacles: Position[] = [
        { x: 0, y: 3 },
        { x: 1, y: 2 },
      ];

      const rover = new Rover(new Grid(10, obstacles), manager);

      rover.execute(commands);

      expect(rover.getPosition()).toEqual(position);
    }
  );

  it("should not accept unsupported commands", () => {
    const rover = new Rover(new Grid(10), manager);

    expect(() => rover.execute("SDOFJOISDJFFGIO")).toThrow(
      "command not supported"
    );
  });
});
