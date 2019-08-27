import React from "react";
import styled, { css } from "styled-components";

import { Emoji as EmojiType } from "../../types";

interface IProps {
  emoji: EmojiType;
  className?: string;
  size?: number;
  onClick?: () => void;
}

export default function Emoji({
  emoji,
  className = "",
  size = 9,
  onClick
}: IProps) {
  return (
    <StyledEmoji
      size={size}
      role="img"
      aria-label="Emoji"
      className={className}
      onClick={onClick}
    >
      {emoji}
    </StyledEmoji>
  );
}

const StyledEmoji = styled.span<any>`
  ${props => {
    const { size } = props;

    return css`
      font-size: ${size}px;
    `;
  }}
`;
