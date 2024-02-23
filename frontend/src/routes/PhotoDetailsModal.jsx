import React from "react";
import PhotoList from "components/PhotoList";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoList.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  photoId,
  photos,
  favoritePhotos,
  toggleFavorite,
  isOpen,
  onClose,
  selectedPhoto,
}) => {
  if (!isOpen) return null;

  const photo = photos.find((p) => p.id === photoId);

  const similarPhoto = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        {selectedPhoto && (
          <img
            key={selectedPhoto.id}
            src={photo.urls.full}
            className="photo-details-modal__image"
          />
        )}
        <div className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt="User Profile"
            />
            <div>
              <div className="photo-details-modal__photographer-info">
                {photo.user.name}
              </div>
              <div className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>
        </div>
        <h3>Similar Photos:</h3>
        <PhotoList
          photos={similarPhoto}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
