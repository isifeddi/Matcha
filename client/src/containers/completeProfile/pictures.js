import React from 'react';
import Picture from '../../components/completeProfile/pictures';
import {connect} from "react-redux";
import {sendImages} from '../../actions/imagesAction';
const Pictures = (props) => {
    const { user,images,sendImages } = props;
const [imagePreviewUrl,setImagePreviewUrl] = React.useState();

const fileChangedHandler = (event) => {
  //console.log(event.target.files[0]);
    let files  = event.target.files[0];
    const formData = new FormData();
    formData.append('files',files);
    //const data = {formData, userId : user.id};
    // axios.post('https://localhost:5000/upload',{formData : formData, userId : user.id},headers)
    // .then((res) =>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })
    sendImages(formData,user.id);
    let reader  = new FileReader();
    reader.onload = (event) => {
        setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(files);

}
    return (
        <div>
            <Picture fileChangedHandler = {fileChangedHandler} imagePreviewUrl = {imagePreviewUrl} images = {images}/>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);