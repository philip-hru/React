import { useState } from "react";

export function useFilterState() {
  var [genderFilter, setGenderFilter] = useState("all");
  var [ageFilter, setAgeFilter] = useState(0);
  var [nameFilter, setNameFilter] = useState("");
  var [countryFilter, setCountryFilter] = useState("");
  return {
    genderFilter,
    setGenderFilter,
    ageFilter,
    setAgeFilter,
    nameFilter,
    setNameFilter,
    countryFilter,
    setCountryFilter,
  };
}
