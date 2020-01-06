import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import ViewProfile from './viewProfile';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
//import Viewp from './vP';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width:100,
    backgroundColor: theme.palette.secondary.main
  },
  rating: {
    maxWidth:400
  },
  margin: {
    height: theme.spacing(3),
  },
  card: {
    borderRadius : '20px',
    backgroundColor :'#DBDFF3' 
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();
  const {users,handleSubmit,handleBlock,handleLike,handleViewProfile,handleChangeAge,handleChangeLoc,handleChangeRating,handleChangeTags,age,tags,loc,rating} = props;
  
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 0.5,
      label: '0.5',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 1.5,
      label: '1.5',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 2.5,
      label: '2.5',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 3.5,
      label: '3.5',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 4.5,
      label: '4.5',
    },
    {
      value: 5,
      label: '5',
    },
  ];
  const marksTags = [
    {value: 0,label: '0'},{value: 1,label: '1'},{value: 2,label: '2'},
    {value: 3,label: '3'},{value: 4,label: '4'},{value: 5,label: '5'}];
 

  
    return (
      <>
      <Card className={classes.card}>
        <CardHeader title="FILTRE"  align="center"/>
        <CardContent>
        <Grid container item justify="center" spacing={2} xs={12}>
        <Grid item xs={6} className={classes.rating}>
        <div className={classes.margin} />
        <Typography id="range-slider" gutterBottom align="center">
        Rating
      </Typography>
      <Slider
        value={rating}
        onChange={handleChangeRating}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={0.2}
        marks={marks}
        min={0}
        max={5}
      /> 
        </Grid >
        <Grid item xs={6} className={classes.rating}>
        <div className={classes.margin} />
        <ArrowUpwardIcon onClick={}/>
      <Typography id="range-slider" gutterBottom align="center">
        AGE
      </Typography>
      <Slider
        value={age}
        onChange={handleChangeAge}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={1}
        min={18}
        max={120}
      /> 
        </Grid>
        <Grid item xs={6} className={classes.rating}>
        <div className={classes.margin} />
      <Typography id="range-slider" gutterBottom align="center">
        Localisation
      </Typography>
      <Slider
        value={loc}
        onChange={handleChangeLoc}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={1000}
        min={0}
        max={50000}
      /> 
        </Grid>
        <Grid item xs={6} className={classes.rating}>
        <div className={classes.margin} />
      <Typography id="range-slider" gutterBottom align="center">
        Tags Commun
      </Typography>
      <Slider
        value={tags}
        onChange={handleChangeTags}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={1}
        marks={marksTags}
        min={0}
        max={5}
      /> 
        </Grid>
       
      
      
      
      <div className={classes.margin} />
      
  
      </Grid>
        </CardContent>
        <CardActions>
        <Button type="submit" onClick={handleSubmit} color="primary" className={classes.submit} fullWidth variant="contained" >Send</Button>
        </CardActions>
     
      </Card>
      
      
    {users.status !== 'loading' &&
    <div className={classes.root}>
          {users.isUsers === true &&  users.users.map(tile => (
            <GridList key={tile.user.id}>
              <ViewProfile key={tile.user.id}  user={tile.user} images={tile.images} interests={tile.interests} handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile}/>
            </GridList>
          ))}
      </div>}
    {users.status === 'loading' && <div className={classes.root}><CircularProgress color="secondary"/></div>}
    </>
    );
}