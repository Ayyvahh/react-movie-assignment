import React, {useState} from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        } else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

    return (
        <ActorsContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,


            }}
        >
            {props.children}
        </ActorsContext.Provider>
    );
};

export default ActorsContextProvider;