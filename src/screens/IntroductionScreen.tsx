import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useRouter from "use-react-router";

import { Screen } from "../components";
import { createNewPlayer, resetGame } from "../providers";

export default function IntroductionScreen() {
  const dispatch = useDispatch();
  const { history } = useRouter();

  function handlePlayNow() {
    dispatch(resetGame());
    dispatch(createNewPlayer());
    history.push("/profile-information");
  }

  return (
    <Screen
      title="Emojihad"
      actions={[
        {
          name: "Play Now",
          positive: true,
          onClick: handlePlayNow
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
