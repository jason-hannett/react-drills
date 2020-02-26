import React from 'react';
import Image from './Component/Image'
import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <img/>
        <Image url={"https://http.cat/409"}/>
      </div>
    );
  }
}

export default App;
