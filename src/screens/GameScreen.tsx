import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";

import { Badge, Box, DiceRoller, RollPanel, WorldMap } from "../components";
import {
  getOccupiedSpaces,
  getPlayerBadgeStats,
  getPlayerIsMoving,
  getPlayerMovementPath,
  getWorldMapDisplay,
  playerMoved,
  playerRolledDice,
  updatePlayerLocation
} from "../providers";

export default function GameScreen() {
  const {
    name,
    organizationName,
    emoji,
    experience,
    allies,
    rounds,
    cash,
    stars
  } = useSelector(getPlayerBadgeStats);
  const dispatch = useDispatch();
  const occupiedSpaces = useSelector(getOccupiedSpaces);
  const { layout } = useSelector(getWorldMapDisplay);
  const playerIsMoving = useSelector(getPlayerIsMoving);
  const movementPath = useSelector(getPlayerMovementPath);
  const [rolling, updateRolling] = useState(false);

  function handlePlayerMove(location: string) {
    dispatch(updatePlayerLocation(location));
    dispatch(playerMoved());
  }

  function handleRoll(result: number) {
    dispatch(playerRolledDice(result));
    updateRolling(false);
  }

  function toggleRolling() {
    updateRolling(!rolling);
  }

  return (
    <>
      <WorldMap
        layout={layout}
        playerIsMoving={playerIsMoving}
        movementPath={movementPath}
        onPlayerMove={handlePlayerMove}
        occupiedSpaces={occupiedSpaces}
      />
      <StyledBadgeWrapper>
        <Badge
          tint="red"
          emoji={emoji}
          profileName={name}
          organizationName={organizationName}
          counts={{
            experience,
            allies,
            rounds,
            cash,
            stars
          }}
        />
      </StyledBadgeWrapper>
      <StyledRollWrapper>
        {rolling ? (
          <DiceRoller
            emoji={emoji}
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
