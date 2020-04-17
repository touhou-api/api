import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Character } from "./entity/character.entity";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>
  ) {}

  async getById(id: string) {
    return this.characterRepository.findOneOrFail(id);
  }
}
