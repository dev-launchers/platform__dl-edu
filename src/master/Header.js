import React from "react"
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../images/logo-monogram.png'

const PREFIX = 'Header';

const classes = {
    root: `${PREFIX}-root`,
    appBar: `${PREFIX}-appBar`,
    title: `${PREFIX}-title`,
    logoAndTitleContainer: `${PREFIX}-logoAndTitleContainer`,
    logoImg: `${PREFIX}-logoImg`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        flexGrow: 1,
    },

    [`& .${classes.appBar}`]: {
        zIndex: theme.zIndex.drawer + 1,
    },

    [`& .${classes.title}`]: {
        paddingLeft: '.5em'
    },

    [`& .${classes.logoAndTitleContainer}`]: {
        flexGrow: 1,
        color: 'rgb(240, 237, 238)',
        display: 'flex',
        alignItems: 'center'
    },

    [`& .${classes.logoImg}`]: {
        width: '3em',
    }
}));

function Header() {

    return (
        <Root className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Link to="/home" className={classes.logoAndTitleContainer}>
                        <div>
                            <img src={logo} alt="Logo" className={classes.logoImg} />
                        </div>
                        <Typography variant="h2" className={classes.title}>
                            DL Basecamp
                        </Typography>
                    </Link>
                    <Link to="/login">
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Root>
    );
}

export default Header