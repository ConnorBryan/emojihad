import React, { useEffect } from "react";

import { getRandomEntry, sideLookup } from "../../helpers";
import { Emoji } from "../Emoji";

interface IProps {
  value: number;
  size: number;
  sides: number[];
  rolling?: boolean;
  onUpdateValue?(value: number): void;
}

export default function Die({
  value,
  sides,
  size,
  rolling = false,
  onUpdateValue = () => {}
}: IProps) {
  useEffect(() => {
    let handlingRolling: any;

    function handleRolling() {
      onUpdateValue(getRandomEntry(sides));
    }

    if (rolling) {
      handlingRolling = setInterval(handleRolling, 100);
    }

    return () => {
      clearInterval(handlingRolling);
    };
  }, [onUpdateValue, sides, rolling]);

  return <Emoji emoji={sideLookup[value]} size={size} />;
}
