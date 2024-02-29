import { useState, useReducer } from "react";
//import photos from "mocks/photos";

const initialState = {
  selectedPhoto: null,
  isModalOpen: false,
  favPhotoIdObject: [],
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(
          (favPhotoId) => favPhotoId !== action.payload
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: action.payload };
    default:
      throw new Error(
        `tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const toggleFavorite = (id) => {
  if (state.favoritePhotos.includes(id)) {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
  } else {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
  }
};

const useApplicationData = () => {
  //const [favoritePhotos, setFavoritePhotos] = useState([]);
  /* const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); */

  /* const toggleFavorite = (id) => {
    if (favoritePhotos.includes(id)) {
      return setFavoritePhotos(
        favoritePhotos.filter((favPhotoId) => favPhotoId !== id)
      );
    } else {
      return setFavoritePhotos((prev) => [...prev, id]);
    }
  }; */

  /* const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };
 */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  }; */

  const handleSelectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const handleModalClose = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  return {
    favoritePhotos,
    toggleFavorite,
    handleSelectPhoto,
    handleModalClose,
  };
};

export default useApplicationData;
