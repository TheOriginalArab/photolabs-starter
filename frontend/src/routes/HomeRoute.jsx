import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  favoritePhotos,
  toggleFavorite,
  handleSelectPhoto,
  fetchPhotosByTopic,
  fetchAllPhotos,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        photos={photos}
        topics={topics}
        favoritePhotos={favoritePhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        fetchAllPhotos={fetchAllPhotos}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        handleSelectPhoto={handleSelectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
