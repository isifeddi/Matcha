import React from 'react';
//import Register from './components/user/Register'
import Routes from './Routes'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes />
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
