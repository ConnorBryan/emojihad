// Emojihad ©️ Connor Bryan 2019. All rights reserved.
import flatten from "lodash.flatten";

import { WorldMapLayout, IWorldMap, ISpace } from "../types";
import * as profiles from "./profiles";

export const layout: WorldMapLayout = [
  [
    {
      type: "🔵",
      uuid: "1",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔴",
      uuid: "2",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "3",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "4",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "5",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "6",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "7",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔴",
      uuid: "8",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔴",
      uuid: "9",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "10",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "11",
      availableDirections: { up: false, right: true, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "12",
      availableDirections: { up: false, right: false, down: true, left: false }
    }
  ],
  [
    {
      type: "🔵",
      uuid: "13",
      availableDirections: { up: true, right: false, down: false, left: false }
    },
    { type: "⚪️", uuid: "14" },
    { type: "⚪️", uuid: "15" },
    { type: "⚪️", uuid: "16" },
    { type: "⚪️", uuid: "17" },
    { type: "⚪️", uuid: "18" },
    { type: "⚪️", uuid: "19" },
    { type: "⚪️", uuid: "20" },
    { type: "⚪️", uuid: "21" },
    { type: "⚪️", uuid: "22" },
    { type: "⚪️", uuid: "23" },
    {
      type: "🔵",
      uuid: "24",
      availableDirections: { up: false, right: false, down: true, left: false }
    }
  ],
  [
    {
      type: "🔵",
      uuid: "25",
      availableDirections: { up: true, right: false, down: false, left: false }
    },
    {
      type: "🔴",
      uuid: "26",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "27",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "28",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "29",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "30",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "31",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔴",
      uuid: "32",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔴",
      uuid: "33",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "34",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "35",
      availableDirections: { up: false, right: false, down: false, left: true }
    },
    {
      type: "🔵",
      uuid: "36",
      availableDirections: { up: false, right: false, down: false, left: true }
    }
  ]
];

export const worldMap: IWorldMap = {
  uuid: "1",
  name: "Default Map",
  layout,
  entryPoint: "1",
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
