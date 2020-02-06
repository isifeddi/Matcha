import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import BlockIcon from '@material-ui/icons/Block';
 const useStyles = makeStyles(theme => ({
   root: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 550,
    borderRadius : '15px',
    backgroundColor: '#E6EAEA',
    margin: '10px'
   },
   large: {
     width: 75,
     height: 75,
     margin: 10
   },
 }));

 export default function CheckboxListSecondary(props) {
   const {blockList,handleDeblock,likeList,handleDislike} = props;
   const classes = useStyles();

   return (
  <>
     <Grid container justify="center">
       <List className={classes.root}> 
       <Typography component="h1" variant="h4" align="center" color='primary'>
            You blocked
        </Typography>
       {blockList.isUsers === true && blockList.users.map((value) => ( 
           <ListItem key={value.id} button>
             <ListItemAvatar>
               <Avatar
               className={classes.large}
                 alt='Avatar'
                 src={`http://localhost:5000/images/${value.profilePic}`}
               />
             </ListItemAvatar>
             <ListItemText id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
             <ListItemSecondaryAction>
              <Tooltip title ="Block"><IconButton aria-label="Block"  onClick={(e) => handleDeblock(value.id)}>
                <BlockIcon  color="secondary"/>
              </IconButton></Tooltip>
             </ListItemSecondaryAction>
           </ListItem>
       ))}
     </List>
     <List className={classes.root}> 
     <Typography component="h1" variant="h4" align="center" color='primary'>
            You liked
        </Typography>
       {likeList.isUsers === true && likeList.users.map((value) => ( 
           <ListItem key={value.id} button>
             <ListItemAvatar>
               <Avatar
               className={classes.large}
                 alt='Avatar'
                 src={`http://localhost:5000/images/${value.profilePic}`}
               />
             </ListItemAvatar>
             <ListItemText id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
             <ListItemSecondaryAction>
             {value.like === 'iLike' &&
              <Tooltip title ="Unlike"><IconButton aria-label="Unlike"  onClick={(e) => handleDislike(value.id)}>
                <FavoriteIcon  color="secondary"/>
              </IconButton></Tooltip>
              }
              {value.like === 'match' &&
                <Tooltip title ="Unmatch"><IconButton aria-label="Unmatch"  onClick={(e) => handleDislike(value.id)}>
                  <SupervisedUserCircleRoundedIcon color="primary"/>
                </IconButton></Tooltip>
              }
             </ListItemSecondaryAction>
           </ListItem>
       ))}
     </List>
   </Grid>
  </>
    
   );
 }