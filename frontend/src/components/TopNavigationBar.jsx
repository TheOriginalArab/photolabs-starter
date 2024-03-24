import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({
  photos,
  topics,
  favoritePhotos,
  fetchPhotosByTopic,
  fetchAllPhotos,
}) => {
  const showAllPhotos = (e) => {
    e.preventDefault();
    fetchAllPhotos();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={showAllPhotos}>
        PhotoLabs
      </span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge favoritePhotos={favoritePhotos} photos={photos} />
    </div>
  );
};

export default TopNavigation;
