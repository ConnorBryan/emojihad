import cloneDeep from "lodash.clonedeep";

import { createLookup } from "../../helpers";
import {
  IGameState,
  PlayerStatus,
  IMovementPath,
  OccupiedSpaces,
  ISpace,
  Directions
} from "../../types";

// #region Meta
export const getRound = (state: IGameState) => state.round;
// #endregion

// #region Player
export const getPlayer = (state: IGameState) => state.player;

export const getPlayerDieRoll = (state: IGameState) => getPlayer(state).dieRoll;

export const getPlayerProfile = (state: IGameState) =>
  getProfiles(state).byId[getPlayer(state).profileId];

export const getPlayerName = (state: IGameState) =>
  getPlayerProfile(state).name;

export const getPlayerOrganizationName = (state: IGameState) =>
  getPlayerProfile(state).organizationName;

export const getPlayerEmoji = (state: IGameState) =>
  getPlayerProfile(state).emoji;

export const getPlayerExperience = (state: IGameState) =>
  getPlayerProfile(state).experience;

export const getPlayerAllies = (state: IGameState) =>
  getPlayerProfile(state).allies;

export const getPlayerAllyCount = (state: IGameState) =>
  getPlayerAllies(state).length;

export const getPlayerRoundsPlayed = (state: IGameState) =>
  getPlayerProfile(state).rounds;

export const getPlayerCash = (state: IGameState) =>
  getPlayerProfile(state).cash;

export const getPlayerStars = (state: IGameState) =>
  getPlayerProfile(state).stars;

export const getPlayerLocation = (state: IGameState) =>
  getPlayerProfile(state).location;

export const getPlayerBadgeStats = (state: IGameState) => ({
  name: getPlayerName(state),
  organizationName: getPlayerOrganizationName(state),
  emoji: getPlayerEmoji(state),
  experience: getPlayerExperience(state),
  allies: getPlayerAllyCount(state),
  rounds: getPlayerRoundsPlayed(state),
  cash: getPlayerCash(state),
  stars: getPlayerStars(state)
});

export const getPlayerStatus = (state: IGameState) => getPlayer(state).status;

export const getPlayerIsWaiting = (state: IGameState) =>
  getPlayerStatus(state) === PlayerStatus.Waiting;

export const getPlayerIsMoving = (state: IGameState) =>
  getPlayerStatus(state) === PlayerStatus.Moving;

export const getPlayerSpacesToMove = (state: IGameState) =>
  getPlayer(state).spacesToMove;

export const getPlayerMovementPath = (state: IGameState): IMovementPath => {
  const status = getPlayerStatus(state);
  const spacesToMove = getPlayerSpacesToMove(state);
  const startingPoint = getPlayerLocation(state);
  const spaces = getWorldMapSpaces(state);

  if (status !== PlayerStatus.Moving) {
    return {
      startingPoint,
      path: [],
      endingPoints: []
    };
  }

  let path: string[] = [];
  const end: string[] = [];

  function isFork(space: ISpace) {
    return Boolean(
      space &&
        space.availableDirections &&
        Object.values(space.availableDirections).filter(Boolean).length > 1
    );
  }

  function isEndpoint(space: ISpace, direction: Directions, movesLeft: number) {
    return (
      !isFork(space) &&
      movesLeft > 0 &&
      space.availableDirections &&
      !space.availableDirections[direction]
    );
  }

  function traverse(
    startingPoint: string,
    direction: Directions,
    movesRemaining: number
  ) {
    let currentSpace = spaces.byId[startingPoint];

    while (movesRemaining && currentSpace.availableDirections) {
      // Reassigning to the next space in the given direction.
      const nextSpaceId = currentSpace.availableDirections[direction];

      if (!nextSpaceId) {
        return;
      }

      currentSpace = spaces.byId[nextSpaceId];

      if (!currentSpace) {
        return;
      }

      // Adding the space to the list of spaces traveled.
      path.push(currentSpace.uuid);

      // Subtract from the remaining moves.
      movesRemaining--;

      if (
        isFork(currentSpace) ||
        isEndpoint(currentSpace, direction, movesRemaining)
      ) {
        [
          Directions.Up,
          Directions.Right,
          Directions.Down,
          Directions.Left
          // eslint-disable-next-line
        ].forEach(direction =>
          traverse(currentSpace.uuid, direction, movesRemaining)
        );
      }
    }

    // No more moves, add space to the end.
    end.push(currentSpace.uuid);

    // Ensure that the path doesn't also include the space.
    path = path.filter(uuid => uuid !== currentSpace.uuid);
  }

  [Directions.Up, Directions.Right, Directions.Down, Directions.Left].forEach(
    direction => traverse(startingPoint, direction, spacesToMove)
  );

  return {
    startingPoint,
    path: Array.from(new Set(path)),
    endingPoints: Array.from(new Set(end))
  };
};

export const getPlayerMovementOptions = (state: IGameState) => {
  const { startingPoint, path, endingPoints } = getPlayerMovementPath(state);
  const spaces = getWorldMapSpaces(state);
  const options: string[][] = [];
  const endingPointLookup = createLookup(endingPoints);
  const currentSpace = spaces.byId[startingPoint];

  function traverse(currentSpace: ISpace, moves: any[]) {
    const { availableDirections = {} } = currentSpace;
    const directionLookup = createLookup(Object.values(availableDirections));
    const availablePathSpaces = path.filter(
      spaceId => directionLookup[spaceId] || endingPointLookup[spaceId]
    );
    const possibleEndingPoints = endingPoints.filter(
      space => directionLookup[space]
    );
    const canEndMovement = possibleEndingPoints.length > 0;

    moves.push(currentSpace.uuid);

    if (canEndMovement) {
      // We've finished!
      if (possibleEndingPoints.length === 1) {
        // There's only one place to end up.
        const [endingSpace] = possibleEndingPoints;

        options.push(moves.concat(endingSpace));
      } else {
        // There's multiple places to end up.
        possibleEndingPoints.forEach(space => {
          options.push(moves.concat(space));
        });
      }
    } else {
      // Our journey continues.
      if (availablePathSpaces.length === 1) {
        // Only one direction to go.
        const [nextSpaceId] = availablePathSpaces;
        const nextSpace = spaces.byId[nextSpaceId];

        traverse(nextSpace, cloneDeep(moves));
      } else {
        // We hit a fork!
        availablePathSpaces.forEach(spaceId => {
          const nextSpace = spaces.byId[spaceId];

          traverse(nextSpace, cloneDeep(moves));
        });
      }
    }
  }

  traverse(currentSpace, []);

  return options;
};
// #endregion

// #region Profiles
export const getProfiles = (state: IGameState) => state.profiles;
// #endregion

// #region World Map
export const getWorldMap = (state: IGameState) => state.worldMap;

export const getWorldMapLayout = (state: IGameState) =>
  getWorldMap(state).layout;

export const getWorldMapSpaces = (state: IGameState) =>
  getWorldMap(state).spaces;

export const getWorldMapDisplay = (state: IGameState) => ({
  layout: getWorldMapLayout(state),
  spaces: getWorldMapSpaces(state)
});

export const getOccupiedSpaces = (state: IGameState): OccupiedSpaces => {
  const profiles = getProfiles(state);
  const spaces = getWorldMapSpaces(state);
  const occupiedSpaces = spaces.all.reduce(
    (prev, next) => {
      prev[next] = [];
      return prev;
    },
    {} as OccupiedSpaces
  );

  profiles.all.forEach(profileId => {
    const profile = profiles.byId[profileId];

    occupiedSpaces[profile.location].push(profile);
  });

  return occupiedSpaces;
};
// #endregion
