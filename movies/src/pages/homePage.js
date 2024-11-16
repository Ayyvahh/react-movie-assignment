import React, {useState} from "react";
import {getMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import {useQuery} from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import {Pagination} from "@mui/material";

const HomePage = (props) => {
    const [currPage, setCurrPage] = useState(1);
    const {data, error, isLoading, isError} = useQuery(['discover', currPage], () => getMovies(currPage))



    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;
    const totalPages = data.total_pages;

    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const addToFavorites = (movieId) => true

    const handlePageChange = (event, value) => {
        setCurrPage(value);
        window.scroll(0, 0)
    };

    return (
        <>
            <PageTemplate
                title="Discover"
                movies={movies}
                action={(movie) => {
                    return <AddToFavoritesIcon movie={movie}/>;
                }}
            />

            <Pagination
                style={{marginBottom: '25vh', display: 'flex', justifyContent: 'center'}}
                count={totalPages}
                color="primary"
                onChange={handlePageChange}
                page={currPage}
                size="large"
            />
        </>
    );
};
export default HomePage;