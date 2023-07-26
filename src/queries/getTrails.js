import { gql } from "@apollo/client";

const GET_TRAILS = gql`
  query allTrails($status1: TrailStatus) {
    allTrails(status: $abd) {
      name
      night
      difficulty
      status
    }
  }
`;

export default GET_TRAILS;
