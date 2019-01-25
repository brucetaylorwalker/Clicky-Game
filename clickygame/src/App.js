import React, { Component } from 'react';
// import './App.css';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

class App extends Component {

  state = {
    score: 0,
    tally: 0,
    cards: cards
  };

  handleClicked = id => {
    this.setState({
      tally: this.state.tally + 1
    });
    alert(`clicked card with id of ${id}`);
  }

  render() {
    return (
      <div className="container">
        <Scoreboard score={this.state.score} tally={this.state.tally} />
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
