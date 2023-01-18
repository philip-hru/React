import "./App.css";
import { useState } from "react";
import { usersList } from "./users";
import { UsersList } from "./UsersList";

function App() {
  var [genderFilter, setGenderFilter] = useState("all");
  var [ageFilter, setAgeFilter] = useState(0);
  var [nameFilter, setNameFilter] = useState("");

  function ageFilterChange(event) {
    setAgeFilter(event.target.value);
  }

  function genderFilterChange(event) {
    setGenderFilter(event.target.value);
  }

  function nameFilterChange(event) {
    setNameFilter(event.target.value);
  }

  var filteredList = usersList.filter(
    (user) =>
      user.name.first.includes(nameFilter) &&
      user.dob.age >= ageFilter &&
      (genderFilter == "all" || user.gender == genderFilter)
  );

  return (
    <div className="App">
      <div className="nameFilter">
        <label>Name: </label>
        <input
          className="input"
          type="text"
          value={nameFilter}
          onChange={nameFilterChange}
        ></input>
        <label>Age: </label>
        <input
          className="input"
          type="number"
          value={ageFilter}
          onChange={ageFilterChange}
        ></input>

        <input
          type="radio"
          id="contactChoice1"
          name="gender"
          value="all"
          onChange={genderFilterChange}
        ></input>
        <label htmlFor="contactChoice1">All</label>

        <input
          type="radio"
          id="contactChoice2"
          name="gender"
          value="male"
          onChange={genderFilterChange}
        ></input>
        <label htmlFor="contactChoice2">Male</label>
        <input
          type="radio"
          id="contactChoice3"
          name="gender"
          value="female"
          onChange={genderFilterChange}
        ></input>
        <label htmlFor="contactChoice3">Female</label>
      </div>
      <UsersList usersArray={filteredList}></UsersList>
    </div>
  );
}

export default App;
