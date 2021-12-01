import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import classes from "./FilterDropdown.module.css";

const cache = createCache({
  key: "css",
  prepend: true,
});

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 232,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function FilterDropdown(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropDownSelection, setDropDownSelection] = useState("Select ");
  const [menuArrowDown, setMenuArrowDown] = useState(true);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setMenuArrowDown(false);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if (event.target.textContent === "") {
      setMenuArrowDown(true);
      setAnchorEl(null);
    } else {
      setDropDownSelection(event.target.textContent);
      setMenuArrowDown(true);
      setAnchorEl(null);
    }
  };

  return (
    <CacheProvider value={cache}>
      <div className={classes.sortWrapper}>
        <div className={classes.innerSortWrapper}>
          <label className={classes.filterLabel}>{props.filterTitle}</label>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            color="neutral"
            size="large"
            disableElevation
            onClick={handleClick}
            endIcon={
              menuArrowDown ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )
            }
            className={classes.filterButtons}
          >
            {dropDownSelection}
          </Button>
        </div>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {props.filterObjects.map((item) => {
            return (
              <MenuItem
                component={NavLink}
                to={item.link}
                onClick={handleClose}
                disableRipple
              >
                {item.name}
              </MenuItem>
            );
          })}
        </StyledMenu>
      </div>
    </CacheProvider>
  );
}

export default FilterDropdown;
