import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  photos,
  toggleFavorite,
  favoritePhotos,
  handleSelectPhoto,
}) => {
 
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
        className="photo-list__image"
        src={photo.urls.regular}
        onClick={() => handleSelectPhoto(photo)}
        alt="User's Posted Image"
      />
      <div className="photo-list__user-details">
        <img
          src={photo.user.profile}
          alt="User Profile Picture"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-info">{photo.user.name}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
