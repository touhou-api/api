import { Args, ID, Query, Resolver } from "@nestjs/graphql";

import { GameAppearanceService } from "./appearance.service";
import { GameAppearance } from "./entity/appearance.entity";

@Resolver(() => GameAppearance)
export class GameAppearanceResolver {
  constructor(private characterService: GameAppearanceService) {}

  @Query(() => GameAppearance)
  async gameAppearance(@Args("id", { type: () => ID }) id: string) {
    return this.characterService.getById(id);
  }

  @Query(() => [GameAppearance])
  async gameAppearances(@Args("ids", { type: () => [ID] }) ids: string[]) {
    return this.characterService.getManyByIds(ids);
  }
}
