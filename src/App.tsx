import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { IntroductionScreen } from "./screens";

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
          <Route path="/" component={IntroductionScreen} />
        </Switch>
      </Router>
    </Container>
  );
}
