/*Importing components and dependencies*/
import React from 'react';
import LandingPage from './components/LandingPage';
import MapSection from './components/map'

/*hardcoding location as a variable*/
const location = {
  address: 'Panda Event Center, Sabo.',
  lat: 6.423567,
  lng: 3.445344,
}

/*declaring the App function*/
function App() {
  return (
    <div className="App">
      <LandingPage />
      <MapSection location={location} zoomLevel={17} />
    </div>
  );
}

export default App; /*exporting App as a component*/