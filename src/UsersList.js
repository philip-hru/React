import "./UsersList.css";
import { Card } from "./Card";

export function UsersList({ usersArray }) {
  if (usersArray.length == 0) {
    return <h1 className="h1">no rezylts</h1>;
  }
  return (
    <div className="UsersList">
      {usersArray.map((userElement) => {
        return (
          <Card
            key={userElement.name.last + userElement.name.first}
            picture={userElement.picture.large}
            firstName={userElement.name.first}
            lastName={userElement.name.last}
            gender={userElement.gender}
            dob={userElement.dob}
          ></Card>
        );
      })}
    </div>
  );
}
