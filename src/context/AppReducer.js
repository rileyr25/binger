export default (state, action) => {
    switch(action.type) {
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favlist: [action. payload, ...state.favlist],
            };
        case "REMOVE_FROM_FAVOURITES" :
            return {
                ...state,
                favlist: state.favlist.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
        
    }
}