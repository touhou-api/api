import { CharacterEntities } from "src/character/character.entities";
import { GameAppearanceEntities } from "src/game-appearance/appearance.entities";
import { GameEntities } from "src/game/game.entities";

export const TypeORMEntities = [
  ...CharacterEntities,
  ...GameEntities,
  ...GameAppearanceEntities,
];
