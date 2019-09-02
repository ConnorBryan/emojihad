import { storiesOf } from "@storybook/react";
import React from "react";
import WorldMap from "./WorldMap";

import { worldMap } from "../../logic";

storiesOf("WorldMap", module).add("basic", () => (
  <WorldMap layout={worldMap.layout} spaces={worldMap.spaces} />
));
