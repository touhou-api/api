import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { FindManyArgs } from "./dto/find-many.dto";
import { Game } from "./entity/game.entity";

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>
  ) {}

  async getById(id: string) {
    return this.gameRepository.findOneOrFail(id, {
      relations: ["appearances", "links"],
    });
  }

  async getMany(args: FindManyArgs): Promise<Game[]> {
    const query = this.gameRepository
      .createQueryBuilder("game")
      .addOrderBy("number", "ASC")
      .leftJoinAndSelect("game.links", "links")
      .leftJoinAndSelect("game.appearances", "appearances");
    if (args.id) query.whereInIds(args.id);
    else {
      if (args.take) query.take(args.take);
      if (args.skip) query.skip(args.skip);
      if (args.console)
        query.where("game.console = :console", { console: args.console });
    }
    return query.getMany();
  }
}
