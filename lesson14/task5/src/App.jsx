import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const clocks = (
    <>
      <Clock location="London" offset={0} />
      <Clock location="Kyiv" offset={2} />
      <Clock location="New York" offset={-5} />
    </>
  );

  return (
    <>
      <button className="btn" onClick={onClickHandler}>
        Toggle
      </button>
      {isVisible && clocks}
    </>
  );
};

export default App;
