import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

interface IProps {
  time: number;
}

export default function Clock({ time }: IProps) {
  return (
    <StyledClock>
      <Header content={time} />
    </StyledClock>
  );
}

const StyledClock = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  padding: 1.3rem;

  .header {
    color: white;
  }
`;
