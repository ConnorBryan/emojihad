import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

import { Emoji } from "../Emoji";

interface IProps {
  disabled?: boolean;
  onClick: () => void;
}

export default function RollPanel({ disabled = false, onClick }: IProps) {
  return (
    <StyledRollPanel primary={true} disabled={disabled} onClick={onClick}>
      <Emoji emoji="🎲" size={72} />
    </StyledRollPanel>
  );
}

const StyledRollPanel = styled(Button)<any>`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;
