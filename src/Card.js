import "./Card.css";
import { usersList } from "./users";

export function Card({ picture, firstName, lastName, gender, dob }) {
  var border = "";
  if (gender == "male") {
    border = "green";
  }
  if (gender == "female") {
    border = "red";
  }
  return (
    <div className={"div " + border}>
      <img src={picture} />
      <p className="firstName">{firstName}</p>
      <p className="lastName">{lastName}</p>
      <div className="badge">
        <span className="span">{dob.age}</span>
      </div>
    </div>
  );
}
