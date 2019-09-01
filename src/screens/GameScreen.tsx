import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";

import { Badge, Box, DiceRoller, RollPanel, WorldMap } from "../components";
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
          profileName="Connor"
          organizationName="The Guys"
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
      <StyledModal
        size="tiny"
        centered={false}
        trigger={
          <StyledAlliesButton
            icon
            color="purple"
            size="huge"
            labelPosition="left"
          >
            <Icon name="heart" />
            Allies
          </StyledAlliesButton>
        }
      >
        <Modal.Content>
          <Modal.Description>
            <Box emoji="💟" title="Allies" collection={["😀"]} />
          </Modal.Description>
        </Modal.Content>
      </StyledModal>
      <StyledModal
        size="tiny"
        centered={false}
        trigger={
          <StyledResourcesButton
            icon
            color="grey"
            size="huge"
            labelPosition="left"
          >
            <Icon name="box" />
            Resources
          </StyledResourcesButton>
        }
      >
        <Modal.Content>
          <Modal.Description>
            <Box emoji="📦" title="Resources" collection={["🗡️"]} />
          </Modal.Description>
        </Modal.Content>
      </StyledModal>
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

const StyledAlliesButton = styled(Button)<any>`
  position: fixed !important;
  bottom: 10px;
  left: 10px;
  text-transform: uppercase !important;
  letter-spacing: 0.7px;
`;

const StyledResourcesButton = styled(Button)<any>`
  position: fixed !important;
  bottom: 10px;
  left: 200px;
  text-transform: uppercase !important;
  letter-spacing: 0.7px;
`;

const StyledModal = styled(Modal)<any>`
  background: transparent !important;

  .content,
  .description {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: transparent !important;
  }
`;
