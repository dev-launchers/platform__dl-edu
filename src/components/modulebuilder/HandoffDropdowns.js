import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import classes from "../sidenav/FilterDropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function HandoffDropdowns(props) {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [menuArrowDown, setMenuArrowDown] = useState(true);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
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
    const selection = event.target.textContent;
    setOpen(false);
    props.handleItemWasSelected(selection);
  };

  return (
    <Grid container marginBottom="20px">
      <Grid item container rowSpacing={1} xs={12}>
        <Grid item xs={12}>
          <label>{props.title}</label>
        </Grid>
        <Grid item xs={12}>
          <Button
            id="handoff-select-button"
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            variant="outlined"
            ref={anchorRef}
            size="large"
            disableElevation
            disableRipple
            sx={{ position: "static" }}
            onClick={handleToggle}
            endIcon={
              menuArrowDown ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )
            }
          >
            {props.choice}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            placement="bottom-start"
            transition
            disablePortal
            sx={{ position: "absolute" }}
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
                    >
                      {props.items.map((item) => {
                        return (
                          <MenuItem
                            key={item.id}
                            onClick={handleClick}
                            sx={{ backgroundColor: "#ffffff" }}
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
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HandoffDropdowns;
