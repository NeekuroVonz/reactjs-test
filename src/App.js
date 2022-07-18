import logo from './weedy.png';
import './App.css';
import React from 'react';
import Header from './Header';

// function App() {
class App extends React.Component {
  render() {
    // Javascript
    const topic = 'Duong oi Master ? right';
    return (// JSX
      <div className="App">
        <Header logo={logo} topic={topic} version="1.0.0 RELEASE"/>
      </div>
    );
  };
}

export default App;
