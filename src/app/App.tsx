import * as React from 'react';
import './App.css';
import HeaderComponent from './components/layout/Header';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HeaderComponent />
      </div>
    );
  }
}

export default App;
