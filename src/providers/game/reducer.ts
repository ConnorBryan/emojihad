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
    hasRolled: false,
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

  [GameActions.UPDATE_TIMER]: (state, { timer }: any) =>
    produce(state, draft => {
      draft.timer = timer;
    }),

  [GameActions.UPDATE_PLAYER]: (state, { values }: any) =>
    produce(state, draft => {
      draft.player = {
        ...draft.player,
        ...values
      };
    }),

  [GameActions.UPDATE_PLAYER_PROFILE]: (state, { values }: any) =>
    produce(state, draft => {
      draft.profiles.byId[draft.player.profileId] = {
        ...draft.profiles.byId[draft.player.profileId],
        ...values
      };
    })
});
