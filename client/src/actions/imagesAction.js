export const GET_IMAGES = "GET_IMAGES";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_ERROR = "GET_IMAGES_ERROR";
export const SEND_IMAGES = "SEND_IMAGES";
export const SEND_IMAGES_ERROR = "SEND_IMAGES_ERROR";
export const SEND_IMAGES_SUCCESS = "SEND_IMAGES_SUCCESS";
export const getImages= (user_id) => ({
    "type": GET_IMAGES,
    user_id
});
export const getImagesSuccess= (images) => ({
    "type": GET_IMAGES_SUCCESS,
    images
});
export const getImagesError= (err) => ({
    "type": GET_IMAGES_ERROR,
    err
});

export const sendImages= (data) => ({
    "type": SEND_IMAGES,
    data
});
export const sendImagesError= (err) => ({
    "type": SEND_IMAGES_ERROR,
    err
});
export const sendImagesSuccess= () => ({
    "type": SEND_IMAGES_SUCCESS,
});