import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CharacterResolver } from "./character.resolver";
import { CharacterService } from "./character.service";
import { Character } from "./entity/character.entity";

import { GameAppearanceModule } from "src/game-appearance/appearance.module";

@Module({
  providers: [CharacterService, CharacterResolver],
  imports: [TypeOrmModule.forFeature([Character]), GameAppearanceModule],
  exports: [
    CharacterService,
    CharacterResolver,
    TypeOrmModule.forFeature([Character]),
  ],
})
export class CharacterModule {}
