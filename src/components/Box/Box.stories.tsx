import { storiesOf } from "@storybook/react";
import React from "react";
import Box from "./Box";

storiesOf("Box", module).add("basic", () => (
  <Box emoji="💟" title="Allies" collection={["😀"]} />
));
