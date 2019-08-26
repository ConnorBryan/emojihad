import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

import { Emoji as EmojiType, EntityKind } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  title: string;
  kind: EntityKind;
  emoji: EmojiType;
  description: string | string[];
}

export default function EntityCard({
  title,
  kind,
  emoji,
  description
}: IProps) {
  return (
    <StyledEntityCard>
      <Card.Content extra={true}>
        <Card.Header className="-header">
          <div>{title}</div>
          <div>
            <Emoji emoji={kind} />
          </div>
        </Card.Header>
      </Card.Content>
      <Card.Content className="-description">
        <Card.Description className="-emoji">
          <Emoji emoji={emoji} size={64} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        <Card.Description>
          {description instanceof Array ? (
            <ul>
              {description.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            description
          )}
        </Card.Description>
      </Card.Content>
    </StyledEntityCard>
  );
}

const StyledEntityCard = styled(Card)<any>`
  .-header {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }
  .-emoji {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    font-size: 64px !important;
  }
`;
