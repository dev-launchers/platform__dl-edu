import React from 'react';
import List from "@mui/material/List";

import FilterDropdown from './FilterDropdown';
import { languageFilterDescriptions, frameworkFilterDescriptions, dlLearnFilterDescriptions } from '../../data/MenuSelectors';
  
function FilterDropdownMenu() {
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
                  filterObjects={languageFilterDescriptions}
                />
                <FilterDropdown
                  filterTitle="Framework"
                  filterObjects={frameworkFilterDescriptions}
                />
              </List>
    )
}

export default FilterDropdownMenu
