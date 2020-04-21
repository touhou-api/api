import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Game } from "./entity/game.entity";

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>
  ) {}

  async getById(id: string) {
    return this.gameRepository.findOneOrFail(id, {
      relations: ["appearances"],
    });
  }
}
