import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

// const useStyles = makeStyles({
//   card: {
//     minWidth: 150,
//     position : 'center',
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   upload: {
    
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   h3 : {
//       color :"primary"
//   }
// });

export default function SimpleCard() {
  //const classes = useStyles();
  return (
    <Grid container xs={12}>
        <Grid container  justify="center" width>
        
            <input type='file' />
            <AddAPhotoIcon  color='primary' style={{fontSize : 100}}/>
            <Typography component="h1" variant="h6" align="center" color='primary'>
            Add Photos
          </Typography>
       
        </Grid>
    </Grid>
  );
}
