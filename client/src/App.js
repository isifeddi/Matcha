import React from 'react';
import NavBar from '../src/containers/Navbar';
import Footer from '../src/components/Footer';
import Routes from './Routes/Routes';
import socket from './socketConn';
import MyFlash from './components/commun/flash';
function App(props) {
  //console.log(props.store.getState().user);
  const handlerFunc =  () =>  {
    props.store.dispatch({type: "REJOIN_ROOM"});
  }
  // const handleNotif = (data) => {
  //   console.log()
  // }
  socket.on('connect', handlerFunc);
  //socket.on('new_notif', handleNotif);
  return (
    <div className="App">
      {/* {<MyFlash variant="info" msg={['hello', 'salam', 'cc']}/>} */}
      <NavBar />
      <Routes />
     <Footer/>
    </div>
  );
}

export default App;
