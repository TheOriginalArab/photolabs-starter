import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import mockPhotoData from "mocks/photos";
import mockTopicData from "mocks/topics";
import { useState } from "react";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = (id) => {
    console.log("toggleFavorite triggered!", id);
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

  return (
    <div className="App">
      <HomeRoute
        photos={mockPhotoData}
        topics={mockTopicData}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        onPhotoClick={handlePhotoClick}
      />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        <div>
          {selectedPhoto && <img src={selectedPhoto.urls.regular} />}
        </div>
      </PhotoDetailsModal>
    </div>
  );
};

export default App;
