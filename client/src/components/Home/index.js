import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ViewProfile from './viewProfile';
//import Viewp from './vP';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();
  const {users,handleBlock,handleLike,handleViewProfile} = props;
    return (
      <>
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