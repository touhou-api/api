import { CharacterEntities } from "src/character/character.entities";
import { GameEntities } from "src/game/game.entities";

export const TypeORMEntities = [...CharacterEntities, ...GameEntities];
