import React from "react";
import "./App.scss";
import "./styles/PhotoDetailsModal.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { photoData, topicData, favoritePhotos },
    toggleFavorite,
    selectedPhoto,
    handleSelectPhoto,
    handleModalClose,
    fetchPhotosByTopic,
    fetchAllPhotos,
  } = useApplicationData();

  const photoId = selectedPhoto?.id;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        fetchPhotosByTopic={fetchPhotosByTopic}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        handleSelectPhoto={handleSelectPhoto}
        fetchAllPhotos={fetchAllPhotos}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photoId={photoId}
          photos={photoData}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          handleModalClose={handleModalClose}
          selectedPhoto={selectedPhoto}
          handleSelectPhoto={handleSelectPhoto}
        />
      )}
    </div>
  );
};

export default App;
