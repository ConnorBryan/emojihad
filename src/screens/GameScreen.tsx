import React, { useState } from "react";
import styled from "styled-components";

import { Badge, DiceRoller, RollPanel, WorldMap } from "../components";
import { map } from "../logic";

export default function GameScreen() {
  const [rolling, updateRolling] = useState(false);

  function handleRoll() {
    updateRolling(false);
  }

  function toggleRolling() {
    updateRolling(!rolling);
  }

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
      <StyledRollWrapper>
        {rolling ? (
          <DiceRoller
            emoji="🧙‍♂️"
            die={{
              sides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }}
            onRoll={handleRoll}
          />
        ) : (
          <RollPanel disabled={rolling} onClick={toggleRolling} />
        )}
      </StyledRollWrapper>
    </>
  );
}

const StyledBadgeWrapper = styled.div<any>`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const StyledRollWrapper = styled.div<any>`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;
