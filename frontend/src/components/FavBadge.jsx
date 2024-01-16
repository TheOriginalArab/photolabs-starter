import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ photos, favoritePhotos, photoId }) => {
  console.log("favoritePhotos", favoritePhotos);
  console.log("photoId", photoId);
  const selectedPhoto =
    Array.isArray(favoritePhotos) && favoritePhotos.includes(photoId);
  const displayAlert = favoritePhotos > 0;
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={displayAlert} selectedPhoto={selectedPhoto} />
    </div>
  );
};

export default FavBadge;
