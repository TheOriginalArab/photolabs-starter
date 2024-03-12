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
    //isModalOpen,
    handlePhotoClick,
    handleModalClose,
    fetchPhotosByTopic,
  } = useApplicationData();

  const photoId = selectedPhoto?.id;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        fetchPhotosByTopic={fetchPhotosByTopic}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        onPhotoClick={handlePhotoClick}
      />
      <PhotoDetailsModal
        photoId={photoId}
        photos={state.photoData}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        //isOpen={isModalOpen}
        onClose={handleModalClose}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default App;
