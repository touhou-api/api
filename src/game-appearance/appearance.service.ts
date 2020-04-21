import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { GameAppearance } from "./entity/appearance.entity";

@Injectable()
export class GameAppearanceService {
  constructor(
    @InjectRepository(GameAppearance)
    private appearanceRepository: Repository<GameAppearance>
  ) {}

  async getById(id: string) {
    return this.appearanceRepository.findOneOrFail(id);
  }

  async getManyByIds(ids: string[]) {
    return this.appearanceRepository.findByIds(ids, {
      order: { game: "ASC", character: "ASC" },
    });
  }
}
