import times from "lodash.times";

import {
  IGameState,
  PlayerStatus,
  IMovementPath,
  OccupiedSpaces
} from "../../types";
import {
  getSpaceUp,
  getSpaceRight,
  getSpaceDown,
  getSpaceLeft,
  getYX
} from "../../helpers";

// #region Meta
export const getRound = (state: IGameState) => state.round;
// #endregion

// #region Player
export const getPlayer = (state: IGameState) => state.player;

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
  const layout = getWorldMapLayout(state);
  const spaces = getWorldMapSpaces(state);

  if (status !== PlayerStatus.Moving) {
    return {
      startingPoint,
      path: [],
      endingPoint: null
    };
  }

  const path: string[] = [];
  let activeSpaceId = startingPoint;
  let endingPoint = null;

  times(spacesToMove + 1, index => {
    const { y: activeY, x: activeX } = getYX(activeSpaceId, layout);
    const { availableDirections } = spaces.byId[activeSpaceId];

    if (index === spacesToMove) {
      // There are no more spaces left to move; this is the endpoint.
      endingPoint = activeSpaceId;
      return;
    } else if (availableDirections) {
      if (availableDirections.up) {
        const space = getSpaceUp(layout, activeY, activeX)!;
        path.push(space.uuid);
        activeSpaceId = space.uuid;
        return;
      }
      if (availableDirections.right) {
        const space = getSpaceRight(layout, activeY, activeX)!;
        path.push(space.uuid);
        activeSpaceId = space.uuid;
        return;
      }
      if (availableDirections.down) {
        const space = getSpaceDown(layout, activeY, activeX)!;
        path.push(space.uuid);
        activeSpaceId = space.uuid;
        return;
      }
      if (availableDirections.left) {
        const space = getSpaceLeft(layout, activeY, activeX)!;
        path.push(space.uuid);
        activeSpaceId = space.uuid;
        return;
      }
    }
  });

  return {
    startingPoint,
    path,
    endingPoint
  };
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
