import { storiesOf } from "@storybook/react";
import React from "react";
import EntityCard from "./EntityCard";

storiesOf("EntityCard", module).add("basic", () => (
  <EntityCard
    title="Challenge Space"
    kind="⚫️"
    emoji="🆚"
    description={[
      "Landing on this space initiates a battle with everyone else currently on the space.",
      "If no one else is on this space, nothing happens."
    ]}
  />
));
