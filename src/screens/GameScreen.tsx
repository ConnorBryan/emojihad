import React from "react";
import styled from "styled-components";

import { Badge, RollPanel, WorldMap } from "../components";
import { map } from "../logic";

export default function GameScreen() {
  return (
    <>
      <WorldMap map={map} />
      <StyledBadgeWrapper>
        <Badge
          tint="❤️"
          emoji="🧙‍♂️"
          name="Connor"
          counts={{
            experience: 100,
            allies: 5,
            rounds: 10,
            cash: 15,
            stars: 20
          }}
        />
      </StyledBadgeWrapper>
      <StyledRollPanelWrapper>
        <RollPanel />
      </StyledRollPanelWrapper>
    </>
  );
}

const StyledBadgeWrapper = styled.div<any>`
  position: fixed !important;
  top: 10px;
  right: 10px;
`;

const StyledRollPanelWrapper = styled.div<any>`
  position: fixed !important;
  right: 10px;
  bottom: 10px;
`;
