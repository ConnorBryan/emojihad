import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { IntroductionScreen, SelectProfileScreen } from "./screens";

/**
 * 1. Introduction screen.
 * 2. Profile selection screen.
 * 3. Game screen.
 */

export default function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={IntroductionScreen} />
          <Route
            exact
            path="/select-a-profile"
            component={SelectProfileScreen}
          />
        </Switch>
      </Router>
    </Container>
  );
}
