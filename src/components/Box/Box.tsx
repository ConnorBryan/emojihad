import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { fillBox } from "../../helpers";
import { Emoji as EmojiType } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  emoji: EmojiType;
  title: string;
  collection: ("" | EmojiType)[];
}

export default function Box({ emoji, title, collection }: IProps) {
  const filledBox = fillBox(collection);

  return (
    <StyledBox>
      <Header as="h2" className="-header">
        <Emoji emoji={emoji} size={32} />
        <div>{title}</div>
      </Header>
      <Grid celled={true} columns={3}>
        {filledBox.map((row, index) => (
          <Grid.Row key={index}>
            {row.map((entry, secondIndex) => (
              <Grid.Column key={secondIndex} className="-column">
                {entry && <Emoji emoji={entry} size={48} />}
              </Grid.Column>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    </StyledBox>
  );
}

const StyledBox = styled(Segment)<any>`
  max-width: 30rem;

  .-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase !important;
    letter-spacing: 0.7px;
  }
  .-column {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 95px;
  }
`;
