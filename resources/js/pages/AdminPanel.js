import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import MovieIcon from "@material-ui/icons/Movie";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import CategoryIcon from "@material-ui/icons/Category";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 200,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={4} md={4} lg={4}>
                            <Paper className={fixedHeightPaper}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    m={1}
                                    p={1}
                                >
                                    <Box p={1}>
                                        <MovieIcon
                                            style={{
                                                height: "150px",
                                                width: "100px",
                                            }}
                                        />
                                        <Button>
                                            <Link to="/admin/addmovie">
                                                <Typography
                                                    component="h1"
                                                    variant="h6"
                                                    color="inherit"
                                                    noWrap
                                                    className={classes.title}
                                                >
                                                    Add Movie
                                                </Typography>
                                            </Link>
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}>
                            <Paper className={fixedHeightPaper}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    m={1}
                                    p={1}
                                >
                                    <Box p={1}>
                                        <RecentActorsIcon
                                            style={{
                                                height: "150px",
                                                width: "100px",
                                            }}
                                        />
                                        <Button>
                                            <Typography
                                                component="h1"
                                                variant="h6"
                                                color="inherit"
                                                noWrap
                                                className={classes.title}
                                            >
                                                Add Actor
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}>
                            <Paper className={fixedHeightPaper}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    m={1}
                                    p={1}
                                >
                                    <Box p={1}>
                                        <CategoryIcon
                                            style={{
                                                height: "150px",
                                                width: "100px",
                                            }}
                                        />
                                        <Button>
                                            <Typography
                                                component="h1"
                                                variant="h6"
                                                color="inherit"
                                                noWrap
                                                className={classes.title}
                                            >
                                                Add Category
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
