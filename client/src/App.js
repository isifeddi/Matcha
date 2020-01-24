import React from 'react';
import NavBar from '../src/containers/Navbar';
import Footer from '../src/components/Footer';
import Routes from './Routes/Routes';
import socket from './socketConn';

function App(props) {
  
  const handlerFunc =  () =>  {
    props.store.dispatch({type: "REJOIN_ROOM"});
  }
  socket.on('connect', handlerFunc);

  return (
    <div className="App">
      <NavBar />
      <Routes />
     <Footer/>
    </div>
  );
}

export default App;
