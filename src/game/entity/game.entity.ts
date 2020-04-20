import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { GameExternalLink } from "./link.entity";
import { Release } from "./release.entitiy";

@ObjectType()
@Entity()
export class Game {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ type: "float", nullable: true })
  number: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  abbreviation: string;

  @Column({ type: "date", nullable: true })
  releaseTrialDate?: Date;

  @Column({ type: "date", nullable: true })
  releaseFullDate?: Date;

  @Field(() => Release)
  releaseDate: Release;

  @Field(() => [GameExternalLink])
  @OneToMany(() => GameExternalLink, (link) => link.game, { eager: true })
  links: GameExternalLink[];
}
