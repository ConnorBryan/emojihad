import { sleep } from "../../helpers";
import { ProfileEmoji, PlayerStatus } from "../../types";

export const GameActions = {
  RESET_GAME: "RESET_GAME",
  CREATE_NEW_PLAYER: "CREATE_NEW_PLAYER",
  UPDATE_PLAYER_NAME: "UPDATE_PLAYER_NAME",
  UPDATE_PLAYER_ORGANIZATION_NAME: "UPDATE_PLAYER_ORGANIZATION_NAME",
  UPDATE_PLAYER_EMOJI: "UPDATE_PLAYER_EMOJI",
  UPDATE_PLAYER_STATUS: "UPDATE_PLAYER_STATUS",
  UPDATE_PLAYER_SPACES_TO_MOVE: "UPDATE_PLAYER_SPACES_TO_MOVE",
  UPDATE_PLAYER_LOCATION: "UPDATE_PLAYER_LOCATION"
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

interface IUpdatePlayerStatus {
  type: typeof GameActions.UPDATE_PLAYER_STATUS;
  status: PlayerStatus;
}

interface IUpdatePlayerSpacesToMove {
  type: typeof GameActions.UPDATE_PLAYER_SPACES_TO_MOVE;
  spacesToMove: number;
}

interface IUpdatePlayerLocation {
  type: typeof GameActions.UPDATE_PLAYER_LOCATION;
  location: string;
}

export type GameActions =
  | IResetGameAction
  | ICreateNewPlayerAction
  | IUpdatePlayerNameAction
  | IUpdatePlayerOrganizationNameAction
  | IUpdatePlayerEmoji
  | IUpdatePlayerStatus
  | IUpdatePlayerSpacesToMove
  | IUpdatePlayerLocation;

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

export const updatePlayerStatus = (status: PlayerStatus): GameActions => ({
  status,
  type: GameActions.UPDATE_PLAYER_STATUS
});

export const updatePlayerSpacesToMove = (
  spacesToMove: number
): GameActions => ({
  spacesToMove,
  type: GameActions.UPDATE_PLAYER_SPACES_TO_MOVE
});

export const updatePlayerLocation = (location: string): GameActions => ({
  location,
  type: GameActions.UPDATE_PLAYER_LOCATION
});
// #endregion

// #region Thunks
export const playerRolledDice = (value: number) => (dispatch: any) => {
  dispatch(updatePlayerStatus(PlayerStatus.Moving));
  dispatch(updatePlayerSpacesToMove(value));
};

export const playerMoved = (movementOption: string[]) => async (
  dispatch: any
) => {
  dispatch(updatePlayerStatus(PlayerStatus.Waiting));

  for (const spaceId of movementOption) {
    dispatch(updatePlayerLocation(spaceId));

    await sleep(150);
  }
};
// #endregion
