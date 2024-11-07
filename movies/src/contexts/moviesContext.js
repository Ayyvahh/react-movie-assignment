import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState( [] )
    const [mustWatch, setMustWatch] = useState( [] )

    const [myReviews, setMyReviews] = useState( {} )

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)){
            newFavorites = [...favorites, movie.id];
        }
        else{
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const addToMustWatchList = (movie) => {
        let newMustWatchList = [];
        if (!mustWatch.includes(movie.id)){
            newMustWatchList = [...favorites, movie.id];
        }
        else{
            newMustWatchList = [...favorites];
        }
        setMustWatch(newMustWatchList)
    };

    const removeFromMustWatchList = (movie) => {
        setMustWatch( favorites.filter(
            (mId) => mId !== movie.id
        ) )
    };

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
    };
    // We will use this function in the next step
    const removeFromFavorites = (movie) => {
        setFavorites( favorites.filter(
            (mId) => mId !== movie.id
        ) )
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                mustWatch,
                addToMustWatchList,
                removeFromMustWatchList

            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;