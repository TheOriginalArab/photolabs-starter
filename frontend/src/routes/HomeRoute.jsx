import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ( { 
  photos,
  topics,
  favoritePhotos,
  toggleFavorite,
  onPhotoClick
}) => {

  return (
    <div className="home-route">
      <TopNavigation
        photos={photos}
        topics={topics}
        favoritePhotos={favoritePhotos}
      />
      <PhotoList 
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
