import React, { useState } from "react";
import styled, { css } from "styled-components";
import useRouter from "use-react-router";

import { Emoji, Screen } from "../components";
import { getAllProfiles, styleWhen } from "../helpers";

export default function SelectProfileScreen() {
  const [activeProfileIndex, updateActiveProfileIndex] = useState(0);
  const { history } = useRouter();
  const profiles = getAllProfiles();
  const activeProfile = profiles[activeProfileIndex];

  return (
    <Screen
      title="Select a Profile"
      actions={[
        {
          name: "Back",
          negative: true,
          onClick: () => history.push("/")
        },
        {
          name: "Go",
          positive: true,
          onClick: () => history.push("/game")
        }
      ]}
    >
      <StyledSelectProfileScreen>
        <div className="-emoji">
          {profiles.map(({ emoji }, index) => {
            const isSelected = index === activeProfileIndex;
            const isLast = index === profiles.length - 1;

            function handleClick() {
              updateActiveProfileIndex(index);
            }

            return (
              <StyledEmoji
                key={emoji}
                selected={isSelected}
                last={isLast}
                emoji={emoji}
                size={isSelected ? 80 : 64}
                onClick={handleClick}
              />
            );
          })}
        </div>
        <div className="-info">
          <h1 className="-name">{activeProfile.name}</h1>
          <ul className="-abilities">
            {activeProfile.abilities.map(({ name, description, recharge }) => (
              <li key={name}>
                <strong>{name}</strong>
                <p>{description}</p>
                <p>Recharge {recharge}.</p>
              </li>
            ))}
          </ul>
        </div>
      </StyledSelectProfileScreen>
    </Screen>
  );
}

const StyledSelectProfileScreen = styled.div<any>`
  width: 100%;
  display: flex;
  flex-direction: column;

  .-emoji {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .-info {
    flex: 1;
    display: flex;
    align-items: center;

    .-name {
      flex: 1;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      border-right: 1px solid #333;
    }
    .-abilities {
      flex: 3;
      list-style-type: none;
    }
  }
`;

const StyledEmoji = styled(Emoji)<any>`
  ${props => {
    const { last, selected } = props;

    return css`
      cursor: pointer;

      ${styleWhen(
        !last,
        css`
          margin-right: 2rem;
        `
      )}
      ${styleWhen(
        selected,
        css`
          @keyframes pulsing {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.4);
            }
            100% {
              transform: scale(1);
            }
          }

          animation: pulsing 1.5s infinite;
        `
      )}
    `;
  }}
`;
