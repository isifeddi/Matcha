import {
    GET_Images,
} from "../actions/imagesAction";

const DEFAULT_STATE =  {images: [], isImages: false};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case GET_Images:
        return { images: action.images, isImages: true};
      default:
        return state;
    }
}