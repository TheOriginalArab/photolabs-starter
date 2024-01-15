import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photoListItems = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      {photoListItems.map((data, index) => (
        <PhotoListItem key={index} data={data} />
      ))}
    </div>
  );
};

export default App;
