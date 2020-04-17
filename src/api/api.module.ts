import { Module } from "@nestjs/common";
import { CharacterModule } from "src/character/character.module";

@Module({
  imports: [CharacterModule],
})
export class ApiModule {}
