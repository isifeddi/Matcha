import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from '@material-ui/core/IconButton';
import img from '../../public/images/2019-12-10T00:14:23.376Z655568.jpg';
//import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
   height :150,
    position : 'center',
  },
  input: {
    display: 'none',
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
}
}));

const  Pictures = (props) => {
  const {fileChangedHandler,imagePreviewUrl,images} = props;
  const classes = useStyles();
  // const fun = ()=>{
  //   const url =  'http://localhost:5000/images/2019-12-10T00:14:23.376Z655568.jpg'
  //   console.log(url);
  //   return(url);
  // }
  return (
    <Container>
      <Grid container  justify="center" width>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={fileChangedHandler}/>
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddAPhotoIcon color='secondary' style={{fontSize : 70}}/>
          </IconButton>
        </label>
      </Grid>
      { imagePreviewUrl && <img src={imagePreviewUrl} alt="icon" width="200" />}
      {images.images && images.images.map(item =>{
       //console.log(item.path)
        return (<img src={img} alt="icon" width="200" />)
      })}
    </Container>
  )
}
  
export default Pictures;