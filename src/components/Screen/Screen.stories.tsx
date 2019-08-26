import { storiesOf } from "@storybook/react";
import React from "react";
import Screen from "./Screen";

storiesOf("Screen", module).add("basic", () => (
  <Screen
    title="Select a Profile"
    actions={[
      { name: "Back", negative: true, onClick: () => {} },
      { name: "Go", positive: true, onClick: () => {} }
    ]}
  >
    Derp
  </Screen>
));
