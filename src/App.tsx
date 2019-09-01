import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./components";
import {
  GameScreen,
  IntroductionScreen,
  ProfileInformationScreen,
  SelectProfileScreen
} from "./screens";

export default function App() {
  const condition = false;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IntroductionScreen} />
        <Route
          exact
          path="/profile-information"
          component={ProfileInformationScreen}
        />
        <ProtectedRoute
          exact
          condition={condition}
          path="/select-a-profile"
          fallbackPath="/profile-information"
          component={SelectProfileScreen}
        />
        <Route exact path="/game" component={GameScreen} />
      </Switch>
    </BrowserRouter>
  );
}
