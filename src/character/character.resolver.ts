import { Resolver, Query, Args, ID } from "@nestjs/graphql";
import { Character } from "./entity/character.entity";
import { CharacterService } from "./character.service";

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private characterService: CharacterService) {}

  @Query(() => Character)
  async character(@Args("id", { type: () => ID }) id: string) {
    return this.characterService.getById(id);
  }
}
