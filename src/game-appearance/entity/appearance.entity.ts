import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Character } from "src/character/entity/character.entity";
import { Game } from "src/game/entity/game.entity";

@ObjectType()
@Entity()
export class GameAppearance {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  characterTitle?: string;

  @Field(() => Game)
  @ManyToOne(() => Game, (game) => game.appearances, {
    eager: true,
  })
  game: Game;

  @Field(() => Character)
  @ManyToOne(() => Character, (character) => character.appearances, {
    eager: true,
  })
  character: Character;
}
