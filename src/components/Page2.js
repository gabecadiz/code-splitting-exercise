import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Page 2</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={() => onRouteChange('page1')}>Page1</button>
      <button onClick={() => onRouteChange('page3')}>Page3</button>
    </div>
  )
}

export default Page2;