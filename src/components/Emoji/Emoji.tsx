import React from "react";
import { Emoji as EmojiType } from "../../types";

interface IProps {
  emoji: EmojiType;
}

export default function Emoji({ emoji }: IProps) {
  return (
    <span role="img" aria-label="Emoji">
      {emoji}
    </span>
  );
}
