import {
  Resolver,
  Query,
  Args,
  ID,
  ResolveField,
  Parent,
} from "@nestjs/graphql";

import { CharacterService } from "./character.service";
import { Character } from "./entity/character.entity";

import { GameAppearanceResolver } from "src/game-appearance/appearance.resolver";
import { GameAppearance } from "src/game-appearance/entity/appearance.entity";

@Resolver(() => Character)
export class CharacterResolver {
  constructor(
    private characterService: CharacterService,
    private appearanceResolver: GameAppearanceResolver
  ) {}

  @Query(() => Character)
  async character(@Args("id", { type: () => ID }) id: string) {
    return this.characterService.getById(id);
  }

  @ResolveField(() => [GameAppearance])
  async appearances(@Parent() parent: Character): Promise<GameAppearance[]> {
    return this.appearanceResolver.gameAppearances(
      parent.appearances.map(({ id }) => id)
    );
  }
}
