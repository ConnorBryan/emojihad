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
  | "⚪️";

export type Tint = "❤️" | "💙" | "💚" | "💜";

export type Space = "🔵" | "🔴" | "⚪️";

export type EmojiSize =
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 36
  | 48
  | 64
  | 72
  | 100;

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
