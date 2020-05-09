import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import "./style.css";


const useStyles = makeStyles({
    root: {
        maxWidth: 175,
    },
    media: {
        height: 200,
    },
});

export default function ImgMediaCard({ database, handleSubmit }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} container spacing={3}>

            {
                database.map(card => {

                    return (
                        <Grid item xs={3} spacing={3}>

                            <Card className={classes.root} >

                                <CardMedia className={classes.media}
                                    component="img"
                                    alt={card.alt}
                                    image={require("../../assets/images/" + card.img)} onClick={() => {
                                        handleSubmit(card.id)
                                    }

                                    } />

                            </Card>
                        </Grid>
                    )
                })

            }


        </Grid>
    );
}
