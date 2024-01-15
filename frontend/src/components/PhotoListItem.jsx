import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data }) => {
  /* Insert React */

  //const {data} = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img
        src={data.imageSource}
        alt={data.location.city + " photo"}
        className="photo"
      />
      <div className="photo-info">
        <img src={data.profile} alt={data.username} className="user-profile" />
        <div className="user-info">
          <div className="user-name">{data.username}</div>
          <div className="location">
            {data.location?.city}, {data.location?.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
