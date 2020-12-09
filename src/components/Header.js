import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box,
    BaseTextFieldProps
} from '@material-ui/core';
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core";
import avatar from '../avatar.png'

//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedCantainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 1,
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedCantainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
            </Grid>
            <Typography className={classes.title} varient="h4">
                <Typed strings={["Russel Crowe"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} varient="h4">
                <Typed strings={["Web Design", "Web Development", "MERN stack"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
            <br />
        </Box>
    )
}

export default Header;