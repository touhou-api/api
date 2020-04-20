import { Module } from "@nestjs/common";

import { CharacterModule } from "src/character/character.module";
import { GameModule } from "src/game/game.module";

@Module({
  imports: [CharacterModule, GameModule],
})
export class ApiModule {}
