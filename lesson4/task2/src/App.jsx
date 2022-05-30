import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="Toronto" offset={-4} />
      <Clock location="Sydney" offset={10} />
      <Clock location="Lisbon" offset={1} />
    </>
  );
};

export default App;
