import {
  Args,
  ID,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from "@nestjs/graphql";

import { Game } from "./entity/game.entity";
import { Release } from "./entity/release.entitiy";
import { GameService } from "./game.service";

@Resolver(() => Game)
export class GameResolver {
  constructor(private characterService: GameService) {}

  @Query(() => Game)
  async game(@Args("id", { type: () => ID }) id: string) {
    return this.characterService.getById(id);
  }

  @ResolveField(() => Release)
  releaseDate(@Parent() parent: Game): Release {
    return {
      trial: parent.releaseTrialDate && new Date(parent.releaseTrialDate),
      full: parent.releaseFullDate && new Date(parent.releaseFullDate),
    };
  }
}
