import { storiesOf } from "@storybook/react";
import React from "react";
import Emoji from "./Emoji";

storiesOf("Emoji", module).add("basic", () => <Emoji emoji="😀" />);
