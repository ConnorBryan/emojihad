import produce from "immer";
import uuid from "uuid/v4";

import { IGameState } from "../../types";
import { makeReducer } from "../helpers";
import { GameActions } from "./actions";

export const initialState: IGameState = {
  player: {
    uuid: "",
    profileId: ""
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
  round: 0
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
        cash: 10,
        stars: 0,
        experience: 0,
        rounds: 0
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
    })
});
