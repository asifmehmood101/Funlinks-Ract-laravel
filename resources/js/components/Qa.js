import React from "react";
import { makeStyles, Typography, Container } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import QaData from "../utility/data";

//customize accordin
const Accordion = withStyles({
    root: {
        backgroundColor: "#303030",
        borderColor: "#fffff",
        border: "10px solid black",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        color: "#ffffff",
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        color: "#ffffff",
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    constainer: {
        height: "900px",
        width: "100%",
    },
    title: {
        color: "#ffffff",
        textAlign: "center",
    },
    Icon: {
        color: "#ffffff",
    },
}));

function Qa() {
    const [expanded, setExpanded] = React.useState(1);

    const handleChange = (id) => (event, newExpanded) => {
        setExpanded(newExpanded ? id : false);
    };
    const classes = useStyles();
    return (
        <Container className={classes.constainer}>
            <br />
            <br />
            <Container maxWidth="sm">
                <Typography className={classes.title} variant="h4">
                    Frequently Asked Questions
                </Typography>
                {QaData.map((data) => {
                    const { id, summary, detail } = data;
                    return (
                        <Accordion
                            key={id}
                            square
                            expanded={expanded === id}
                            onChange={handleChange(id)}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={classes.Icon} />
                                }
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                            >
                                <Typography style={{ fontWeight: "600" }}>
                                    {summary}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ fontWeight: "600" }}>
                                    {detail}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Container>
        </Container>
    );
}

export default Qa;
