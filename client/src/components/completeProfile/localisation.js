import React, {useState}  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleMapReact from 'google-map-react';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
//import MySnackBar from '../commun/snackBar';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    form: {
        height: '40vh',
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Localisation = (props) => {
    const {userL, setLocation} = props;

    const classes = useStyles();

    const [marker, setMarker] = useState(null);

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const handleClick = ({lat, lng}) => {
        setMarker({lat, lng})
        setLocation({lat, lng});
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" color="primary">
                        Localisation
                    </Typography>
                    <Typography color="inherit"> Click to set your location.</Typography>
                    <div  className={classes.form}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key:''}}
                            center={{lat: userL.lat, lng: userL.lng}}
                            defaultZoom={13}
                            onClick={handleClick}
                        >
                        {marker && <AnyReactComponent
                            lat={marker.lat}
                            lng={marker.lng}
                            text={<RoomRoundedIcon color="secondary"/>}
                        />}
                        </GoogleMapReact>
                    </div>
                </div>
        </Container>
    );
}

export default Localisation;