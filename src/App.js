import './App.css';
import React from 'react';
import HomeContainers from './containers/HomeContainers'
import HederContainer from './containers/HederContainer';
function App() {
  return (
    <div className="App">
      <HederContainer />
      <HomeContainers />
    </div>
  );
}

export default App;
