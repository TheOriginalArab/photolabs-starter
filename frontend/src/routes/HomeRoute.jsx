import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        favoritePhotos={props.favoritePhotos}
      />
      <PhotoList 
        photos={props.photos} 
        toggleFavorite={props.toggleFavorite}
      />      
    </div>
  );
};

export default HomeRoute;
