import React from 'react'
import img from '../../image/404.jpg'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
 
    body: {
        
    },
    
    }))


const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
        <img src={img} alt="NotFoundPage"/>
        </div>
    )
}

export default NotFoundPage
