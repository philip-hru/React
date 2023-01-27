import "./Card.css";
import { usersList } from "./users";

export function Card({ user }) {
  var { gender, picture, name, dob } = user;
  var border = "";
  if (gender == "male") {
    border = "green";
  }
  if (gender == "female") {
    border = "red";
  }
  return (
    <div className={"div " + border}>
      <img src={picture.large} />
      <p className="firstName">{name.first}</p>
      <p className="lastName">{name.last}</p>
      <div className="badge">
        <span className="span">{dob.age}</span>
      </div>
    </div>
  );
}

