import React from 'react';
import './App.css';
import Map from './components/Map'; 
import EstimateModal from './components/EstimateModal/EstimateModal'
import InfoModal from './components/InfoModal'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Map />
      <EstimateModal />
      <InfoModal />
    </div>
  );
}

export default App;
