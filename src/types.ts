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
  | "🔆";

export type Tint = "❤️" | "💙" | "💚" | "💜";

export type Space = "🔵" | "🔴" | "⚪️";

export type EntityKind = "⚫️";

export interface INormalizedEntities<Entity> {
  all: string[];
  byId: Record<string, Entity>;
}

export interface IEntity {
  uuid?: string;
  "🗣": string;
}

export interface IEntityWithExperience extends IEntity {
  "🔆": number;
}

export interface IProfile extends IEntityWithExperience {
  "🖌": Tint;
  "💟": string[];
  "💵": number;
  "⭐": number;
}

export type INormalizedProfiles = INormalizedEntities<IProfile>;

export interface IStats {
  kind: Emoji;
  "❣️": [number, number];
  "👊": number;
  "🧠": number;
  "👋": number;
  "🖕": number;
}

export interface IAlly extends IEntityWithExperience {
  "👁‍🗨": Condition;
  "📊": IStats;
  "🎒": string[];
}

export type INormalizedAllies = INormalizedEntities<IAlly>;

export interface IResource extends IEntity {}

export type INormalizedResources = INormalizedEntities<IResource>;

export interface IAvailableDirections {
  "⬆️": boolean;
  "➡️": boolean;
  "⬇️": boolean;
  "⬅️": boolean;
}

export interface ISpace {
  uuid?: string;
  "⚫️": Space;
  "🧭"?: IAvailableDirections;
}

export type Map = ISpace[][];

export interface IGame {
  "🕑": number;
  "🗺️": Map;
  "👥": INormalizedProfiles;
  "💟": INormalizedAllies;
  "🛠": INormalizedResources;
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
