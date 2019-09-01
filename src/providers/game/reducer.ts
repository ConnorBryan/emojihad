export const count = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENET":
      return state + 1;
    default:
      return state;
  }
};

export default count;
