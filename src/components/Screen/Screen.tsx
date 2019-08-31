import React from "react";
import { Button, Container, Header } from "semantic-ui-react";
import styled from "styled-components";

interface IProps {
  title: string;
  actions?: any;
  children: any;
}

export default function Screen({ title, actions = [], children }: IProps) {
  return (
    <Container>
      <StyledScreen>
        <Header className="-title" as="h1" content={title} />
        <div className="-content">{children}</div>
        <div className="-footer">
          {actions
            .reverse() // Floated buttons reverse the order.
            .map(({ disabled, positive, name, negative, onClick }: any) => (
              <Button
                key={name}
                disabled={disabled}
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
    </Container>
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
    display: flex;
  }
  .-footer {
    flex: 1;
    margin-top: 14px;
  }
`;
