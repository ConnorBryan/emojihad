import { Action } from "redux";

export default function makeReducer<State>(
  initialState: State,
  handlers: Record<string, (state: State, action: Action) => State>
) {
  return function reducer(state = initialState, action: Action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
