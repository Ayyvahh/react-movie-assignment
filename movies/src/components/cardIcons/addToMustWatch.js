import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const AddToMustWatch = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatch = (e) => {
        e.preventDefault();
        context.addToMustWatchList(movie);
    };

    return (
        <IconButton aria-label="add to playlist" onClick={handleAddToMustWatch}>
            <PlaylistIcon color="primary" fontSize="large" />
        </IconButton>
    );
};


export default AddToMustWatch;