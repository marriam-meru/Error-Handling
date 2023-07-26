import GET_TRAILS from "../queries/getTrails";
import { map } from "lodash";
import UPDATE_TRAIL_STATUS from "../mutations/updateTrailStatus";

function Trails() {
  const { data } = useQuery(GET_TRAILS, {
    variables: {
      status: "HOLD",
    },
  });

  const [update] = useMutation(UPDATE_TRAIL_STATUS);

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Available in nights</th>
          <th>Difficulty</th>
          <th>Tress Available</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {map(data.allTRails, (trail) => (
          <tr>
            <td>{trail.name}</td>
            <td>{trail.night}</td>
            <td>{trail.difficulty}</td>
            <td>{trail.trees}</td>
            <td>{trail.status}</td>
            <td
              onClick={() =>
                update({
                  variables: {
                    id: trail.id,
                    status: "HOLD",
                  },
                })
              }
            >
              Update
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Trails;
