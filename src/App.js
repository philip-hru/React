import "./App.css";
import { usersList } from "./components/users";
import { UsersList } from "./components/UsersList";
import { Filter } from "./components/Filter";
import { useFilterState } from "./hooks/useFilterState";

function App() {
  var filterState = useFilterState();

  var countries = [...new Set(usersList.map((x) => x.location.country))];

  var filteredList = usersList.filter(
    (user) =>
      user.name.first.toLocaleLowerCase().includes(filterState.nameFilter) &&
      user.dob.age >= filterState.ageFilter &&
      (filterState.genderFilter == "all" ||
        user.gender == filterState.genderFilter) &&
      (user.location.country == filterState.countryFilter ||
        filterState.countryFilter == "")
  );

  return (
    <div className="App">
      <Filter countries={countries} filterState={filterState}></Filter>
      <UsersList usersArray={filteredList}></UsersList>
    </div>
  );
}

export default App;
