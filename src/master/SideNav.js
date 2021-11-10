import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search'

//import cakeImage from "../images/cake.svg"
import "./SideNav.module.css";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: "auto",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    toolbarHeader: {
        height: '20em', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    active: {
        backgroundColor: 'hotpink'
    }
}));

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



    const classes = useStyles();

    return (
        <div className={classes.root}>
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
        </div>
    )

}

export default SideNav;
