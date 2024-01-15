import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);

  const toggleFav = useCallback(() => {
    setIsFav((prev) => !prev);
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        {/* Render the FavIcon component and pass the isFav state */}
        <FavIcon isFav={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
