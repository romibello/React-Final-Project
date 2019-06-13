import { GET_ALBUM, GET_ARTIST, GET_LIST } from "../constants/action-types";

const initialState = {
    searchResult: {items:[]},
    textToSearch:'',
    redirect: false
};


function appReducer(state = initialState, action) {

  if (action.type === GET_ALBUM) {
    let newId = state.addingId + 1;
    let movs = {...state.movies};
    movs[newId] = action.payload;
    let newState = {
      ...state,
      movies: movs,
      moviesId: [...state.moviesId, newId],
      addingId: newId
    }
    return newState;
  }
  

  if (action.type === GET_ARTIST) {
    let newMoviesId = state.moviesId.filter((item) => {
      return item !== action.id;
    });
    let copyMovies = {...state.movies};
    delete copyMovies[action.id];
    let newState = {
      ...state,
      movies: copyMovies,
      moviesId: newMoviesId
    }
    return newState;
  }

  if (action.type === GET_LIST) {
      return{
        ...state,
        searchResult: action.artists.items,
        textToSearch: action.search,
        redirect: true
      }
      
    };

    return state;
}

export default appReducer;