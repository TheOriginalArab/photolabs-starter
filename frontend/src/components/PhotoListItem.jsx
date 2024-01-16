import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite }) => {
  /* Insert React */

  const {
    location: { city, country },
    urls: { regular },
    user: { username, name, profile },
  } = photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        photo={photo}
        toggleFavorite={toggleFavorite}
      />
      <img
        src={regular}
        alt={`Photo Taken in ${city}, ${country} by ${name} (@${username})`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt={`${name}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-info">{username}</div>
          <div className="photo-list__user-location">
            {`${city}, ${country}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
