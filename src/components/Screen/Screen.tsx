import React from "react";
import { Button, Header } from "semantic-ui-react";
import styled from "styled-components";

interface IProps {
  title: string;
  actions: any;
  children: any;
}

export default function Screen({ title, actions, children }: IProps) {
  return (
    <StyledScreen>
      <Header className="-title" as="h1" content={title} />
      <div className="-content">{children}</div>
      <div className="-footer">
        {actions.map(({ name, positive, negative, onClick }: any) => (
          <Button
            key={name}
            onClick={onClick}
            positive={positive}
            negative={negative}
            size="huge"
            floated="right"
          >
            {name}
          </Button>
        ))}
      </div>
    </StyledScreen>
  );
}

const StyledScreen = styled.div<any>`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .-title {
    text-transform: uppercase;
    letter-spacing: 0.7px;
    margin-top: 14px !important;
  }
  .-content {
    flex: 4;
    position: relative;
  }
  .-footer {
    flex: 1;
    margin-top: 14px;
  }
`;
