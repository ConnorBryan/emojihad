export default function prepareActions(actions: any, dispatch: any) {
  return Object.entries(actions).reduce(
    (prev, [key, value]) => {
      prev[key] = (...args) => dispatch((value as any)(...args));
      return prev;
    },
    {} as Record<
      string,
      (...args: any) => (dispatch: any, getState: any) => void
    >
  );
}
