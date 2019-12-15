import React from 'react';
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import Routes from './Routes/Routes'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
     <Footer/>
    </div>
  );
}

export default App;
