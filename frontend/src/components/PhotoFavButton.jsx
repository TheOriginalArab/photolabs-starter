import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ toggleFavorite, photoId, favoritePhotos }) {
  const handleClick = (photoId) => {
    toggleFavorite(photoId);
  };

  const selectedPhoto = favoritePhotos.includes(photoId);

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selectedPhoto={selectedPhoto} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
