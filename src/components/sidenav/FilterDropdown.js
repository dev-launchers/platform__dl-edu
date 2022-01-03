import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import classes from "./FilterDropdown.module.css";

const cache = createCache({
  key: "css",
  prepend: true,
});

function FilterDropdown(props) {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [dropDownSelection, setDropDownSelection] = useState("Select ");
  const [menuArrowDown, setMenuArrowDown] = useState(true);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setMenuArrowDown(true);
    setDropDownSelection("Select ");
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleClick = (event) => {
    setDropDownSelection(event.target.text);
    setMenuArrowDown(true);
    setOpen(false);
  };

  return (
    <CacheProvider value={cache}>
      <div className={classes.sortWrapper}>
        <div className={classes.innerSortWrapper}>
          <label className={classes.filterLabel}>{props.filterTitle}</label>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            variant="contained"
            ref={anchorRef}
            color="neutral"
            size="large"
            disableElevation
            disableRipple
            onClick={handleToggle}
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
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="left-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.menuListParent}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className={classes.menuListChild}
                  >
                    {props.filterObjects.map((item) => {
                      return (
                        <MenuItem
                          key={item.id}
                          component={NavLink}
                          to={item.link}
                          onClick={handleClick}
                          sx={{ backgroundColor:"#ffffff" }}
                          disableRipple
                        >
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </CacheProvider>
  );
}

export default FilterDropdown;
