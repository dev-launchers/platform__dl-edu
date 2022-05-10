import React from 'react';
import List from "@mui/material/List";

import FilterDropdown from './FilterDropdown';
import { languageFilterDescriptions, frameworkFilterDescriptions, dlLearnFilterDescriptions } from '../../data/MenuSelectors';
  
function FilterDropdownMenu() {
  const language = languageFilterDescriptions.slice(1);
  const framework = frameworkFilterDescriptions.slice(1);
    return (
        <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "450px",
                }}
              >
                    <FilterDropdown
                  filterTitle="DL Learn"
                  filterObjects={dlLearnFilterDescriptions}
                />
                <FilterDropdown
                  filterTitle="Language"
                  filterObjects={language}
                />
                <FilterDropdown
                  filterTitle="Framework"
                  filterObjects={framework}
                />
              </List>
    )
}

export default FilterDropdownMenu
