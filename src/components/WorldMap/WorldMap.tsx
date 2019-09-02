import flatten from "lodash.flatten";
import React from "react";
import styled, { css } from "styled-components";

import { styleWhen } from "../../helpers";
import {
  ISpace,
  INormalizedEntities,
  IProfile,
  IMovementPath
} from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  layout: ISpace[][];
  spaces: INormalizedEntities<ISpace>;
  playerIsMoving?: boolean;
  movementPath?: IMovementPath;
}

export default function WorldMap({
  layout,
  spaces,
  playerIsMoving = false,
  movementPath = {
    startingPoint: "",
    path: [],
    endingPoint: null
  }
}: IProps) {
  console.log("move path", movementPath);
  return (
    <StyledWorldMap columns={layout[0].length}>
      <div className="-inner">
        {flatten(layout).map(({ uuid }, index) => {
          const { type, profiles } = spaces.byId[uuid];
          const isEmpty = type === "⚪️";

          return (
            <StyledSpace
              key={index}
              isEmpty={isEmpty}
              isStartingPoint={
                playerIsMoving && movementPath.startingPoint === uuid
              }
              isInMovementPath={
                playerIsMoving && movementPath.path.includes(uuid)
              }
              isEndingPoint={
                playerIsMoving && movementPath.endingPoint === uuid
              }
            >
              {!isEmpty && <Emoji emoji={type} size={64} />}
              {(profiles as IProfile[]).map(({ emoji, uuid: profileId }) => (
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
