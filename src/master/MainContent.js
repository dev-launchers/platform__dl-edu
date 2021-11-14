import React from "react";
import { Route } from 'react-router-dom'


import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import LegacyLearnList from "../legacy-learn/legacy-learn-list";
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";

import Footer from "./Footer"
import Home from '../pages/Home'
import Login from '../pages/Login'
import SideNav from "./SideNav";

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

function MainContent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SideNav/>
            <main className={classes.content}>
                {/* Toolbar necessary to create space for the toolbar display*/}
                <Toolbar />
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/legacy-learn/:tab">
                    <LegacyLearnList/>
                </Route>
                <Route path="/learning-modules/:category">
                    <LearningModuleList/>
                </Route>
                <Route path="/learning-module/:moduleId">
                    <LearningModule/>
                </Route>
                <Footer />
            </main>
        </div>
    )

}

export default MainContent;
