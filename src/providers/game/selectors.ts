import { IGameState } from "../../types";

export const getPlayerProfile = (state: IGameState) =>
  state.profiles.byId[state.player.profileId];
