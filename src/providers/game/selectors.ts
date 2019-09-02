import { IGameState } from "../../types";

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
