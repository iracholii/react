import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const renderSeconds = (time) => {
  const root = document.querySelector('#root');

  const seconds = new Date().getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const style = {
    backgroundColor,
    color: textColor,
  };

  const element = (
    <>
      <div className="seconds" style={style}>
        Now is {seconds}
      </div>
    </>
  );

  ReactDOM.render(element, root);
};

setInterval(() => renderSeconds(new Date()), 1000);
