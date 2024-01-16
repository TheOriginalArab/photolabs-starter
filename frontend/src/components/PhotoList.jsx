import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ( { 
  photos,
  toggleFavorite,
  favoritePhotos,
  onPhotoClick
} ) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photoId={photo.id}
          photo={photo}
          photos={photos}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
