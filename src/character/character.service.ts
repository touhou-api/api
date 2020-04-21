import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Character } from "./entity/character.entity";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>
  ) {}

  async getById(id: string) {
    return this.characterRepository.findOneOrFail(id, {
      relations: ["appearances"],
    });
  }
}
