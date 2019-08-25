import React from "react";
import styled, { css } from "styled-components";

import { Emoji as EmojiType, EmojiSize } from "../../types";

interface IProps {
  emoji: EmojiType;
  className?: string;
  size?: EmojiSize;
}

export default function Emoji({ emoji, className = "", size = 9 }: IProps) {
  return (
    <StyledEmoji
      size={size}
      role="img"
      aria-label="Emoji"
      className={className}
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
