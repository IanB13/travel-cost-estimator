import React from 'react';
import './App.css';
import Map from './components/Map';
import EstimateModal from './components/EstimateModal/EstimateModal'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <EstimateModal />
      <Map />
    </div>
  );
}

export default App;
