// Emojihad ©️ Connor Bryan 2019. All rights reserved.

type Condition = "🚫👁" | "🚫👂";

type Emoji = "😀";

type Tint = "❤️" | "💙" | "💚" | "💜";

type Space = "🔵" | "🔴" | "⚪️";
``
interface IEntity {
  uuid?: string;
  '🗣': string;
}

interface IProfile extends IEntity {
  '🖌': Tint;
  '💟': string[];
  '💵': number
  '⭐': number
}

interface INormalizedProfiles {
  all: string[];
  byId: {
    [uuid: string]: IProfile;
  };
}

interface IStats {
  type: Emoji;
  '❣️': [number, number];
  '👊': number;
  '🧠': number;
  '👋': number;
  '🖕': number;
}

interface IAlly extends IEntity {
  '🔆': number;
  '👁‍🗨': Condition;
  '📊': IStats;
  '🎒': string[];
}

interface INormalizedAllies {
  all: string[];
  byId: {
    [uuid: string]: IAlly;
  };
}

interface IResource extends IEntity {}

interface INormalizedResources {
  all: string[];
  byId: {
    [uuid: string]: IResource;
  };
}

interface IAvailableDirections {
  "⬆️": boolean;
  "➡️": boolean;
  "⬇️": boolean;
  "⬅️": boolean;
}

interface ISpace {
  uuid?: string;
  '⚫️': Space;
  '🧭'?: IAvailableDirections;
}

type Map = ISpace[][];

interface IGame {
  '🕑': number;
  '🗺️': Map;
  '👥': INormalizedProfiles;
  '💟': INormalizedAllies;
  '🛠': INormalizedResources;
}

/* === */

const map: Map = [
  [
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔴",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔴",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔴",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": true, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": true, "⬅️": false }
    }
  ],
  [
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": true, "➡️": false, "⬇️": false, "⬅️": false }
    },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    { '⚫️': "⚪️" },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": true, "⬅️": false }
    }
  ],
  [
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": true, "➡️": false, "⬇️": false, "⬅️": false }
    },
    {
      '⚫️': "🔴",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔴",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔴",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    },
    {
      '⚫️': "🔵",
      '🧭': { "⬆️": false, "➡️": false, "⬇️": false, "⬅️": true }
    }
  ]
];

export default {
  '🕑': 0,
  '🗺️': map,
  '👥': {
    all: [],
    byId: {}
  },
  '💟': {
    all: [],
    byId: {}
  },
  '🛠': {
    all: [],
    byId: {}
  }
} as IGame;
