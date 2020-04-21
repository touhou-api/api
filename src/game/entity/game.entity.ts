import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { GameExternalLink } from "./link.entity";
import { Release } from "./release.entitiy";

import { GameAppearance } from "src/game-appearance/entity/appearance.entity";

export enum GameConsole {
  PC_98 = "PC-98",
  WINDOWS = "Windows",
}
registerEnumType(GameConsole, {
  name: "GameConsole",
});

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

  @Field(() => [GameAppearance])
  @OneToMany(() => GameAppearance, (appearance) => appearance.game)
  appearances: GameAppearance[];

  @Field(() => GameConsole)
  @Column({ type: "enum", enum: GameConsole, default: GameConsole.WINDOWS })
  console: GameConsole;
}
