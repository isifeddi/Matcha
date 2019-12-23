import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from '@material-ui/core/IconButton';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
}, root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',

},
gridList: {
  width: 500,
  height: 450,
},
titleBar: {
  background:
    'linear-gradient(to top, rgba(0,0,0,0.6) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
},
delete : {
  background : 'none'
},
add : {
  display: 'none',
}
}));
const calcImages = (images) =>{
  let len = 0;
  if(images != null){
    len = images.length;
    if(len > 4){
      return false;
    }
  }
  return true;
  
}

const  Pictures = (props) => {
  const {fileChangedHandler,images,deletePicture,setProfilePicture} = props;
  const classes = useStyles();
  // const fun = ()=>{
  //   const url =  'http://localhost:5000/images/2019-12-10T00:14:23.376Z655568.jpg'
  //   console.log(url);
  //   return(url);
  // }

  return (
    <Container>
    <CssBaseline />
      <Grid container  justify="center">
       <div className={calcImages(images.images) === false ? classes.add : ''}>
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={fileChangedHandler}/>
         <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddAPhotoIcon color='primary' style={{fontSize : 70}}/>
          </IconButton>
        </label>
        </div>
      
      </Grid>
      
      {/* {images.images && images.images.map(item =>{
       console.log(item.path)
        return (<img src={img} alt="icon" width="200" />) */}

          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>

              {images.isImages  && images.images.map((tile) => {
                return (
                  <GridListTile  key={tile.id}>
                    <img src={`http://localhost:5000/images/${tile.path}`} alt='photos' />
                    <GridListTileBar
                      actionPosition="left"
                      className={classes.titleBar}
                      title={tile.isProfilePic === 1 && 'Profile picture'}
                      actionIcon={
                        <button  imgid = {tile.id}  onClick={setProfilePicture}>profPic</button>
                        //<AddToPhotosTwoToneIcon color='primary' imgId = {tile.id} color="secondary" onClick={setProfilePic}/>
                      }
                    />
                    <GridListTileBar
                      className={classes.delete}
                      titlePosition="top"
                      actionIcon={
                        <button imgid={tile.id} isprofilepic={tile.isProfilePic} onClick={deletePicture}>DEl</button>
                      }
                    />
                  </GridListTile> 
                )}
              )}
            </GridList>
            
          </div>
    </Container>
  )
}
  
export default Pictures;