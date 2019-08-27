import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GameScreen, IntroductionScreen, SelectProfileScreen } from "./screens";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroductionScreen} />
        <Route exact path="/select-a-profile" component={SelectProfileScreen} />
        <Route exact path="/game" component={GameScreen} />
      </Switch>
    </Router>
  );
}
