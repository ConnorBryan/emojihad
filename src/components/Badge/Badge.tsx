import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { tintColorLookup } from "../../helpers";
import { Emoji as EmojiType, Tint } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  tint: Tint;
  emoji: EmojiType;
  name: string;
  counts: {
    experience: number;
    allies: number;
    rounds: number;
    cash: number;
    stars: number;
  };
}

export default function Badge({
  tint,
  emoji,
  name,
  counts: { experience, allies, rounds, cash, stars }
}: IProps) {
  return (
    <StyledBadge color={tintColorLookup[tint]}>
      <Header as="h2" className="-header">
        <Emoji emoji={emoji} size={48} />
        <div>{name}</div>
      </Header>
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width="8">
            <Emoji emoji="🔆" size={24} /> <Emoji emoji="✖️" /> {experience}
          </Grid.Column>
          <Grid.Column width="8" />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Emoji emoji="💟" size={24} /> <Emoji emoji="✖️" /> {allies}
          </Grid.Column>
          <Grid.Column width="8">
            <Emoji emoji="🕒" size={24} /> <Emoji emoji="✖️" /> {rounds}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Emoji emoji="💵" size={24} /> <Emoji emoji="✖️" /> {cash}
          </Grid.Column>
          <Grid.Column width="8">
            <Emoji emoji="⭐" size={24} /> <Emoji emoji="✖️" /> {stars}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledBadge>
  );
}

const StyledBadge = styled(Segment)<any>`
  max-width: 30rem;

  .-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
