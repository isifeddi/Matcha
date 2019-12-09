import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from '@material-ui/core/IconButton';
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
  const {fileChangedHandler,imagePreviewUrl} = props;
  const classes = useStyles();
  
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
      {/* <Grid item container alignItems="flex-end" xs={3}>
        <Button  onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Next</Button>
      </Grid> */}
    </Container>
  )
}
  
export default Pictures;