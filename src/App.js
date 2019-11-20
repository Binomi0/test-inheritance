import React from 'react';
import './App.css';
import Parent from './components/Parent';
import WithParent from './components/WithParent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Parent /> */}
        <WithParent />
      </div>
    );
  }
}

export default App;
