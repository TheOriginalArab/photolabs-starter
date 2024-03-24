import React from "react";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoList.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  photoId,
  photos,
  favoritePhotos,
  toggleFavorite,
  handleModalClose,
  selectedPhoto,
  handleSelectPhoto,
}) => {
  const photo = photos.find((p) => p.id === photoId);

  const similarPhoto = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleModalClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton
          photoId={photo.id}
          selectedPhoto={selectedPhoto}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
        />
        {selectedPhoto && (
          <img
            className="photo-details-modal__image"
            key={selectedPhoto.id}
            src={photo.urls.full}
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
          className="photo-details-modal__images"
          photos={similarPhoto}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          handleSelectPhoto={handleSelectPhoto}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
