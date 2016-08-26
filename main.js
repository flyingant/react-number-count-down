import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CountDown from './src/CountDown';

ReactDOM.render(
  <CountDown from={0} to={60} type={'+'} addon={'seconds'} interval={1} onComplete={() => alert('Count down completed')} />,
  document.getElementById('root'));