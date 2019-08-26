import React from "react";
import styled, { css } from "styled-components";

import {
  getSpaceUp,
  getSpaceRight,
  getSpaceDown,
  getSpaceLeft,
  styleWhen
} from "../../helpers";
import { WorldMap as WorldMapType } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  map: WorldMapType;
}

export default function WorldMap({ map }: IProps) {
  return (
    <StyledWorldMap>
      <div className="-inner">
        {map.map((row, yIndex) => {
          return (
            <div key={yIndex} className="-spaceRowWrapper">
              {row.map(({ uuid, space }, xIndex) => {
                const hasUpBorder = !getSpaceUp(map, yIndex, xIndex);
                const hasRightBorder = !getSpaceRight(map, yIndex, xIndex);
                const hasDownBorder = !getSpaceDown(map, yIndex, xIndex);
                const hasLeftBorder = !getSpaceLeft(map, yIndex, xIndex);
                const isEmpty = space === "⚪️";

                return (
                  <StyledSpace
                    key={uuid}
                    isEmpty={isEmpty}
                    hasUpBorder={hasUpBorder}
                    hasRightBorder={hasRightBorder}
                    hasDownBorder={hasDownBorder}
                    hasLeftBorder={hasLeftBorder}
                  >
                    {!isEmpty && (
                      <Emoji className="-space" emoji={space} size={64} />
                    )}
                  </StyledSpace>
                );
              })}
            </div>
          );
        })}
      </div>
    </StyledWorldMap>
  );
}

const StyledWorldMap = styled.div<any>`
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

    background: darkgreen;
    border: 4px solid black;
    border-radius: 5px;
    padding: 20px;
    animation: wavering 3s infinite;
  }
  .-spaceRowWrapper {
    display: flex;
  }
`;

const StyledSpace = styled.div<any>`
  ${props => {
    const {
      hasUpBorder,
      hasRightBorder,
      hasDownBorder,
      hasLeftBorder,
      isEmpty
    } = props;

    return css`
      flex: 0 0 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: tan;
      width: 80px;
      height: 80px;
      padding: 12px;
      transition: background 0.2s ease-in-out;

      ${styleWhen(
        !isEmpty,
        css`
          cursor: pointer;
          
          &:hover {
            background: #ffe7bf;
          } 
          ${styleWhen(
            hasUpBorder,
            css`
              border-top: 4px solid;
            `
          )}
          ${styleWhen(
            hasRightBorder,
            css`
              border-right: 4px solid;
            `
          )}
          ${styleWhen(
            hasDownBorder,
            css`
              border-bottom: 4px solid;
            `
          )}
          ${styleWhen(
            hasLeftBorder,
            css`
              border-left: 4px solid;
            `
          )}
        `
      )}
      ${styleWhen(
        isEmpty,
        css`
          background: rgba(0, 0, 0, 0.1);
        `
      )}
    `;
  }}
`;
