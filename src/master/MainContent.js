import React from "react"
import { styled } from '@mui/material/styles'
import { Route, useRouteMatch } from 'react-router-dom'

import LearningModule from "../modules/LearningModule"
import LearningModuleList from "../modules/LearningModuleList"
import LegacyLearnList from "../legacy-learn/legacy-learn-list"
import SideNav from "./SideNav"

const PREFIX = 'MainContent'

const classes = {
    root: `${PREFIX}-root`,
    content: `${PREFIX}-content`,
}

const Root = styled('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: "flex",
    },

    [`& .${classes.content}`]: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}))

function MainContent() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <Root className={classes.root}>
            <SideNav/>
            <main className={classes.content}>
                <Route path={`${path}/legacy-learn/:tab`}>
                    <LegacyLearnList/>
                </Route>
                <Route path={`${path}/learning-modules/:category`}>
                    <LearningModuleList/>
                </Route>
                <Route path={`${path}/learning-module/:moduleId`}>
                    <LearningModule/>
                </Route>
            </main>
        </Root>
    );

}

export default MainContent;
