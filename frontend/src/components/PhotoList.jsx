import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  toggleFavorite,
  favoritePhotos,
  handleSelectPhoto,
}) => {
  return (
    <ul className="photo-list">
      {photos &&
        photos.map((photo) => (
          <PhotoListItem
            key={photo.id}
            photoId={photo.id}
            photo={photo}
            photos={photos}
            favoritePhotos={favoritePhotos}
            toggleFavorite={toggleFavorite}
            handleSelectPhoto={handleSelectPhoto}
          />
        ))}
    </ul>
  );
};

export default PhotoList;
