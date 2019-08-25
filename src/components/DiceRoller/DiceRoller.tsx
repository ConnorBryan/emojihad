import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { getRandomEntry, styleWhen } from "../../helpers";
import { Emoji as EmojiType, IDie } from "../../types";
import { Die } from "../Die";
import { Emoji } from "../Emoji";

interface IProps {
  emoji: EmojiType;
  die: IDie;
  onRoll(value: number): void;
}

export default function DiceRoller({ emoji, die, onRoll }: IProps) {
  const [value, updateValue] = useState(getRandomEntry(die.sides));
  const [rolling, updateRolling] = useState(true);
  const [jumping, updateJumping] = useState(false);
  const [jumped, updateJumped] = useState(false);

  function handleJump() {
    updateJumping(true);

    setTimeout(() => {
      updateRolling(false);
    }, 500);

    setTimeout(() => {
      updateJumping(false);
      updateJumped(true);
    }, 1000);
  }

  useEffect(() => {
    if (!rolling) {
      setTimeout(() => {
        onRoll(value);
      }, 500);
    }
  }, [value, rolling, onRoll]);

  return (
    <StyledDiceRoller jumping={jumping}>
      <Die
        value={value}
        sides={die.sides}
        rolling={rolling}
        onUpdateValue={updateValue}
      />
      <div className="-emojiWrapper">
        <span className="-emojiWrapper-emoji" role="img" aria-label="Smiley">
          {emoji}
        </span>
      </div>
      <button onClick={handleJump} disabled={jumping || jumped}>
        <Emoji emoji="👊" />
        <Emoji emoji="🎲" />
      </button>
    </StyledDiceRoller>
  );
}

const StyledDiceRoller = styled.div<any>`
  ${props => {
    const { jumping } = props;

    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 3rem;

      .-emojiWrapper {
        display: flex;
        justify-content: center;
        position: relative;
        height: 2rem;

        &-emoji {
          @keyframes jumping {
            0% {
              transform: scale(1, 1);
              bottom: 0;
            }
            10% {
              transform: scale(1.1, 0.9);
            }
            30% {
              transform: scale(0.9, 1.1);
            }
            50% {
              transform: scale(1.05, 0.95);
              bottom: 50%;
            }
            57% {
              transform: scale(1, 1);
            }
            64% {
              transform: scale(1.1, 0.9);
            }
            93% {
              transform: scale(1.05, 0.95);
            }
            100% {
              transform: scale(1, 1);
              bottom: 0;
            }
          }

          position: absolute;
          bottom: 0;

          ${styleWhen(
            jumping,
            css`
              animation: jumping 1s forwards;
            `
          )}
        }
      }
    `;
  }}
`;
/* === */
