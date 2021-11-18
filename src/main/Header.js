import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../images/logo-monogram.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        paddingLeft: '.5em'
    },
    logoAndTitleContainer: {
        flexGrow: 1,
        color: 'rgb(240, 237, 238)',
        display: 'flex',
        alignItems: 'center'
    },
    logoImg: {
        width: '3em',
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Link to="/home" className={classes.logoAndTitleContainer}>
                        <div>
                            <img src={logo} alt="Logo" className={classes.logoImg} />
                        </div>
                        <Typography variant="h4" className={classes.title}>
                            DL Basecamp
                        </Typography>
                    </Link>
                    <Link to="/login">
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;