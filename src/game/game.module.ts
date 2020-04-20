import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Game } from "./entity/game.entity";
import { GameResolver } from "./game.resolver";
import { GameService } from "./game.service";

@Module({
  providers: [GameService, GameResolver],
  imports: [TypeOrmModule.forFeature([Game])],
  exports: [GameService, GameResolver, TypeOrmModule.forFeature([Game])],
})
export class GameModule {}
