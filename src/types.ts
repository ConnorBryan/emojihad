export type Condition = "🚫👁" | "🚫👂";

export type DiceEmoji =
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

export type ProfileEmoji = "👶" | "👧" | "🧒" | "🧙‍♂️";

export type Emoji =
  // Allies
  | "😀"

  // Profiles
  | ProfileEmoji

  // Spaces
  | "⚫️"
  | "⚪️"
  | "🔵"
  | "🔴"
  | "🆚"

  // Dice
  | DiceEmoji

  // Effects
  | "💥"

  // Resources
  | "🗡️"

  // UI
  | "📦"
  | "🔆"
  | "💟"
  | "💵"
  | "⭐"
  | "👊"
  | "🕒"
  | "✖️"
  | "🎲";

export type Tint = "none" | "red" | "blue" | "green" | "purple";

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
  organizationName: string;
  emoji: ProfileEmoji;
  allies: string[];
  cash: number;
  stars: number;
  rounds: number;
  location: string;
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
  type: Space;
  availableDirections?: IAvailableDirections;
}

export type WorldMapLayout = ISpace[][];

export interface IWorldMap extends IEntity {
  entryPoint: string;
  layout: WorldMapLayout;
  spaces: INormalizedEntities<ISpace>;
}

export interface IDie {
  sides: number[];
}

export interface IProfileCharacterAbility {
  name: string;
  description: string;
  recharge: number;
}

export interface IProfileCharacter {
  emoji: ProfileEmoji;
  name: string;
  abilities: IProfileCharacterAbility[];
}

export enum PlayerStatus {
  Waiting = "Waiting",
  Moving = "Moving"
}

export interface IPlayerState {
  uuid: string;
  profileId: string;
  status: PlayerStatus;
  spacesToMove: number;
}

export interface IGameState {
  player: IPlayerState;
  profiles: INormalizedProfiles;
  allies: INormalizedAllies;
  resources: INormalizedResources;
  round: number;
  worldMap: IWorldMap;
}

export interface IMovementPath {
  startingPoint: string;
  path: string[];
  endingPoint: null | string;
}

export type OccupiedSpaces = Record<string, IProfile[]>;
