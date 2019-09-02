import { ProfileEmoji } from "../../types";

export const GameActions = {
  RESET_GAME: "RESET_GAME",
  CREATE_NEW_PLAYER: "CREATE_NEW_PLAYER",
  UPDATE_PLAYER_NAME: "UPDATE_PLAYER_NAME",
  UPDATE_PLAYER_ORGANIZATION_NAME: "UPDATE_PLAYER_ORGANIZATION_NAME",
  UPDATE_PLAYER_EMOJI: "UPDATE_PLAYER_EMOJI"
};

interface IResetGameAction {
  type: typeof GameActions.RESET_GAME;
}

interface ICreateNewPlayerAction {
  type: typeof GameActions.CREATE_NEW_PLAYER;
}

interface IUpdatePlayerNameAction {
  type: typeof GameActions.UPDATE_PLAYER_NAME;
  name: string;
}

interface IUpdatePlayerOrganizationNameAction {
  type: typeof GameActions.UPDATE_PLAYER_ORGANIZATION_NAME;
  organizationName: string;
}

interface IUpdatePlayerEmoji {
  type: typeof GameActions.UPDATE_PLAYER_EMOJI;
  emoji: ProfileEmoji;
}

export type GameActions =
  | IResetGameAction
  | ICreateNewPlayerAction
  | IUpdatePlayerNameAction
  | IUpdatePlayerOrganizationNameAction
  | IUpdatePlayerEmoji;

// #region Meta
export const resetGame = (): GameActions => ({
  type: GameActions.RESET_GAME
});

// #endregion

// #region Player
export const createNewPlayer = (): GameActions => ({
  type: GameActions.CREATE_NEW_PLAYER
});

export const updatePlayerName = (name: string): GameActions => ({
  name,
  type: GameActions.UPDATE_PLAYER_NAME
});

export const updatePlayerOrganizationName = (
  organizationName: string
): GameActions => ({
  organizationName,
  type: GameActions.UPDATE_PLAYER_ORGANIZATION_NAME
});

export const updatePlayerEmoji = (emoji: ProfileEmoji): GameActions => ({
  emoji,
  type: GameActions.UPDATE_PLAYER_EMOJI
});
// #endregion
