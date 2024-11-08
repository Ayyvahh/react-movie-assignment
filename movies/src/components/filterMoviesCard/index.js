import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "@mui/icons-material/FilterList";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/popcorn.png';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import Box from "@mui/material/Box";



const formControl = {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(18, 18, 18)"
};

export default function FilterMoviesCard(props) {
    const { data, error, isLoading, isError } = useQuery("genres", getGenres);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value);
    };

    return (
        <Card sx={{ backgroundColor: "rgb(0, 0, 0)" ,
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
            width: '100%',            }} variant="outlined" >
            <CardContent>
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <SearchIcon fontSize="large" />
                    <Typography variant="h5" component="h1" sx={{ marginLeft: 1 }}>
                        Search Movies
                    </Typography>
                </Box>

                <TextField
                    sx={formControl}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    value={props.titleFilter}
                    onChange={handleTextChange}
                />

                <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop: 2 }}>
                    <FilterIcon fontSize="large" />
                    <Typography variant="h5" component="h1" sx={{ marginLeft: 1 }}>
                        Filter By Genre
                    </Typography>
                </Box>

                <FormControl sx={formControl}>
                    <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre-select"
                        defaultValue=""
                        value={props.genreFilter}
                        onChange={handleGenreChange}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre.id} value={genre.id}>
                                {genre.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>

            <CardMedia
                sx={{
                    height: 250,
                    width: 'auto',
                    maxWidth: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                }}
                image={img}
                title="Filter"
            />
        </Card>
    );
}
