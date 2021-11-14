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
    content: `${PREFIX}-content`,
};

const Root = styled('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: "flex",
    },

    [`& .${classes.content}`]: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

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
