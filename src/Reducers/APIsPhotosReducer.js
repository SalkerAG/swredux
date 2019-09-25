import {
    START_API_PHOTO,
    API_PHOTO_SUCCESS,
    API_PHOTO_ERROR
  } from "../types";

// State inicial

const initialState = {
    photos: [],
    loading: false,
    error: null
  };

  export default function(state = initialState, action) {
    switch (action.type) {
     case START_API_PHOTO:
     return {
         ...state,
         loading: true,
         error: null
     }
     case API_PHOTO_SUCCESS:
         return {
             ...state,
             loading: false,
             photos: action.payload,
             error: null
         }
        case API_PHOTO_ERROR:
            return {
                ...state,
                loading: false,
                photos : [],
                error: true
            }
      default:
        return state;
    }
  }
  