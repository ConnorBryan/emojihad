import produce from "immer";
import uuid from "uuid/v4";

import config from "../../config";
import { IGameState, PlayerStatus } from "../../types";
import { worldMap } from "../../logic";
import { makeReducer } from "../helpers";
import { GameActions } from "./actions";

export const initialState: IGameState = {
  player: {
    dieRoll: null,
    uuid: "",
    profileId: "",
    status: PlayerStatus.Waiting,
    spacesToMove: 0
  },
  profiles: {
    all: [],
    byId: {}
  },
  allies: {
    all: [],
    byId: {}
  },
  resources: {
    all: [],
    byId: {}
  },
  round: 0,
  timer: {
    startedAt: null,
    remaining: config.ROUND_TIME
  },
  worldMap
};

export default makeReducer<IGameState>(initialState, {
  [GameActions.RESET_GAME]: () => initialState,

  [GameActions.CREATE_NEW_PLAYER]: state =>
    produce(state, draft => {
      // Assign an identifier.
      draft.player.uuid = uuid();

      // Generate an empty profile.
      draft.player.profileId = uuid();
      draft.profiles.all.push(draft.player.profileId);
      draft.profiles.byId[draft.player.profileId] = {
        uuid: draft.player.profileId,
        tint: "none",
        name: "",
        organizationName: "",
        emoji: "👶",
        allies: [],
        cash: 2,
        stars: 0,
        experience: 0,
        rounds: 0,
        location: draft.worldMap.entryPoint
      };
    }),

  [GameActions.UPDATE_PLAYER_NAME]: (state, { name }: any) =>
    produce(state, draft => {
      draft.profiles.byId[draft.player.profileId].name = name;
    }),

  [GameActions.UPDATE_PLAYER_ORGANIZATION_NAME]: (
    state,
    { organizationName }: any
  ) =>
    produce(state, draft => {
      draft.profiles.byId[
        draft.player.profileId
      ].organizationName = organizationName;
    }),

  [GameActions.UPDATE_PLAYER_EMOJI]: (state, { emoji }: any) =>
    produce(state, draft => {
      draft.profiles.byId[draft.player.profileId].emoji = emoji;
    }),

  [GameActions.UPDATE_PLAYER_STATUS]: (state, { status }: any) =>
    produce(state, draft => {
      draft.player.status = status;
    }),

  [GameActions.UPDATE_PLAYER_SPACES_TO_MOVE]: (state, { spacesToMove }: any) =>
    produce(state, draft => {
      draft.player.spacesToMove = spacesToMove;
    }),

  [GameActions.UPDATE_PLAYER_LOCATION]: (state, { location }: any) =>
    produce(state, draft => {
      draft.profiles.byId[draft.player.profileId].location = location;
    }),

  [GameActions.UPDATE_PLAYER_CASH]: (state, { amount }: any) =>
    produce(state, draft => {
      const userProfile = draft.profiles.byId[draft.player.profileId];
      const newAmount = Math.max(0, userProfile.cash + amount);

      userProfile.cash = newAmount;
    }),

  [GameActions.UPDATE_PLAYER_DIE_ROLL]: (state, { dieRoll }: any) =>
    produce(state, draft => {
      draft.player.dieRoll = dieRoll;
    }),

  [GameActions.UPDATE_TIMER]: (state, { timer }: any) =>
    produce(state, draft => {
      draft.timer = timer;
    })
});
