import { useState, useReducer } from "react";
import photos from "mocks/photos";

const useApplicationData = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = (id) => {
    if (favoritePhotos.includes(id)) {
      return setFavoritePhotos(
        favoritePhotos.filter((favPhotoId) => favPhotoId !== id)
      );
    } else {
      return setFavoritePhotos((prev) => [...prev, id]);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return {
    favoritePhotos,
    toggleFavorite,
    selectedPhoto,
    isModalOpen,
    handlePhotoClick,
    handleModalClose,
  };
};

export default useApplicationData;
