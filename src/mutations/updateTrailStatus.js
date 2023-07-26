import { gql } from "@apollo/client";

const UPDATE_TRAIL_STATUS = gql`
  mutation setTrailStatus($id: ID, $status: LiftStatus) {
    setTrailStatus(id: $id, status: $status) {
      id
    }
  }
`;

export default UPDATE_TRAIL_STATUS;
