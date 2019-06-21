import { GET_ALBUM, GET_ARTIST, GET_LIST, ADD_FAVORITE, REMOVE_FAVORITE, CHANGE_REDIRECT, SAVE_TEXT } from "../constants/action-type";

const initialState = {
    searchResult: {items:[]},
    initialResult: {items:[]},
    textToSearch:'',
    redirect: false,
    redirectHome:false,
    direc:"/",
    artistSelected:'',
    songs: [],
    favoriteTracksIds: [],
    favoriteTracks: null
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
      direc: "artistList/artists"
    };

    case GET_ALBUM:
      return {
        ...state,
        searchResult: action.payload.res,
        songs: action.payload.res
      }
    
    case GET_ARTIST:
      return {
        ...state,
        searchResult: action.payload.artistResult,
        artistSelected: action.payload.data,
        direc: "/artistList/artists/album"
      };

    case ADD_FAVORITE:     
      let favorites = {...state.favoriteTracks};
      favorites[action.payload.id] = action.payload.trackData;
      return {
        ...state,
        favoriteTracksIds: [...state.favoriteTracksIds, action.payload.id],
        favoriteTracks: favorites
      }
    
    case REMOVE_FAVORITE:
      let newFavoritesId = state.favoriteTracksIds.filter((item) => {
        return item !== action.payload;
      });
      let newFavorites = {...state.favoriteTracks};
      delete newFavorites[action.payload];
      return {
        ...state,
        favoriteTracks: newFavorites,
        favoriteTracksIds: newFavoritesId
      }
    
    case CHANGE_REDIRECT:
    return {
      ...state,
      redirect: false,
      redirectHome:true
    }
    case SAVE_TEXT:
      return{
        textToSearch: action.payload.res
      }
    

    default:
      //  default case in a reducer
      return state;
  }

}

export default appReducer;