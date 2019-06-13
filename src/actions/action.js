import { GET_ALBUM } from "../constants/action-types";
import { GET_ARTIST } from "../constants/action-types";
import { GET_LIST } from "../constants/action-types";


export function getAlbum(payload) {
  
}

export function getArtistsAction(payload) {
  return { type: GET_ARTIST, payload };
}

export function getList(payload) {
  return { type: GET_LIST, payload };
}


export function getArtists(query) {
  console.log(query);
  return async dispatch => {
    try {
      const searchQuery = `search?q=${query}&type=artist&limit=4`;
      const url = 'https://api.spotify.com/v1/' + searchQuery;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer BQCU6L6eUcc58jtXm0I7XHecWpS9w6ewLUiGNRJA5Od3eC5C4Vib11bTdcZmF0YpIbEhp8WT_dMG9vaS8l4',
        }
      });
      const responseJson = await response.json();
      dispatch(getArtistsAction({response:responseJson,search:query}));
    }
    catch (error) {
      console.error("error");
    }
  }
}