import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Game } from "./game.entity";

export enum Language {
  JAPANESE = "ja",
  ENGLISH = "en",
  KOREAN = "ko",
  SIMPLIFIED_CHINESE = "zh-hans",
  TRADITIONAL_CHINESE = "zh-hant",
}
registerEnumType(Language, {
  name: "LocalizeLanguage",
});

@ObjectType()
@Entity()
export class LocalizeTitle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  longTitle: string;

  @Field()
  @Column()
  abbreviation: string;

  @Field(() => Language)
  @Column({ type: "enum", enum: Language })
  lang: Language;

  @ManyToOne(() => Game, (game) => game.links)
  game: Game;
}
