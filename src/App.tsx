import React from 'react';
import './App.css';
import Map from './components/Map'; 
import EstimateModal from './components/EstimateModal/EstimateModal'
import InfoModal from './components/InfoModal'
import Instructions from './components/Instructions'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Map />
      <Instructions />
      <EstimateModal />
      <InfoModal />
    </div>
  );
}

export default App;
