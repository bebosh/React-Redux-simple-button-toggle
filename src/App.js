import React from 'react';
import Container from './components/container'

function App() {
  return (
    <div className="App">
     <h2>React-redux toggle button example</h2> 
     <p>just a simple toggle butto with react and redux, I made it as symple as possible to have clear the action - reducer - component cylcle </p>
      <Container />
    </div>
  );
}

export default App;
