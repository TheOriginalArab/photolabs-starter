import React from "react";

//import FavIcon from "./FavIcon";
import FavBadge from "./FavBadge";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ toggleFavorite, photo }) {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => toggleFavorite(photo.id)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavBadge />
      </div>
    </div>
  );
}

export default PhotoFavButton;
