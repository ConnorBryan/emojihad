export function createLookup(stuff: string[]) {
  return stuff.reduce(
    (prev, next) => {
      prev[next] = true;
      return prev;
    },
    {} as Record<string, true>
  );
}

export function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}
