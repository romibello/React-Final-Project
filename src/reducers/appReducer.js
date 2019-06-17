import { GET_ALBUM, GET_ARTIST, GET_LIST, SELECT_ELEMENT } from "../constants/action-type";

const initialState = {
    searchResult: {items:[]},
    initialResult: {items:[]},
    textToSearch:'',
    redirect: false,
    direc:"/",
    artistSelected:'',
    songs: []
};



function appReducer(state = initialState, action) {

  switch (action.type){
    case GET_LIST:
    return{
      ...state,
      searchResult: action.payload.searchResult,
      initialResult: action.payload.searchResult,
      textToSearch: action.payload.textToSearch,
      redirect: true,
      direc: "/artists"
    };

    case GET_ALBUM:
        console.log("FETCH TRACKS REDUCER");
        console.log(action.payload);
      return {
        ...state,
        searchResult: action.payload.res,
        songs: action.payload.res
      }
    
    case GET_ARTIST:
      return {
        ...state,
        searchResult: action.payload.artistResult,
        direc: "/album"
      };

    case SELECT_ELEMENT:
      return {
        ...state,
        artistSelected: action.payload
      }

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }

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


    return state;
}

export default appReducer;