export type Condition = "🚫👁" | "🚫👂";

export type Emoji =
  | "😀"
  | "👊"
  | "🎲"
  | "🆚"
  | "⚫️"
  | "🧙‍♂️"
  | "💟"
  | "✖️"
  | "🕒"
  | "💵"
  | "⭐"
  | "🔆"
  | "🔵"
  | "🔴"
  | "⚪️"
  | "💥"
  | "👶"
  | "👧"
  | "🧒"
  | "0️⃣"
  | "1️⃣"
  | "️2️⃣"
  | "3️⃣"
  | "4️⃣"
  | "5️⃣"
  | "6️⃣"
  | "7️⃣"
  | "8️⃣"
  | "9️⃣"
  | "🔟"
  | "📦"
  | "🗡️";

export type Tint = "❤️" | "💙" | "💚" | "💜";

export type Space = "🔵" | "🔴" | "⚪️";

export type EntityKind = "⚫️";

export interface INormalizedEntities<Entity> {
  all: string[];
  byId: Record<string, Entity>;
}

export interface IEntity {
  uuid?: string;
  name: string;
}

export interface IEntityWithExperience extends IEntity {
  experience: number;
}

export interface IProfile extends IEntityWithExperience {
  tint: Tint;
  allies: string[];
  cash: number;
  stars: number;
}

export type INormalizedProfiles = INormalizedEntities<IProfile>;

export interface IStats {
  kind: Emoji;
  life: [number, number];
  power: number;
  smarts: number;
  moves: number;
  luck: number;
}

export interface IAlly extends IEntityWithExperience {
  condition: Condition;
  stats: IStats;
  backpack: string[];
}

export type INormalizedAllies = INormalizedEntities<IAlly>;

export interface IResource extends IEntity {}

export type INormalizedResources = INormalizedEntities<IResource>;

export interface IAvailableDirections {
  up: boolean;
  right: boolean;
  down: boolean;
  left: boolean;
}

export interface ISpace {
  uuid: string;
  space: Space;
  availableDirections?: IAvailableDirections;
}

export type WorldMap = ISpace[][];

export interface IGame {
  rounds: number;
  map: WorldMap;
  profiles: INormalizedProfiles;
  allies: INormalizedAllies;
  resources: INormalizedResources;
}

export interface IDie {
  sides: number[];
}

export type DieSide =
  | "0️⃣"
  | "1️⃣"
  | "️2️⃣"
  | "3️⃣"
  | "4️⃣"
  | "5️⃣"
  | "6️⃣"
  | "7️⃣"
  | "8️⃣"
  | "9️⃣"
  | "🔟";

export interface IProfileCharacterAbility {
  name: string;
  description: string;
  recharge: number;
}

export interface IProfileCharacter {
  emoji: Emoji;
  name: string;
  abilities: IProfileCharacterAbility[];
}
