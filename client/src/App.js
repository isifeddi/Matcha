import React from 'react';
//import Register from './components/user/Register'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
//import Home from '../src/containers/Home'
import Routes from './Routes'
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
