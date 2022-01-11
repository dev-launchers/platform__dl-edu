import React from 'react';
import List from "@mui/material/List";

import FilterDropdown from '../FilterDropdown';

const languageFilterDescriptions = [
    {
      id: "0",
      name: "Javascript",
      link: "/main-content/learning-modules/javascript",
    },
    { id: "1", name: "Java", link: "/main-content/learning-modules/java" },
    { id: "2", name: "C#", link: "/main-content/learning-modules/csharp" },
  ]
  const frameworkFilterDescriptions = [
    { id: "3", name: "Foo", link: "/main-content/learning-modules/javascript" },
    { id: "4", name: "Roh", link: "/main-content/learning-modules/java" },
    { id: "5", name: "Bar", link: "/main-content/learning-modules/csharp" },
    { id: "6", name: "Bar", link: "/main-content/learning-modules/csharp" },
  ];

  const dlLearnFilterDescriptions = [
    { id: "10", name: "Code", link: "/main-content/legacy-learn/code" },
    { id: "11", name: "Design", link: "/main-content/legacy-learn/design" },
    { id: "12", name: "Phaser", link: "/main-content/legacy-learn/phaser 3" },
    { id: "13", name: "React", link: "/main-content/legacy-learn/react" },
  ]
  
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
