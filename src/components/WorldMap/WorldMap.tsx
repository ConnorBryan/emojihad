import flatten from "lodash.flatten";
import React from "react";
import styled, { css } from "styled-components";

import { styleWhen } from "../../helpers";
import { WorldMap as WorldMapType } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  map: WorldMapType;
}

export default function WorldMap({ map }: IProps) {
  return (
    <StyledWorldMap columns={map[0].length}>
      <div className="-inner">
        {flatten(map).map(({ space }, index) => {
          const isEmpty = space === "⚪️";

          return (
            <StyledSpace key={index} isEmpty={isEmpty}>
              {!isEmpty && <Emoji emoji={space} size={64} />}
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
  ${({ isEmpty }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: tan;
      width: 80px;
      height: 80px;
      transition: background 0.2s ease-in-out;

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
    `}
`;
