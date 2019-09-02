import { WorldMap } from "../types";

export const getMaximumDistance = (map: WorldMap) => {
  const maxY = map.length - 1;
  const maxX = map[0].length - 1;

  return { maxY, maxX };
};

export const getSpaceUp = (map: WorldMap, fromY: number, fromX: number) => {
  try {
    const spaceData = map[fromY - 1][fromX];

    return spaceData.type === "⚪️" ? null : spaceData;
  } catch {
    return null;
  }
};

export const getSpaceRight = (map: WorldMap, fromY: number, fromX: number) => {
  const spaceData = map[fromY][fromX + 1];

  return spaceData && spaceData.type === "⚪️" ? null : spaceData;
};

export const getSpaceDown = (map: WorldMap, fromY: number, fromX: number) => {
  try {
    const spaceData = map[fromY + 1][fromX];

    return spaceData.type === "⚪️" ? null : spaceData;
  } catch {
    return null;
  }
};

export const getSpaceLeft = (map: WorldMap, fromY: number, fromX: number) => {
  const spaceData = map[fromY][fromX - 1];

  return spaceData && spaceData.type === "⚪️" ? null : spaceData;
};
