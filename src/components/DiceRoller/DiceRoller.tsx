import React, { useState, useEffect } from "react";
import { Button, Segment } from "semantic-ui-react";
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
  const [showingExplosion, updateShowingExplosion] = useState(false);
  const [jumped, updateJumped] = useState(false);

  function handleJump() {
    updateJumping(true);

    setTimeout(() => {
      updateRolling(false);
      updateShowingExplosion(true);
    }, 500);

    setTimeout(() => {
      updateShowingExplosion(false);
    }, 650);

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
      <div className="-dieWrapper">
        <Die
          size={64}
          value={value}
          sides={die.sides}
          rolling={rolling}
          onUpdateValue={updateValue}
        />
        {showingExplosion && (
          <Emoji className="-explosion" emoji="💥" size={48} />
        )}
      </div>
      <div className="-emojiWrapper">
        <Emoji className="-emoji" emoji={emoji} size={64} />
      </div>
      <Button
        className="-button"
        primary={true}
        onClick={handleJump}
        disabled={jumping || jumped}
      >
        <Emoji emoji="👊" size={24} />
        <Emoji emoji="🎲" size={24} />
      </Button>
    </StyledDiceRoller>
  );
}

const StyledDiceRoller = styled(Segment)<any>`
  ${props => {
    const { jumping } = props;

    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 150px;

      .-dieWrapper {
        position: relative;
        margin-top: 2rem;

        .-explosion {
          position: absolute;
          bottom: -5px;
          left: 12px;
        }
      }
      .-emojiWrapper {
        height: 120px;
      }
      .-emoji {
        @keyframes jumping {
          0% {
            transform: scale(1, 1);
            margin-top: 5rem;
          }
          10% {
            transform: scale(1.1, 0.9);
          }
          30% {
            transform: scale(0.9, 1.1);
          }
          50% {
            transform: scale(1.35, 0.95);
            margin-top: 1.1rem;
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
            margin-top: 5rem;
          }
        }

        display: inline-block;
        margin-top: 5rem;

        ${styleWhen(
          jumping,
          css`
            animation: jumping 1s forwards;
          `
        )}
      }
    `;
  }}
`;
/* === */
