import differenceInSeconds from "date-fns/differenceInSeconds";

import config from "../../config";
import {
  findFixture,
  getNumber,
  isDirectionalSpace,
  sleep
} from "../../helpers";
import { IPlayerState, PlayerStatus, IProfile, ISpace } from "../../types";
import {
  getTimer,
  getWorldMapSpaces,
  getPlayerMovementOptions,
  getPlayer,
  getPlayerProfile,
  getWorldMapLayout
} from "./selectors";

export const GameActions = {
  RESET_GAME: "RESET_GAME",
  CREATE_NEW_PLAYER: "CREATE_NEW_PLAYER",
  UPDATE_PLAYER: "UPDATE_PLAYER",
  UPDATE_PLAYER_PROFILE: "UPDATE_PLAYER_PROFILE",
  UPDATE_TIMER: "UPDATE_TIMER"
};

export type GameActions = any;

// #region Meta
export const resetGame = (): GameActions => ({
  type: GameActions.RESET_GAME
});

export const updateTimer = (timer: {
  startedAt: null | Date;
  remaining: number;
}): GameActions => ({
  timer,
  type: GameActions.UPDATE_TIMER
});
// #endregion

// #region Player
export const createNewPlayer = (): GameActions => ({
  type: GameActions.CREATE_NEW_PLAYER
});

export const updatePlayer = (values: Partial<IPlayerState>) => ({
  values,
  type: GameActions.UPDATE_PLAYER
});

export const updatePlayerProfile = (values: Partial<IProfile>) => ({
  values,
  type: GameActions.UPDATE_PLAYER_PROFILE
});

export const playerRolledDice = (value: number) =>
  updatePlayer({
    status: PlayerStatus.Moving,
    dieRoll: value,
    hasRolled: true,
    spacesToMove: value
  });

export const clearPlayerDiceRoll = () => updatePlayer({ dieRoll: null });
// #endregion

// #region Thunks
export let tickingTimer: any;

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

  function tick() {
    dispatch(tickTimer());
    tickingTimer = setTimeout(tick, 1000);
  }

  tickingTimer = setTimeout(tick, 1000);
};

export const gameStopped = () => () => clearTimeout(tickingTimer);

export const handlePlayerMove = (endingPoint: string) => (
  dispatch: any,
  getState: any
) => {
  const state = getState();
  const movementOptions = getPlayerMovementOptions(state);
  const { dieRoll } = getPlayer(state);

  // Find the movement option that correlates with the ending point.
  const potentialMovementOptions = movementOptions.filter(
    option =>
      option.length - 1 === dieRoll && option.slice(-1)[0] === endingPoint
  );

  if (potentialMovementOptions.length === 1) {
    // There's only one path that could have led to the ending point, let's take it.
    const [selectedMovementOption] = potentialMovementOptions;

    dispatch(playerMoved(selectedMovementOption));
  } else {
    // There's multiple paths that could have led to the ending point.
    // Show each and have the user confirm.
    alert("Multiple ending options detected.");
  }
};

export const continueMovement = (movementOption: string[]) => async (
  dispatch: any,
  getState: any
) => {
  const state = getState();
  const layout = getWorldMapLayout(state);
  const spaces = getWorldMapSpaces(state);

  while (movementOption.length > 0) {
    const nextSpaceId = movementOption.shift() as string;
    const nextSpace = spaces.byId[nextSpaceId];

    dispatch(updatePlayerProfile({ location: nextSpaceId }));

    if (isDirectionalSpace(nextSpace.type)) {
      const fixture = findFixture(nextSpace, layout);

      const afterInteraction = () => dispatch(continueMovement(movementOption));

      return dispatch(interactWithFixture(fixture as any, afterInteraction));
    }

    await sleep(150);
  }

  dispatch(clearPlayerDiceRoll());
  dispatch(handleMovementOutcome());
};

export const playerMoved = (movementOption: string[]) => (dispatch: any) => {
  dispatch(updatePlayer({ status: PlayerStatus.Waiting }));
  dispatch(continueMovement(movementOption));
};

export const interactWithFixture = (
  fixture: ISpace,
  afterInteraction: () => void
) => async (dispatch: any) => {
  await sleep(0);
  alert(`Interaction with ${fixture.type}`);
  afterInteraction();
};

export const handleMovementOutcome = () => (dispatch: any, getState: any) => {
  const state = getState();
  const spaces = getWorldMapSpaces(state);
  const { location } = getPlayerProfile(state);
  const { type } = spaces.byId[location];
  const outcomes: Record<string, () => void> = {
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
    }
  };
  const handleOutcome = outcomes[type];

  if (handleOutcome) {
    handleOutcome();
  } else {
    throw new Error(
      `Somehow, some way, some idiot landed on an unreachable space.`
    );
  }
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

export const updatePlayerCash = (amount: number) => (
  dispatch: any,
  getState: any
): GameActions => {
  const { cash } = getPlayerProfile(getState());
  const newAmount = Math.max(0, cash + amount);

  dispatch(updatePlayerProfile({ cash: newAmount }));
};
// #endregion

export const actions = {
  resetGame,
  updateTimer,
  createNewPlayer,
  updatePlayerProfile,
  playerRolledDice,
  handlePlayerMove,
  clearPlayerDiceRoll,
  gameStarted,
  gameStopped,
  handleMovementOutcome,
  tickTimer,
  updatePlayerCash
};
