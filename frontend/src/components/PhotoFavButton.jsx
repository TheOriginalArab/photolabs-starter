import React from "react";

//import FavIcon from "./FavIcon";
import FavBadge from "./FavBadge";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photos, toggleFavorite, photoId, favoritePhotos }) {
  const handleClick = (photoId) => {
    toggleFavorite(photoId);
    console.log("click fired!", photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavBadge 
          photos={photos} 
          photoId={photoId} 
          favoritePhotos={favoritePhotos}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
