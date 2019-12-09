import React, {useState} from 'react';
import Picture from '../../components/completeProfile/pictures';
import {connect} from "react-redux";
import axios from 'axios';
const Pictures = (props) => {
    const {user} = props;
const [imagePreviewUrl,setImagePreviewUrl] = React.useState();

const fileChangedHandler = (event) => {
    //console.log(user);
    let files  = event.target.files[0];
    let reader  = new FileReader();
    reader.onload = (event) => {
        setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(files);
    const headers = {'Content-Type': 'multipart/form-data'};
    const formData = new FormData();
    formData.append('files',files);
    const response = axios.post('http://localhost:5000/upload',{formData : formData, userId : user.id},headers)
    .then((res) =>{
        console.log('gg'+response);
    })

}
    return (
        <div>
            <Picture fileChangedHandler = {fileChangedHandler} imagePreviewUrl = {imagePreviewUrl}/>
        </div>
    )
}


const mapStateToProps = (state) => (
{
    "user" : state.user,
});
const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);