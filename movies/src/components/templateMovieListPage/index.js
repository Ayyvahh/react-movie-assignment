import React, {useState} from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";

function MovieListPageTemplate({ movies, title, action }) {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);
    const [drawerOpen, setDrawerOpen] = useState(false);


    let displayedMovies = movies
        .filter((m) => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <>
            <Grid container>
                <Grid size={12} sx={{marginTop: '17px'}}>
                    <Header title={title}/>
                </Grid>
                <Grid container sx={{flex: "1 1 500px", padding: "20px"}}>
                    <MovieList action={action} movies={displayedMovies}></MovieList>
                </Grid>
            </Grid>
            <Fab
                color="primary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={{
                    marginTop: 11, position: "fixed", top: 2, right: 10,
                }}
            >
                Filter Movies
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={handleChange}
                    titleFilter={nameFilter}
                    genreFilter={genreFilter}
                />
            </Drawer>
        </>
    );
}
export default MovieListPageTemplate;