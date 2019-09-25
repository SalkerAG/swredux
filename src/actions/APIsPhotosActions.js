import {
    START_API_PHOTO,
    API_PHOTO_SUCCESS,
    API_PHOTO_ERROR,
} from "../types";

import { photosCharacter } from "../services/API";

export function newPhotosAction(name) {
    return async dispatch => {
        dispatch(newPhoto());
        photosCharacter(name)
          .then(response => {
            dispatch(newPhotoSuccess(response.data.hits));
          })
          .catch(() => {
            dispatch(newPhotoError());
          });
      };
}

export const newPhoto = () => ({
    type: START_API_PHOTO
})

export const newPhotoSuccess = (photos) => ({
    type: API_PHOTO_SUCCESS,
    payload: photos
})

export const newPhotoError = () => ({
    type: API_PHOTO_ERROR
})