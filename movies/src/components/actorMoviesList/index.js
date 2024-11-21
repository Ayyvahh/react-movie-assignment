import React from "react";
import Grid from "@mui/material/Grid2";
import ActorMovieCard from "../actorMovieCard";

const ActorMovieList = ({movies}) => {
    return (
        <Grid container spacing={3}>
            {movies.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <ActorMovieCard movie={movie}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default ActorMovieList;
