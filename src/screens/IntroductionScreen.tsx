import React from "react";
import styled from "styled-components";

import { Screen } from "../components";

export default function IntroductionScreen() {
  return (
    <Screen
      title="Emojihad"
      actions={[
        {
          name: "Play Now",
          positive: true,
          onClick: () => {}
        }
      ]}
    >
      <StyledIntroductionScreen />
    </Screen>
  );
}

const StyledIntroductionScreen = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("http://placehold.it/800x800");
  background-size: cover;
  background-repeat: no-repeat;
`;
