import { Module } from "@nestjs/common";

import { CharacterModule } from "src/character/character.module";
import { GameAppearanceModule } from "src/game-appearance/appearance.module";
import { GameModule } from "src/game/game.module";

@Module({
  imports: [CharacterModule, GameModule, GameAppearanceModule],
})
export class ApiModule {}
