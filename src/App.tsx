import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  GameScreen,
  IntroductionScreen,
  ProfileInformationScreen,
  SelectProfileScreen
} from "./screens";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IntroductionScreen} />
        <Route
          exact
          path="/profile-information"
          component={ProfileInformationScreen}
        />
        <Route exact path="/select-a-profile" component={SelectProfileScreen} />
        <Route exact path="/game" component={GameScreen} />
      </Switch>
    </BrowserRouter>
  );
}
