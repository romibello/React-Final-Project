import {GET_ARTIST} from "../constants/action-type";
import {GET_LIST} from "../constants/action-type";
import {GET_ALBUM} from "../constants/action-type";
import {ADD_FAVORITE} from "../constants/action-type";
import {SAVE_TEXT} from "../constants/action-type";
import {REMOVE_FAVORITE} from "../constants/action-type";
import {CHANGE_REDIRECT} from "../constants/action-type";

/****************************************************Actions*********************************************************************************/

export function makeApiFetch(url, callback) {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer BQD0Uobaf8HgLUDJrE7348Np5FM8_I17qjN8tETP4Ob5cWa_br7aNiDt1hcXeQCqt5xcqFKfxRqf2kYVUVQ',
        }
      });
      const responseJson = await response.json();
      dispatch(callback({response:responseJson}));
    }
    catch (Error) {
      console.error(Error);
    }
}
}
export function getArtistsAction(data) {
  let resp = {};
  let respId =[];
  resp = data.response.artists.items.map((item) => {
    respId.push(item.id);
    if(item.images.length > 0){
      return {
        id: item.id,
        img: item.images[0].url,
        name: item.name,
        genres:item.genres
      }
    } else return{
      id: item.id,
      img: "https://t4.ftcdn.net/jpg/01/39/16/63/240_F_139166369_NdTDXc0lM57N66868lC66PpsaMkFSwaf.jpg",
      name: item.name,
      genres:item.genres
    }
  })
  return {   
    type: GET_LIST,
    payload: {
      searchResult: resp,
      textToSearch: data.search,
      respId: respId
    }
  }
}

export function getAlbumsAction(data) {   
  let result = data.response.items.filter((item) => {
    return (item.available_markets.includes("AR"));
  }).map((item) => {
    return {
      name: item.name,
      id: item.id,
      img: item.images[0].url,
      release: item.release_date.split('-')[0]
    }
  });
  return {
    type: GET_ARTIST,
    payload: {
      artistResult: result,
      data:data.data
    }
  }
}

export function getSongs(data) {
  let resp = {};
  resp = data.response.items.map((item) => {
    return {
      name: item.name,
      id: item.id,
      artist: item.artists,
      preview: item.preview_url
    }
  });
  return {
    type: GET_ALBUM,
    payload: {
      res: resp,
    }
  }
}

export function saveText(data) {
  return {
    type: SAVE_TEXT,
    payload: {
      res: data,
    }
  }
}

export function changeRedirect() {
  return {
    type: CHANGE_REDIRECT,
    payload: false
  }
}
/****************************************************Actions*********************************************************************************/
/****************************************************Fetch*********************************************************************************/

function getSearch(url,query,op){
  
  return async dispatch => {
    try {
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer BQA9R27GhQm4a7KgFnu2NJosiKJ2iSaBtIiQ7hhz-6YExylt7f--sOPzhEogKGv9Y8wYjgQEanUFFel7elA',
        }
      });
      const responseJson = await response.json();
      if(op === 1){
        dispatch(getArtistsAction({response:responseJson,search:query}));
      }else if(op === 2){
        dispatch(getAlbumsAction({response:responseJson, data:query}));
      }else{
        dispatch(getSongs({response:responseJson}));
      }

    }
    catch (error) {
      console.error("error");
    }
  }
}

/****************************************************Fetch*********************************************************************************/
/****************************************************Gets*********************************************************************************/

export function getList(query) {
  const searchQuery = `search?q=${query}&type=artist&limit=10`;
  const url = 'https://api.spotify.com/v1/' + searchQuery;
  const op=1;
  return getSearch(url,query,op);
}

export function getArtistsAlbum(query) {
  const url = 'https://api.spotify.com/v1/artists/'+ query.artistId +'/albums';
  const op=2;
  return getSearch(url,query,op);
}

export function getAlbum(payload) {
  
  const url = `https://api.spotify.com/v1/albums/${payload}/tracks`;
  const op=3;
  return getSearch(url,payload,op);
}


/****************************************************Gets*********************************************************************************/
/****************************************************Favorites Actions********************************************************************/

export function addFavorite(data) {
  return {
    type: ADD_FAVORITE,
    payload: {
      id: data.id,
      trackData: data.trackData
    }
  }
}

export function removeFavorite(id) {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}

/****************************************************Favorites Actions********************************************************************/