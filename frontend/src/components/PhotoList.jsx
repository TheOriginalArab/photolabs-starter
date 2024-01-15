import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photo) => (
        <li key={photo.id} className="photo-list-item">
          <PhotoListItem data={photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
