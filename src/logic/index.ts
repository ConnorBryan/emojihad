// Emojihad ©️ Connor Bryan 2019. All rights reserved.
import { IGame, WorldMap } from "../types";
import * as profiles from "./profiles";

export const map: WorldMap = [
  [
    {
      space: "🔵",
      uuid: "1",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔴",
      uuid: "2",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "3",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "4",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "5",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "6",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "7",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔴",
      uuid: "8",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔴",
      uuid: "9",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "10",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "11",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "12",
      availableDirections: { up: false, right: false, down: true, left: false }
    }
  ],
  [
    {
      space: "🔵",
      uuid: "13",
      availableDirections: { up: true, right: false, down: false, left: false }
    },
    { space: "⚪️", uuid: "14" },
    { space: "⚪️", uuid: "15" },
    { space: "⚪️", uuid: "16" },
    { space: "⚪️", uuid: "17" },
    { space: "⚪️", uuid: "18" },
    { space: "⚪️", uuid: "19" },
    { space: "⚪️", uuid: "20" },
    { space: "⚪️", uuid: "21" },
    { space: "⚪️", uuid: "22" },
    { space: "⚪️", uuid: "23" },
    {
      space: "🔵",
      uuid: "24",
      availableDirections: { up: false, right: false, down: true, left: false }
    }
  ],
  [
    {
      space: "🔵",
      uuid: "25",
      availableDirections: { up: true, right: false, down: false, left: false }
    },
    {
      space: "🔴",
      uuid: "26",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "27",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "28",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "29",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "30",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "31",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔴",
      uuid: "32",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔴",
      uuid: "33",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "34",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "35",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      space: "🔵",
      uuid: "36",
      availableDirections: { up: false, right: false, down: false, left: true }
    }
  ]
];

export default {
  rounds: 0,
  map,
  profiles: {
    all: [],
    byId: {}
  },
  allies: {
    all: [],
    byId: {}
  },
  resources: {
    all: [],
    byId: {}
  }
} as IGame;

export { profiles };
