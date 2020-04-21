import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Release {
  @Field({ nullable: true })
  trial?: Date;

  @Field({ nullable: true })
  full?: Date;
}
