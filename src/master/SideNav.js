import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom'
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search'

//import cakeImage from "../images/cake.svg"
import "./SideNav.module.css";

const PREFIX = 'SideNav';

const classes = {
    root: `${PREFIX}-root`,
    drawer: `${PREFIX}-drawer`,
    drawerPaper: `${PREFIX}-drawerPaper`,
    drawerContainer: `${PREFIX}-drawerContainer`,
    toolbar: `${PREFIX}-toolbar`,
    content: `${PREFIX}-content`,
    nested: `${PREFIX}-nested`,
    toolbarHeader: `${PREFIX}-toolbarHeader`,
    active: `${PREFIX}-active`
};

const Root = styled('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: "flex",
    },

    [`& .${classes.drawer}`]: {
        width: drawerWidth,
        flexShrink: 0,
    },

    [`& .${classes.drawerPaper}`]: {
        width: drawerWidth,
    },

    [`& .${classes.drawerContainer}`]: {
        overflow: "auto",
    },

    // necessary for content to be below app bar
    [`& .${classes.toolbar}`]: theme.mixins.toolbar,

    [`& .${classes.content}`]: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    [`& .${classes.nested}`]: {
        paddingLeft: theme.spacing(4),
    },

    [`& .${classes.toolbarHeader}`]: {
        height: '20em', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    [`& .${classes.active}`]: {
        backgroundColor: 'hotpink'
    }
}));

const drawerWidth = 270;

// TODO better to store nav bar structure in JSON, and then load-and-loop, instead of repeating code
function SideNav() {
    const [openedLegacy, setOpenedLegacy] = useState(false);
    const [openedProgLang, setOpenedProgLang] = useState(false);
    const [openedFrameworks, setOpenedFrameworks] = useState(false);
    const [openedProgPrinc, setOpenedProgPrinc] = useState(false);

    const handleClickLegacy = () => {
        setOpenedLegacy(!openedLegacy);
    };

    const handleClickProgLang = () => {
        setOpenedProgLang(!openedProgLang);
    };

    const handleClickFrameworks = () => {
        setOpenedFrameworks(!openedFrameworks);
    };

    const handleClickProgPrinc = () => {
        setOpenedProgPrinc(!openedProgPrinc);
    };

    return (
        <Root className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <div className={classes.toolbarHeader}>
                        <div>
                            {/* <img src={cakeImage}/> */}
                        </div>
                        <TextField id="search-content" variant="filled" size="small"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>,
                            }} />
                    </div>
                    <Divider />
                    <List>
                        <ListItem button onClick={handleClickLegacy}>
                            <ListItemText>DL Learn</ListItemText>
                            {openedLegacy ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openedLegacy} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <NavLink to="/legacy-learn/code" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>Code</ListItemText>
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/legacy-learn/design" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>Design</ListItemText>
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/legacy-learn/phaser 3" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>Phaser</ListItemText>
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/legacy-learn/react" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>React</ListItemText>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClickProgLang}>
                            <ListItemText>Programming Languages</ListItemText>
                            {openedProgLang ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openedProgLang} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <NavLink to="/learning-modules/javascript" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>JavaScript</ListItemText>
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/learning-modules/java" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>Java</ListItemText>
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/learning-modules/csharp" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>C#</ListItemText>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClickFrameworks}>
                            <ListItemText>Frameworks</ListItemText>
                            {openedFrameworks ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openedFrameworks} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <NavLink to="/TODO1" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>TODO</ListItemText>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClickProgPrinc}>
                            <ListItemText>Programming Principles</ListItemText>
                            {openedProgPrinc ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openedProgPrinc} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <NavLink to="/TODO2" activeClassName="active-link">
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText>TODO</ListItemText>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Collapse>
                    </List>
                </div>
            </Drawer>
        </Root>
    );

}

export default SideNav;
