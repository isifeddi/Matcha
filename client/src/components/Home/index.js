import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ViewProfile from '../../components/Profile/viewProfile';
const useStyles = makeStyles(theme => ({
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList(props) {
  const classes = useStyles();
  const {users} = props;
  return (
    <div className={classes.root}>
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
        </GridListTile>
        {users && users.map(tile => (
          <GridListTile key={tile.id}>
          
          <ViewProfile user={tile} />
            

          </GridListTile>
        ))}
    </div>
  );
}