import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Die from "./Die";

storiesOf("Die", module)
  .add("basic", () => <Die value={0} sides={[1, 2, 3, 4, 5]} size={64} />)
  .add("rolling", () => {
    function DieWrapper() {
      const [value, updateValue] = useState(0);

      return (
        <Die
          value={value}
          sides={[1, 2, 3, 4, 5]}
          size={64}
          rolling={true}
          onUpdateValue={updateValue}
        />
      );
    }

    return <DieWrapper />;
  });
