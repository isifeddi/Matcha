import React from 'react';
import Hink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Hink color="inherit" href="#">
            MATCHA
          </Hink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}

const Footer = () => {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
  );
}

export default Footer;