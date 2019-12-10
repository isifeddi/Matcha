export const GET_IMAGES = "GET_IMAGES";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_ERROR = "GET_IMAGES_ERROR";

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