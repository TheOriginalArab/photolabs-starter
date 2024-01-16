import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ favoritePhotos, photoId }) => {
  console.log("favoritePhotos", favoritePhotos);
  console.log("photoId", photoId);
  const displayAlert = favoritePhotos.length > 0;
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={displayAlert} selectedPhoto={true} />
    </div>
  );
};

export default FavBadge;
