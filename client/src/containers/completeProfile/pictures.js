import React from 'react';
import Picture from '../../components/completeProfile/pictures';
import {connect} from "react-redux";
import axios from 'axios';

const Pictures = (props) => {
    const {user,images} = props;
const [imagePreviewUrl,setImagePreviewUrl] = React.useState();

const fileChangedHandler = (event) => {
  //console.log(event.target.files[0]);
    let files  = event.target.files[0];
    let reader  = new FileReader();
    reader.onload = (event) => {
        setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(files);
    const headers = {'Content-Type': 'multipart/form-data'};
    const formData = new FormData();
    formData.append('files',files);
    axios.post('https://localhost:5000/upload',{formData : formData, userId : user.id},headers)
    .then((res) =>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

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
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);