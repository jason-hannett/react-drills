import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        listArray: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
      }
    }

    render() {
      let foodsDisplay =this.state.listArray.map((element, index) => {
        return <h2 key={index}>{element}</h2>
      });
    return (
    <div className="App">{foodsDisplay}</div>
    );
  }
}
export default App;
