import { storiesOf } from "@storybook/react";
import React from "react";
import Badge from "./Badge";

import { Tint } from "../../types";

storiesOf("Badge", module).add("basic", () =>
  (["❤️", "💙", "💚", "💜"] as Tint[]).map(tint => (
    <Badge
      tint={tint}
      emoji="🧙‍♂️"
      name="Connor"
      counts={{
        experience: 100,
        allies: 5,
        rounds: 10,
        cash: 15,
        stars: 20
      }}
    />
  ))
);
