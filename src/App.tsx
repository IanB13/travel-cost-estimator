import React from 'react';
import './App.css';
import Map from './components/Map';
import FormModal from './components/formModal/FormModal'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <FormModal />
      <Map />
    </div>
  );
}

export default App;
