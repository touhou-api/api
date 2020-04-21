import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";

import { GameAppearance } from "src/game-appearance/entity/appearance.entity";

@ObjectType()
@Entity()
export class Character {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Column({ default: false })
  isUnofficialName: boolean;

  @Field(() => [GameAppearance])
  @OneToMany(() => GameAppearance, (appearance) => appearance.character)
  appearances: GameAppearance[];
}
