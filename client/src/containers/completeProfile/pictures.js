import React from 'react';
import Picture from '../../components/completeProfile/pictures';
import {connect} from "react-redux";
import {sendImages,delImages,setProfilePic} from '../../actions/imagesAction';
const Pictures = (props) => {
const { user,images,sendImages,delImages,setProfilePic} = props;

const fileChangedHandler = (event) => {
    let files  = event.target.files[0];
    const formData = new FormData();
    formData.append('files',files);
    formData.append('user_id',user.id);
    sendImages(formData);
}

const deletePicture = (event) => {
    const imgId = event.target.getAttribute('imgId');
   const isProfilePic = event.target.getAttribute('isProfilePic');
   const img = {
    imgId : imgId,
    isProfilePic :isProfilePic
   }
    delImages(img);
  }
  const setProfilePicture = (event) => {
    const imgId = event.target.getAttribute('imgId');
    setProfilePic(imgId);
  }

    return (
        <div>
            <Picture
                fileChangedHandler = {fileChangedHandler} 
                images = {images} deletePicture={deletePicture} setProfilePicture={setProfilePicture}
            />
        </div>
    )
}


const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.imagesReducer,
});
const mapDispatchToProps = {
    "sendImages" : sendImages,
    "delImages" : delImages,
    "setProfilePic" :setProfilePic
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);