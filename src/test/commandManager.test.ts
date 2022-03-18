import { CommandManager } from "../main/commands/commandManager";
import { MoveCommand } from "../main/commands/moveCommand";
import { North } from "../main/direction/north";
import { Grid } from "../main/grid";
import { Logger } from "../main/logger";

describe("command manager", () => {
  it("should log any executed command", () => {
    const mockLogger = jest.fn();
    Logger.prototype.log = mockLogger;

    const manager = new CommandManager(new Logger());

    const command = new MoveCommand(
      { position: { x: 0, y: 0 }, direction: new North() },
      new Grid(10)
    );

    manager.execute(command);

    expect(mockLogger).toHaveBeenCalled();
  });
});
