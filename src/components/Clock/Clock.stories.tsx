import { storiesOf } from "@storybook/react";
import React from "react";
import Clock from "./Clock";

storiesOf("Clock", module).add("basic", () => (
  <Clock time={new Date().getTime()} />
));
