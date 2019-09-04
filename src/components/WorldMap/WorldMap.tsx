import flatten from "lodash.flatten";
import noop from "lodash.noop";
import React from "react";
import styled, { css } from "styled-components";

import { styleWhen } from "../../helpers";
import { ISpace, IMovementPath, OccupiedSpaces } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  layout: ISpace[][];
  playerIsMoving?: boolean;
  movementPath?: IMovementPath;
  occupiedSpaces?: null | OccupiedSpaces;
  onPlayerMove?: (location: string) => void;
}

export default function WorldMap({
  layout,
  playerIsMoving = false,
  movementPath = {
    startingPoint: "",
    path: [],
    endingPoints: []
  },
  onPlayerMove = noop,
  occupiedSpaces = null
}: IProps) {
  return (
    <StyledWorldMap columns={layout[0].length}>
      <div className="-inner">
        {flatten(layout).map(({ uuid, type }) => {
          const isEmpty = type === "⚪️";
          const isStartingPoint =
            playerIsMoving && movementPath.startingPoint === uuid;
          const isEndingPoint =
            playerIsMoving && movementPath.endingPoints.includes(uuid);

          return (
            <StyledSpace
              key={uuid}
              isEmpty={isEmpty}
              isStartingPoint={isStartingPoint}
              isInMovementPath={
                playerIsMoving && movementPath.path.includes(uuid)
              }
              isEndingPoint={isEndingPoint}
              onClick={isEndingPoint ? () => onPlayerMove(uuid) : noop}
            >
              {!isEmpty && <Emoji emoji={type} size={64} />}
              {occupiedSpaces &&
                occupiedSpaces[uuid].map(({ emoji, uuid: profileId }) => (
                  <Emoji
                    key={profileId}
                    emoji={emoji}
                    size={48}
                    className="-occupant"
                  />
                ))}
            </StyledSpace>
          );
        })}
      </div>
    </StyledWorldMap>
  );
}

const StyledWorldMap = styled.div<{ columns: number }>`
  ${({ columns }) =>
    css`
      width: 130vw;
      height: 100vh;
      z-index: 1;
      background: rgba(0, 0, 0, 0.7);
      overflow: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .-inner {
        @keyframes wavering {
          0% {
            transform: rotateX(50deg) rotateY(0deg) rotateZ(15deg);
          }
          50% {
            transform: rotateX(54deg) rotateY(0deg) rotateZ(19deg);
          }
          100% {
            transform: rotateX(50deg) rotateY(0deg) rotateZ(15deg);
          }
        }

        display: grid;
        grid-template-columns: repeat(${columns}, 80px);
        background: darkgreen;
        border: 4px solid black;
        border-radius: 5px;
        padding: 20px;
        animation: wavering 3s infinite;
      }
    `}
`;

const StyledSpace = styled.div<any>`
  ${({ isEmpty, isStartingPoint, isInMovementPath, isEndingPoint }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: tan;
      width: 80px;
      height: 80px;
      transition: background 0.2s ease-in-out;
      position: relative;

      ${styleWhen(
        isStartingPoint,
        css`
          background: blue;
        `
      )}
      ${styleWhen(
        isInMovementPath,
        css`
          background: orange;
        `
      )}
      ${styleWhen(
        isEndingPoint,
        css`
          background: red;
        `
      )}
      ${styleWhen(
        !isEmpty,
        css`
          cursor: pointer;

          &:hover {
            background: #ffe7bf;
          }
        `
      )}
      ${styleWhen(
        isEmpty,
        css`
          background: rgba(0, 0, 0, 0.1);
        `
      )}

      .-occupant {
        position: absolute;
      }
    `}
`;
