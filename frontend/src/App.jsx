import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import mockPhotoData from "mocks/photos";
import mockTopicData from "mocks/topics";
import { useState } from "react";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState({});

  const toggleFavorite = (id) => {
    setFavoritePhotos((prevFavoritePhotos) => {
      const newFavorites = { ...prevFavoritePhotos };

      if (newFavorites[id]) {
        delete newFavorites[id];
      } else {
        newFavorites[id] = true;
      }
      //console.log(newFavorites);
      return newFavorites;
    });
  };

  return (
    <div className="App">
      <HomeRoute
        photos={mockPhotoData}
        topics={mockTopicData}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
