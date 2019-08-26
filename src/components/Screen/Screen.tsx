import React from "react";
import { Button, Header } from "semantic-ui-react";
import styled, { css } from "styled-components";

interface IProps {
  title: string;
  actions: any;
  children: any;
}

export default function Screen({ title, actions, children }: IProps) {
  return (
    <StyledScreen>
      <Header as="h1" content={title} />
      <div className="-content">{children}</div>
      <div className="-footer">
        {actions.map(({ name, positive, negative, onClick }: any) => (
          <Button
            key={name}
            onClick={onClick}
            positive={positive}
            negative={negative}
          >
            {name}
          </Button>
        ))}
      </div>
    </StyledScreen>
  );
}

const StyledScreen = styled.div<any>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .-content {
    flex: 4;
  }
  .-footer {
    flex: 1;
  }
`;
