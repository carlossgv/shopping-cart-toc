import React from 'react';
import errorImg from './static/img/404error.png';

const Test = () => {
  return (
    <div style={{ width: '100vw', textAlign: 'center' }}>
      <img src={errorImg} alt="404 Not Found"></img>
    </div>
  );
};

export default Test;
