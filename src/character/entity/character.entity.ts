import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@ObjectType()
@Entity()
export class Character {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;
}
