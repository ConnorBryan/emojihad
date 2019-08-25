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
                  className="-spaceWrapper"
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
    </StyledWorldMap>
  );
}

const StyledWorldMap = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  overflow: auto;

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
      background: white;
      width: 80px;
      height: 80px;
      padding: 12px;

      ${styleWhen(
        !isEmpty,
        css`
        ${styleWhen(
          hasUpBorder,
          css`
            border-top: 2px solid;
          `
        )}
      ${styleWhen(
        hasRightBorder,
        css`
          border-right: 2px solid;
        `
      )}
      ${styleWhen(
        hasDownBorder,
        css`
          border-bottom: 2px solid;
        `
      )}
      ${styleWhen(
        hasLeftBorder,
        css`
          border-left: 2px solid;
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
