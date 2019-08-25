import { storiesOf } from "@storybook/react";
import React from "react";
import WorldMap from "./WorldMap";

import { map } from "../../logic";

storiesOf("WorldMap", module).add("basic", () => <WorldMap map={map} />);
