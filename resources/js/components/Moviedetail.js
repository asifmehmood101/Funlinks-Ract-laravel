import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Row, Column, Item } from "@mui-treasury/components/flex";

const useCardHeaderStyles = makeStyles(() => ({
    root: {
        paddingBottom: 0,
        maxWidth: 200,
    },
    title: {
        fontSize: "1.25rem",
        color: "black",
        textTransform: "uppercase",
    },
    subheader: {
        fontSize: "0.875rem",
        color: "black",
    },
}));

const CardHeader = ({ title, releaseYear, genre, descreption }) => {
    const styles = useCardHeaderStyles();
    return (
        <Row>
            <Item position={"middle"}>
                <Typography className={styles.title} variant="h6">
                    <b>
                        {title} ({releaseYear})
                    </b>
                </Typography>
                <Typography variant="subtitle1">
                    <b>{genre}</b>
                </Typography>
                <Typography className={styles.subheader}>
                    {descreption}
                </Typography>

                <Grid container direction="row">
                    <Grid item>
                        <p>hello</p>
                    </Grid>
                    <Grid item>
                        <p>hello</p>
                    </Grid>
                </Grid>
            </Item>
        </Row>
    );
};

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 16,
    },
}));

export const ShowcaseCardDemo = React.memo(function ShowcaseCard({
    image,
    title,
    releaseYear,
    genre,
    descreption,
}) {
    const styles = useStyles();
    const gap = { xs: 1, sm: 1.5, lg: 2 };
    return (
        <Grid container>
            <Grid item xs={12} sm={8} lg={12}>
                <Row className={styles.card} gap={gap}>
                    <Item grow>
                        <img src={image} />
                    </Item>
                    <Column>
                        <CardHeader
                            title={title}
                            releaseYear={releaseYear}
                            genre={genre}
                            descreption={descreption}
                        />
                    </Column>
                </Row>
            </Grid>
        </Grid>
    );
});
export default ShowcaseCardDemo;
