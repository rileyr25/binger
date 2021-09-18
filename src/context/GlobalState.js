import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    favlist: localStorage.getItem('favlist') ? 
    JSON.parse(localStorage.getItem('favlist')) : 
    [],
};

// create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('favlist', JSON.stringify(state.favlist))
    }, [state])
    
//actions
        const removeFromFavourites = (id) => {
            dispatch({type:"REMOVE_FROM_FAVOURITES", payload:id})
        }

        const addMovieToFavourites = (movie) => {
            dispatch({type:"ADD_TO_FAVOURITES", payload:movie})
        };

    return (
        <GlobalContext.Provider value={{
            favlist: state.favlist, 
            addMovieToFavourites, 
            removeFromFavourites,
            }}
        > 
            {props.children};
        </GlobalContext.Provider>
    );
}
