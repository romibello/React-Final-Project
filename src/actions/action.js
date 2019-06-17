import {GET_ARTIST} from "../constants/action-type";
import {GET_LIST} from "../constants/action-type";
import {GET_ALBUM} from "../constants/action-type";


export function getArtistsAction(data) {
  console.log("data");
  console.log(data);
  let resp = {};
  resp = data.response.artists.items.map((item) => {
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
      textToSearch: data.search
    }
  }
}

export function getAlbumsAction(data) {
  console.log("album");
  console.log(data);
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
    }
  }
}

export function getSongs(data) {
  console.log("estoy en songs");
  console.log(data);
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


function getSearch(url,query,op){
  return async dispatch => {
    try {
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer BQAFrlZ3xaVvDK5OsgbxNtnK9Y5kxhkCAQ-an7nNuMSPJSF7FRUjb75ufFhSzzmJXC-h1LxEvjvCf-JuOgQ',
        }
      });
      const responseJson = await response.json();
      if(op === 1){
        dispatch(getArtistsAction({response:responseJson,search:query}));
      }else if(op === 2){
        dispatch(getAlbumsAction({response:responseJson}));
      }else{
        dispatch(getSongs({response:responseJson}));
      }

    }
    catch (error) {
      console.error("error");
    }
  }
}


export function getList(query) {
  const searchQuery = `search?q=${query}&type=artist&limit=10`;
  const url = 'https://api.spotify.com/v1/' + searchQuery;
  const op=1;
  return getSearch(url,query,op);
}

export function getArtistsAlbum(query) {
  const url = 'https://api.spotify.com/v1/artists/'+ query +'/albums';
  const op=2;
  return getSearch(url,query,op);
}

export function getAlbum(payload) {
  const url = `https://api.spotify.com/v1/albums/${payload}/tracks`;
  const op=3;
  return getSearch(url,payload,op);
}
