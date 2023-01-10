import { UsergoalConsumer } from "../../providers/UserGoalProvider";
import { useEffect } from "react";
import UsergoalShow from './UsergoalShow';

const UsergoalList = ({ getAllUsergoals, usergoals, deleteUsergoal, editUsergoal }) => {
  
  useEffect( () => {
    getAllUsergoals()
  }, [])

  return (
    <>
      <h1>All UserGoals</h1>
      <table>
        <tr>
          <th>Entry</th>
          <th>When</th>
          <th>Goal</th>
          <th>Actions</th>
        </tr>
        { usergoals.map( ug => 
          <UsergoalShow 
            key={ug.id} 
            {...ug} 
            deleteUsergoal={deleteUsergoal}
            editUsergoal={editUsergoal}
          />
        )}
      </table>
    </>
  )
}

const ConnectedUsergoalList = (props) => (
  <UsergoalConsumer>
    { value => <UsergoalList {...props} {...value} />}
  </UsergoalConsumer>
)

export default ConnectedUsergoalList;
