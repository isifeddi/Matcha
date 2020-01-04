import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Divider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
 const useStyles = makeStyles(theme => ({
   root: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 550,
    borderRadius : '15px',
    backgroundColor: '#DBDFF3',
   },
   large: {
     width: 75,
     height: 75,
   },
 }));

 export default function CheckboxListSecondary(props) {
   const {blockList,handleDeblock,likeList,handleDislike} = props;
   console.log(blockList.users)
   const classes = useStyles();

   return (
  <>
     <Grid container justify="center">
       <List className={classes.root}> 
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
               <button userid={value.id} onClick={handleDeblock}>Deblock</button>
             </ListItemSecondaryAction>
           </ListItem>
       ))}
     </List>
     <List className={classes.root}> 
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
               <button userid={value.id} onClick={handleDislike}>Dislike</button>
             </ListItemSecondaryAction>
           </ListItem>
       ))}
     </List>
   </Grid>
  </>
    
   );
 }