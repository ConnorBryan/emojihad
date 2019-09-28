// Emojihad ©️ Connor Bryan 2019. All rights reserved.
import flatten from "lodash.flatten";

import { WorldMapLayout, IWorldMap, ISpace, Directions } from "../types";
import * as profiles from "./profiles";

export const layout: WorldMapLayout = [
  // Row 1
  [
    {
      uuid: "1",
      type: "⚪️"
    },
    {
      uuid: "2",
      type: "⚪️"
    },
    {
      uuid: "3",
      type: "🔵",
      availableDirections: {
        right: "4"
      }
    },
    {
      uuid: "4",
      type: "🔵",
      availableDirections: {
        right: "5"
      }
    },
    {
      uuid: "5",
      type: "🔵",
      availableDirections: {
        right: "6"
      }
    },
    {
      uuid: "6",
      type: "🔴",
      availableDirections: {
        right: "7"
      }
    },
    {
      uuid: "7",
      type: "🔵",
      availableDirections: {
        right: "8"
      }
    },
    {
      uuid: "8",
      type: "🔵",
      availableDirections: {
        right: "9"
      }
    },
    {
      uuid: "9",
      type: "🔵",
      availableDirections: {
        right: "10"
      }
    },
    {
      uuid: "10",
      type: "🔴",
      availableDirections: {
        down: "20"
      }
    }
  ],

  // Row 2
  [
    {
      uuid: "11",
      type: "⚪️"
    },
    {
      uuid: "12",
      type: "⚪️"
    },
    {
      uuid: "13",
      type: "▶️",
      availableDirections: {
        up: "3"
      }
    },
    {
      uuid: "14",
      type: "🕍",
      facing: Directions.Left
    },
    {
      uuid: "15",
      type: "⚪️"
    },
    {
      uuid: "16",
      type: "⚪️"
    },
    {
      uuid: "17",
      type: "⚪️"
    },
    {
      uuid: "18",
      type: "⚪️"
    },
    {
      uuid: "19",
      type: "⚪️"
    },
    {
      uuid: "20",
      type: "🔵",
      availableDirections: {
        down: "30"
      }
    }
  ],

  // Row 3
  [
    {
      uuid: "21",
      type: "🔵",
      availableDirections: {
        right: "22"
      }
    },
    {
      uuid: "22",
      type: "🔵",
      availableDirections: {
        right: "23"
      }
    },
    {
      uuid: "23",
      type: "🔵",
      availableDirections: {
        up: "13"
      }
    },
    {
      uuid: "24",
      type: "⚪️"
    },
    {
      uuid: "25",
      type: "⚪️"
    },
    {
      uuid: "26",
      type: "⚪️"
    },
    {
      uuid: "27",
      type: "⚪️"
    },
    {
      uuid: "28",
      type: "⚪️"
    },
    {
      uuid: "29",
      type: "⚪️"
    },
    {
      uuid: "30",
      type: "🔵",
      availableDirections: {
        down: "40"
      }
    }
  ],

  // Row 4
  [
    {
      uuid: "31",
      type: "🔵",
      availableDirections: {
        up: "21"
      }
    },
    {
      uuid: "32",
      type: "⚪️"
    },
    {
      uuid: "33",
      type: "🔵",
      availableDirections: {
        up: "23"
      }
    },
    {
      uuid: "34",
      type: "⚪️"
    },
    {
      uuid: "35",
      type: "⚪️"
    },
    {
      uuid: "36",
      type: "⚪️"
    },
    {
      uuid: "37",
      type: "⚪️"
    },
    {
      uuid: "38",
      type: "⚪️"
    },
    {
      uuid: "39",
      type: "⚪️"
    },
    {
      uuid: "40",
      type: "🔵",
      availableDirections: {
        down: "50"
      }
    }
  ],
  // Row 5
  [
    {
      uuid: "41",
      type: "🔵",
      availableDirections: {
        up: "31"
      }
    },
    {
      uuid: "42",
      type: "⚪️"
    },
    {
      uuid: "43",
      type: "🔴",
      availableDirections: {
        up: "33"
      }
    },
    {
      uuid: "44",
      type: "⚪️"
    },
    {
      uuid: "45",
      type: "⚪️"
    },
    {
      uuid: "46",
      type: "⚪️"
    },
    {
      uuid: "47",
      type: "🔵",
      availableDirections: {
        right: "48"
      }
    },
    {
      uuid: "48",
      type: "🔵",
      availableDirections: {
        right: "49"
      }
    },
    {
      uuid: "49",
      type: "🔵",
      availableDirections: {
        right: "50"
      }
    },
    {
      uuid: "50",
      type: "🔵",
      availableDirections: {
        down: "60"
      }
    }
  ],

  // Row 6
  [
    {
      uuid: "51",
      type: "🔵",
      availableDirections: {
        up: "41"
      }
    },
    {
      uuid: "52",
      type: "⚪️"
    },
    {
      uuid: "53",
      type: "🔵",
      availableDirections: {
        up: "43"
      }
    },
    {
      uuid: "54",
      type: "⚪️"
    },
    {
      uuid: "55",
      type: "⚪️"
    },
    {
      uuid: "56",
      type: "⚪️"
    },
    {
      uuid: "57",
      type: "🔴",
      availableDirections: {
        up: "47"
      }
    },
    {
      uuid: "58",
      type: "⚪️"
    },
    {
      uuid: "59",
      type: "⚪️"
    },
    {
      uuid: "60",
      type: "🔵",
      availableDirections: {
        down: "70"
      }
    }
  ],
  // Row 7
  [
    {
      uuid: "61",
      type: "🔵",
      availableDirections: {
        up: "51"
      }
    },
    {
      uuid: "62",
      type: "⚪️"
    },
    {
      uuid: "63",
      type: "🔵",
      availableDirections: {
        up: "53"
      }
    },
    {
      uuid: "64",
      type: "⚪️"
    },
    {
      uuid: "65",
      type: "⚪️"
    },
    {
      uuid: "66",
      type: "⚪️"
    },
    {
      uuid: "67",
      type: "🔵",
      availableDirections: {
        up: "57"
      }
    },
    {
      uuid: "68",
      type: "🏦"
    },
    {
      uuid: "69",
      type: "⚪️"
    },
    {
      uuid: "70",
      type: "🔵",
      availableDirections: {
        down: "80"
      }
    }
  ],
  // Row 8
  [
    {
      uuid: "71",
      type: "🔵",
      availableDirections: {
        up: "61"
      }
    },
    {
      uuid: "72",
      type: "🔵",
      availableDirections: {
        left: "71"
      }
    },
    {
      uuid: "73",
      type: "🔵",
      availableDirections: {
        up: "63",
        left: "72"
      }
    },
    {
      uuid: "74",
      type: "🔵",
      availableDirections: {
        left: "73"
      }
    },
    {
      uuid: "75",
      type: "🔵",
      availableDirections: {
        left: "74"
      }
    },
    {
      uuid: "76",
      type: "🔵",
      availableDirections: {
        left: "75"
      }
    },
    {
      uuid: "77",
      type: "🔵",
      availableDirections: {
        up: "67",
        left: "76"
      }
    },
    {
      uuid: "78",
      type: "🔼",
      availableDirections: {
        left: "77"
      }
    },
    {
      uuid: "79",
      type: "🔵",
      availableDirections: {
        left: "78"
      }
    },
    {
      uuid: "80",
      type: "🔵",
      availableDirections: {
        left: "79"
      }
    }
  ]
];

export const worldMap: IWorldMap = {
  uuid: "1",
  name: "Default Map",
  layout,
  entryPoint: "80",
  spaces: flatten(layout).reduce(
    (prev, next) => {
      prev.all.push(next.uuid);
      prev.byId[next.uuid] = next;
      return prev;
    },
    {
      all: [],
      byId: {}
    } as {
      all: string[];
      byId: Record<string, ISpace>;
    }
  )
};

export { profiles };
