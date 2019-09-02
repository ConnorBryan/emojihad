import { storiesOf } from "@storybook/react";
import React from "react";
import Badge from "./Badge";

import { Tint } from "../../types";

storiesOf("Badge", module).add("basic", () =>
  (["none", "red", "blue", "green", "purple"] as Tint[]).map(tint => (
    <Badge
      tint={tint}
      emoji="🧙‍♂️"
      profileName="Connor"
      organizationName="The Guys"
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
