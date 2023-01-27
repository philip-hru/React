import "./UsersList.css";
import { Card } from "./Card";

export function UsersList({ usersArray }) {
  if (usersArray.length == 0) {
    return <h1 className="h1">no rezylts</h1>;
  }
  return (
    <div className="UsersList">
      {usersArray.map((user) => {
        return <Card user={user} key={user.name.last + user.name.first}></Card>;
      })}
    </div>
  );
}
