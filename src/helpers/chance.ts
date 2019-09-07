import Chance from "chance";

const chance = new Chance();

export function getRandomEntry<T>(array: T[]): T {
  return array[chance.integer({ min: 0, max: array.length - 1 })];
}

export function getNumber(min: number, max: number) {
  return chance.integer({ min, max });
}
