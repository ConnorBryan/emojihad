import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

import { Emoji } from "../Emoji";

export default function RollPanel() {
  return (
    <StyledRollPanel primary={true}>
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
