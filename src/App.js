import React, { Component } from 'react';
// import './App.css';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

class App extends Component {

  state = {
    randomId: 1,
    score: 0,
    tally: 0,
    cards: cards,
    clicked: false
  };

  componentDidMount() {
    this.setNewRandomId(this.state.cards);
  }

  handleClicked = id => {
    this.setState({
      tally: this.state.tally + 1
    });
  
    if (this.state.randomId === id) {
      this.setState({
        score: this.state.score + 1
      });
      this.setNewRandomId(this.state.cards);
    }
   
  }

  setNewRandomId = (array) => {
    const randomId = array[Math.floor(Math.random() * array.length)].id;
    this.setState({
      randomId: randomId
    });
  }

  render() {
    return (
      <div className="container">
        <Scoreboard
          score={this.state.score}
          tally={this.state.tally}
          randomId={this.state.randomId} />
        <div className="row">
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              handleClicked={this.handleClicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
