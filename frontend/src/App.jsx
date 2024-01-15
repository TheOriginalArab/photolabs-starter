import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import mockPhotoData from "mocks/photos";
import mockTopicData from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={mockPhotoData} topics={mockTopicData}/>
    </div>
  );
};

export default App;
