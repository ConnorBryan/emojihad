import { IGameState, ISpace } from "../../types";

// #region Meta
export const getRound = (state: IGameState) => state.round;
// #endregion

// #region Player
export const getPlayerProfile = (state: IGameState) =>
  state.profiles.byId[state.player.profileId];

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
// #endregion

// #region Profiles
export const getProfiles = (state: IGameState) => state.profiles;

// #endregion

// #region World Map
export const getWorldMap = (state: IGameState) => state.worldMap;

export const getWorldMapLayout = (state: IGameState) =>
  getWorldMap(state).layout;

export const getWorldMapSpaces = (state: IGameState) => {
  const profiles = getProfiles(state);
  const { all, byId } = getWorldMap(state).spaces;

  return {
    all,
    byId: Object.entries(byId).reduce(
      (prev: Record<string, ISpace>, [key, value]) => {
        prev[key] = {
          ...value,
          profiles: (value.profiles || []).map(
            profileId => profiles.byId[profileId as string]
          )
        };

        return prev;
      },
      {}
    )
  };
};

export const getWorldMapDisplay = (state: IGameState) => ({
  layout: getWorldMapLayout(state),
  spaces: getWorldMapSpaces(state)
});
// #endregion
