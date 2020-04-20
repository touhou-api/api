import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Game } from "./game.entity";

@ObjectType()
@Entity()
export class GameExternalLink {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  link: string;

  @ManyToOne(() => Game, (game) => game.links)
  game: Game;
}
