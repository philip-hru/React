import "./Filters.css";
import { usersList } from "./users";

export function Filter({ filterState, countries }) {
  const {
    setGenderFilter,
    ageFilter,
    setAgeFilter,
    nameFilter,
    setNameFilter,
    setCountryFilter,
  } = filterState;

  function ageFilterChange(event) {
    setAgeFilter(event.target.value);
  }

  function genderFilterChange(event) {
    setGenderFilter(event.target.value);
  }

  function nameFilterChange(event) {
    setNameFilter(event.target.value);
  }

  function countryFilterChange(event) {
    setCountryFilter(event.target.value);
  }

  return (
    <div className="nameFilter">
      <div className="inputs_div">
        <label>Name: </label>
        <input
          className="input"
          type="text"
          value={nameFilter}
          onChange={nameFilterChange}
        ></input>
      </div>

      <div className="inputs_div">
        <label>Age: </label>
        <input
          className="input"
          type="number"
          value={ageFilter}
          onChange={ageFilterChange}
        ></input>
      </div>

      <div className="radios">
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
      <select onChange={countryFilterChange}>
        <option value=""></option>
        {countries.map((country) => {
          return (
            <option key={country} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
}
