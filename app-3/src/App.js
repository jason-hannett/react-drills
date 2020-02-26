import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      filterString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }

  handleChange(filter){
    this.setState({filterString: filter})
  }

  render() {
    let foodsDisplay = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {foodsDisplay}
      </div>
    );
  }
}
export default App;
