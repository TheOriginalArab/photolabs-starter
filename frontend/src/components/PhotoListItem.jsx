import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  photos,
  toggleFavorite,
  favoritePhotos,
  onPhotoClick,
}) => {
  /* Insert React */

  const {
    location: { city, country },
    urls: { regular },
    user: { username, name, profile },
  } = photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photos={photos}
        photo={photo}
        photoId={photo.id}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
      />
      <img
        onClick={() => onPhotoClick(photo)}
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
