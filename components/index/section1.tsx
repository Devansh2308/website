import React from "react";
import { Container, Theme, Typography, Grid, Paper } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",

            [theme.breakpoints.down("sm")]: {
                padding: "8rem"
            }
        },
        root: {
            backgroundImage: `url(${"/static/banner_bg.png"})`,
            marginLeft: "-200px",
            paddingBottom: "60px"
            // marginTop: "-380px"
        },
        heading: {
            color: "white",
            marginLeft: "250px"
        },
        fp: {
            paddingTop: "35rem",
            paddingBottom: "15rem"
        },
        image1: {
            width: "400px",
            height: "300px",
            position: "relative"
        },
        image2: {
            width: "400px",
            height: "300px",
            position: "relative",
            top: "-200px",
            left: "50px"
        },
        image3: {
            width: "400px",
            height: "300px",
            position: "relative",
            top: "-400px",
            left: "100px"
        },
        imgcontainer: {
            marginTop: "50px",
            background: "transparent",
            border: "null",
            marginLeft: "50px"
        },
        grid1: {
            marginTop: "190px",
            textAlign: "center"
        },
        [theme.breakpoints.down("sm")]: {
            grid2: {
                display: "none"
            },
            root: {
                paddingBottom: "40vh",
                marginTop: "00px",
                marginLeft: "-400px"
            },
            heading: {
                marginLeft: "400px",
                padding: "10px"
            }
        }
    };
});

const Section1: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={8} className={classes.grid1}>
                    <Typography
                        variant="h3"
                        component="h2"
                        className={classes.heading}
                    >
                        ISTE SC MANIT
                    </Typography>
                    <Typography variant="subtitle1" className={classes.heading}>
                        The best Students,s Chapter from last 3 years in MP-CG
                        region
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.grid2}>
                    <div className={classes.imgcontainer}>
                        <div>
                            <img
                                src="/static/version.jpg"
                                className={classes.image1}
                            ></img>
                        </div>
                        <div>
                            <img
                                src="/static/chimerax.jpg"
                                className={classes.image2}
                            ></img>
                        </div>
                        <div>
                            <img
                                src="/static/codathon.jpg"
                                className={classes.image3}
                            ></img>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section1;
