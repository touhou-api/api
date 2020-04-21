import { ArgsType, Field, ID } from "@nestjs/graphql";
import { Min } from "class-validator";

import { GameConsole } from "../entity/game.entity";

@ArgsType()
export class FindManyArgs {
  @Field(() => [ID], { nullable: true })
  id?: string[];

  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => GameConsole)
  console?: GameConsole;
}
