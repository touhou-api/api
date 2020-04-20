import { Resolver, Query, Args, ID } from "@nestjs/graphql";

import { CharacterService } from "./character.service";
import { Character } from "./entity/character.entity";

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private characterService: CharacterService) {}

  @Query(() => Character)
  async character(@Args("id", { type: () => ID }) id: string) {
    return this.characterService.getById(id);
  }
}
