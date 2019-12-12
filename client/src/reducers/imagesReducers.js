import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_ERROR,
    SEND_IMAGES,
    SEND_IMAGES_SUCCESS,
    SEND_IMAGES_ERROR
} from "../actions/imagesAction";

const DEFAULT_STATE =  {images: [], isImages: false, err : ''};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_IMAGES:
            return { images: null, isImages: 'loading'};
        case GET_IMAGES_SUCCESS:
            return { images: action.images, isImages: true};
        case GET_IMAGES_ERROR:
            return { err : action.err};
        case SEND_IMAGES:
            return { images: 'loading'};
        case SEND_IMAGES_SUCCESS:
            return { images: true};
        case SEND_IMAGES_ERROR:
            return { images: action.err};

      default:
        return state;
    }
}