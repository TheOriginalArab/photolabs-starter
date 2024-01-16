import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ( { 
  photos,
  topics,
  favoritePhotos
}) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge favoritePhotos={favoritePhotos} photos={photos}/>
    </div>
  );
};

export default TopNavigation;
