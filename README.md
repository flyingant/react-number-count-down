# react-count-down

react-count-down is a react component help to display a simple count down number

## Installation

`npm install react-number-count-down --save`

## Usage

```javascript

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CountDown from 'react-number-count-down';

ReactDOM.render(
  <CountDown from={0} to={60} type={'+'} addon={'seconds'} interval={1} onComplete={() => alert('Count down completed')} />,
  document.getElementById('root'));

```

## Development

    npm install
    npm start
