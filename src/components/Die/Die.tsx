import React, { useEffect } from "react";

import { getRandomEntry, sideLookup } from "../../helpers";

interface IProps {
  value: number;
  sides: number[];
  rolling?: boolean;
  onUpdateValue?(value: number): void;
}

export default function Die({
  value,
  sides,
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

  return (
    <span role="img" aria-label={`${sides.length}-sides die`}>
      {sideLookup[value]}
    </span>
  );
}
