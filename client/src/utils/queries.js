import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query getMatchups {
    matchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_MATCHUP = gql`
  query getMatchup($id: ID!) {
    matchup(id: $id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_TECHS = gql`
  query getAllTechs {
    techs {
      _id
      name
    }
  }
`;

