import {
  Args,
  ID,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from "@nestjs/graphql";

import { FindManyArgs } from "./dto/find-many.dto";
import { Game } from "./entity/game.entity";
import { Release } from "./entity/release.entitiy";
import { GameService } from "./game.service";

import { GameAppearanceResolver } from "src/game-appearance/appearance.resolver";
import { GameAppearance } from "src/game-appearance/entity/appearance.entity";

@Resolver(() => Game)
export class GameResolver {
  constructor(
    private characterService: GameService,
    private appearanceResolver: GameAppearanceResolver
  ) {}

  @Query(() => Game)
  async game(@Args("id", { type: () => ID }) id: string) {
    return this.characterService.getById(id);
  }

  @Query(() => [Game])
  async games(@Args() args: FindManyArgs) {
    return this.characterService.getMany(args);
  }

  @ResolveField(() => Release)
  releaseDate(@Parent() parent: Game): Release {
    return {
      trial: parent.releaseTrialDate && new Date(parent.releaseTrialDate),
      full: parent.releaseFullDate && new Date(parent.releaseFullDate),
    };
  }

  @ResolveField(() => [GameAppearance])
  async appearances(@Parent() parent: Game): Promise<GameAppearance[]> {
    return this.appearanceResolver.gameAppearances(
      parent.appearances.map(({ id }) => id)
    );
  }
}
