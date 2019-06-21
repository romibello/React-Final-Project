import React from 'react';

function FavoritesList(props) {
  let tracks;
  if(props.props.favoritesId.length >0){ tracks= props.props.favoritesId.map((item,i) => {
    let favItem = props.props.favorites[item];
    return (
      <div className="col-sm-6 " key={i}>
        <div className="card shadow p-3 mb-5 bg-white rounded" >
          <div className="row">
            <div className="col">
              <img className="img-fluid" src={favItem.albumImg} alt="Albumimage" />
            </div>
            <div className="col-6">
              <p>{favItem.name}</p>
              <p>Artist: {favItem.artist}</p>
              <p>Album: {favItem.albumName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  });}
  return (
    <div className="row">
        {tracks}
    </div>
  )
}

export default FavoritesList;