import chunk from "lodash.chunk";

import { Emoji as EmojiType } from "../types";

export function fillBox(collection: ("" | EmojiType)[]) {
  const filledCollection = [...collection];

  while (filledCollection.length < 9) {
    filledCollection.push("");
  }

  const remainder = filledCollection.length % 3;

  if (remainder) {
    Array.from({ length: remainder }, () => filledCollection.push(""));
  }

  return chunk(filledCollection, 3);
}
