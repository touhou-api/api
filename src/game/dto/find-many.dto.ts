import { ArgsType, Field, ID } from "@nestjs/graphql";

import { GameConsole } from "../entity/game.entity";

@ArgsType()
export class FindManyArgs {
  @Field(() => [ID], { nullable: true })
  id?: string[];

  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => GameConsole, { nullable: true })
  console?: GameConsole;
}
