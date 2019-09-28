import { ISpace, INormalizedEntities, Space, WorldMapLayout } from "../types";

export const getMaximumDistance = (map: WorldMapLayout) => {
  const maxY = map.length - 1;
  const maxX = map[0].length - 1;

  return { maxY, maxX };
};

export const getSpaceUp = (
  layout: WorldMapLayout,
  fromY: number,
  fromX: number
) => {
  try {
    const spaceData = layout[fromY - 1][fromX];

    return spaceData.type === "⚪️" ? null : spaceData;
  } catch {
    return null;
  }
};

export const getSpaceRight = (
  layout: WorldMapLayout,
  fromY: number,
  fromX: number
) => {
  const spaceData = layout[fromY][fromX + 1];

  return spaceData && spaceData.type === "⚪️" ? null : spaceData;
};

export const getSpaceDown = (
  layout: WorldMapLayout,
  fromY: number,
  fromX: number
) => {
  try {
    const spaceData = layout[fromY + 1][fromX];

    return spaceData.type === "⚪️" ? null : spaceData;
  } catch {
    return null;
  }
};

export const getSpaceLeft = (
  layout: WorldMapLayout,
  fromY: number,
  fromX: number
) => {
  const spaceData = layout[fromY][fromX - 1];

  return spaceData && spaceData.type === "⚪️" ? null : spaceData;
};

export const getYX = (uuid: string, layout: WorldMapLayout) => {
  let y, x;

  layout.forEach((row, yIndex) =>
    row.forEach((space, xIndex) => {
      if (space.uuid === uuid) {
        y = yIndex;
        x = xIndex;
      }
    })
  );

  if (y == null || x == null) {
    throw new Error(`Space#${uuid} not found in layout.`);
  }

  return { y, x };
};

export const isDirectionalSpace = (space: Space) =>
  ["🔼", "▶️", "🔽", "◀️"].includes(space);

export const findFixture = (
  { uuid, type }: ISpace,
  layout: WorldMapLayout,
  { byId }: INormalizedEntities<ISpace>
) => {
  const { y, x } = getYX(uuid, layout);
  const getter = {
    "🔼": getSpaceUp,
    "▶️": getSpaceRight,
    "🔽": getSpaceDown,
    "◀️": getSpaceLeft
  };

  return (getter as any)[type](layout, y, x);
};
