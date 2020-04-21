import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { GameAppearanceResolver } from "./appearance.resolver";
import { GameAppearanceService } from "./appearance.service";
import { GameAppearance } from "./entity/appearance.entity";

@Module({
  providers: [GameAppearanceService, GameAppearanceResolver],
  imports: [TypeOrmModule.forFeature([GameAppearance])],
  exports: [
    GameAppearanceService,
    GameAppearanceResolver,
    TypeOrmModule.forFeature([GameAppearance]),
  ],
})
export class GameAppearanceModule {}
