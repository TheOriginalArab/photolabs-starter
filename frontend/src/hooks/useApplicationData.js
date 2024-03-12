import { response } from "express";
import { useEffect, useReducer } from "react";
//import photos from "mocks/photos";

const initialState = {
  selectedPhoto: null,
  isModalOpen: false,
  favoritePhotos: [],
  photoData: [],
  topicData: [],
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
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
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return { ...state, photoData: action.payload };
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

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_TOPIC_DATA", payload: data });
      });

    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PHOTO_DATA", payload: data });
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json)
      .then((data) => {
        dispatch({ type: "GET_PHOTOS_BY_TOPIC", payload: data });
      });
  };

  const toggleFavorite = (id) => {
    if (state.favoritePhotos.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };

  const handleSelectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };

  const handleModalClose = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  return {
    favoritePhotos: state.favoritePhotos,
    toggleFavorite,
    handleSelectPhoto,
    handleModalClose,
    photoData: state.photoData,
    topicData: state.topicData,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
