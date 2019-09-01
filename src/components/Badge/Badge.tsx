import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { tintColorLookup } from "../../helpers";
import { Emoji as EmojiType, Tint } from "../../types";
import { Emoji } from "../Emoji";

interface IProps {
  tint: Tint;
  emoji: EmojiType;
  profileName: string;
  organizationName: string;
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
  profileName,
  organizationName,
  counts: { experience, allies, rounds, cash, stars }
}: IProps) {
  return (
    <StyledBadge color={tintColorLookup[tint]}>
      <div className="-top">
        <Emoji emoji={emoji} size={50} className="-emoji" />
        <div className="-text">
          <Header as="h2" textAlign="right" className="-header">
            {profileName}
          </Header>
          <Header as="h4" textAlign="right" className="-organization">
            {organizationName}
          </Header>
        </div>
      </div>
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
  position: relative;
  max-width: 30rem;

  .-top {
    display: flex;
    align-items: center;
  }
  .-text {
    flex: 3;
  }
  .-emoji {
    flex: 1;
  }
  .-header {
    margin: 0;
  }
  .-organization {
    margin: 0;
  }
`;
