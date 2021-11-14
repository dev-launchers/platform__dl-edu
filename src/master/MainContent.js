import React from "react";
import { styled } from '@mui/material/styles';
import { Route } from 'react-router-dom'


import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import LegacyLearnList from "../legacy-learn/legacy-learn-list";
import Toolbar from "@mui/material/Toolbar";

import Footer from "./Footer"
import Home from '../pages/Home'
import Login from '../pages/Login'
import SideNav from "./SideNav";

const PREFIX = 'MainContent';

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

const Root = styled('div')((
    {
        theme
    }
) => ({
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

function MainContent() {


    return (
        <Root className={classes.root}>
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
        </Root>
    );

}

export default MainContent;
