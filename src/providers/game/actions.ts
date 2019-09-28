import differenceInSeconds from "date-fns/differenceInSeconds";

import config from "../../config";
import { getNumber, sleep } from "../../helpers";
import { ProfileEmoji, PlayerStatus, Space } from "../../types";
import { getPlayerLocation, getTimer, getWorldMapSpaces } from "./selectors";

export const GameActions = {
  RESET_GAME: "RESET_GAME",
  CREATE_NEW_PLAYER: "CREATE_NEW_PLAYER",
  UPDATE_PLAYER_NAME: "UPDATE_PLAYER_NAME",
  UPDATE_PLAYER_ORGANIZATION_NAME: "UPDATE_PLAYER_ORGANIZATION_NAME",
  UPDATE_PLAYER_EMOJI: "UPDATE_PLAYER_EMOJI",
  UPDATE_PLAYER_STATUS: "UPDATE_PLAYER_STATUS",
  UPDATE_PLAYER_SPACES_TO_MOVE: "UPDATE_PLAYER_SPACES_TO_MOVE",
  UPDATE_PLAYER_LOCATION: "UPDATE_PLAYER_LOCATION",
  UPDATE_PLAYER_CASH: "UPDATE_PLAYER_CASH",
  UPDATE_PLAYER_DIE_ROLL: "UPDATE_PLAYER_DIE_ROLL",
  UPDATE_TIMER: "UPDATE_TIMER"
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

interface IUpdatePlayerCash {
  type: typeof GameActions.UPDATE_PLAYER_CASH;
  amount: number;
}

interface IUpdatePlayerDieRoll {
  type: typeof GameActions.UPDATE_PLAYER_DIE_ROLL;
  dieRoll: null | number;
}

interface IUpdateTimer {
  type: typeof GameActions.UPDATE_TIMER;
  timer: {
    startedAt: null | Date;
    remaining: number;
  };
}

export type GameActions =
  | IResetGameAction
  | ICreateNewPlayerAction
  | IUpdatePlayerNameAction
  | IUpdatePlayerOrganizationNameAction
  | IUpdatePlayerEmoji
  | IUpdatePlayerStatus
  | IUpdatePlayerSpacesToMove
  | IUpdatePlayerLocation
  | IUpdatePlayerCash
  | IUpdatePlayerDieRoll
  | IUpdateTimer;

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

export const updatePlayerCash = (amount: number): GameActions => ({
  type: GameActions.UPDATE_PLAYER_CASH,
  amount
});

export const updatePlayerDieRoll = (dieRoll: null | number): GameActions => ({
  dieRoll,
  type: GameActions.UPDATE_PLAYER_DIE_ROLL
});

export const clearPlayerDiceRoll = () => updatePlayerDieRoll(null);

export const updateTimer = (timer: {
  startedAt: null | Date;
  remaining: number;
}): GameActions => ({
  timer,
  type: GameActions.UPDATE_TIMER
});
// #endregion

// #region Thunks
export const gameStarted = () => (dispatch: any, getState: any) => {
  const state = getState();
  const timer = getTimer(state);
  const remaining = Math.max(
    config.ROUND_TIME -
      (timer.startedAt
        ? differenceInSeconds(new Date(), new Date(timer.startedAt))
        : 0),
    0
  );

  dispatch(
    updateTimer({
      startedAt: timer.startedAt || new Date(),
      remaining
    })
  );
};

export const playerRolledDice = (value: number) => (dispatch: any) => {
  dispatch(updatePlayerDieRoll(value));
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

  dispatch(clearPlayerDiceRoll());
  dispatch(handleMovementOutcome());
};

export const handleMovementOutcome = () => (dispatch: any, getState: any) => {
  const state = getState();
  const spaces = getWorldMapSpaces(state);
  const playerLocation = getPlayerLocation(state);
  const { type } = spaces.byId[playerLocation];
  const outcomes: Record<Space, () => void> = {
    "🔵"() {
      const gain = getNumber(
        config.MINIMUM_BLUE_SPACE_CASH_GAIN,
        config.MAXIMUM_BLUE_SPACE_CASH_GAIN
      );

      dispatch(updatePlayerCash(gain));
    },
    "🔴"() {
      const loss = getNumber(
        config.MAXIMUM_RED_SPACE_CASH_LOSS,
        config.MINIMUM_RED_SPACE_CASH_LOSS
      );

      dispatch(updatePlayerCash(loss));
    },
    "⚪️"() {
      throw new Error(
        `Somehow, some way, some idiot landed on an unreachable space.`
      );
    }
  };
  const handleOutcome = outcomes[type];

  handleOutcome();
};

export const tickTimer = () => (dispatch: any, getState: any) => {
  const state = getState();
  const { startedAt, remaining } = getTimer(state);

  if (!startedAt || remaining <= 0) {
    return;
  }

  dispatch(
    updateTimer({
      startedAt,
      remaining:
        config.ROUND_TIME - differenceInSeconds(new Date(), new Date(startedAt))
    })
  );
};
// #endregion
