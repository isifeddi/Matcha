import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PlaceTwoToneIcon from '@material-ui/icons/PlaceTwoTone';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import GridList from '@material-ui/core/GridList';
import MonochromePhotosTwoToneIcon from '@material-ui/icons/MonochromePhotosTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';

import ViewProfile from '../../containers/Profile/viewProfile';
import Photos from '../../containers/Profile/photos';
import Maps from '../../containers/Profile/maps';
import ProfileInfo from '../../containers/Profile/profileInfo';
const useStyles = makeStyles(theme => ({
 
  root1: {
    flexGrow: 1,
    //maxWidth: 900,
  },
  card: {
    maxWidth: 500,
    //width: 400
  },
  avatar: {
    backgroundColor: red[500],
    width: 150,
 height: 150,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


export default function SimpleContainer() {
    const [value, setValue] = React.useState(0);
    const valu = 4.5;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const labels = {
        0.5: 'Useless',1: 'Useless+', 1.5: 'Poor',2: 'Poor+',2.5: 'Ok',3: 'Ok+',3.5: 'Good',4: 'Good+',
        4.5: 'Excellent',5: 'Excellent+', 
      };
    const classes = useStyles();
    return (
    <React.Fragment>
      <Grid container  justify="center">
        {/* <Grid item xs={4} sm={6}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe"
                  src="https://c4.wallpaperflare.com/wallpaper/200/466/543/monica-bellucci-actress-women-wallpaper-preview.jpg"
                  className={classes.avatar}>
                </Avatar>
              }
              title="Monica Bellucci "
              subheader={
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">55 ans</Typography>
                  <div className={classes.rating1}>
                  <Box ml={2}>{labels[valu]}</Box>
                    <Rating name="read-only" value={valu} precision={0.5} readOnly/>
                  </div>
                </Box>
              }
            />
            <CardContent>
              <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                  {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}
                        actionIcon={
                          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </CardContent> 
          </Card>
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <Paper square className={classes.root1}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="secondary">
              <Tab icon={<AccountCircleTwoToneIcon />} label="INFOS" id ='0'/>
              <Tab icon={<MonochromePhotosTwoToneIcon />} label="PHOTOS" id='1'/>
              <Tab icon={<PlaceTwoToneIcon />} label="LOCALISATION" id='2'/>
              <Tab icon={<VisibilityTwoToneIcon />} label="VIEW PROFILE" id='3'/>
            </Tabs>
            <TabPanel value={value} index={0}><ProfileInfo /></TabPanel>
            <TabPanel value={value} index={1}><Photos/></TabPanel>
            <TabPanel value={value} index={2}><Maps/></TabPanel>
            <TabPanel value={value} index={3}><ViewProfile/></TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
