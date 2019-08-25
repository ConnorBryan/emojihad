import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import DiceRoller from "./DiceRoller";

storiesOf("DiceRoller", module).add("basic", () => {
  function DiceRollerWrapper() {
    const [value, updateValue] = useState(0);
    const [rolled, updateRolled] = useState(false);
    const die = {
      sides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    function handleRoll(value: number) {
      updateValue(value);
      updateRolled(true);
    }

    function handleReroll() {
      updateRolled(false);
    }

    return rolled ? (
      <>
        <p>You rolled {value}!</p>
        <button onClick={handleReroll}>Reroll</button>
      </>
    ) : (
      <DiceRoller emoji="😀" die={die} onRoll={handleRoll} />
    );
  }

  return <DiceRollerWrapper />;
});
