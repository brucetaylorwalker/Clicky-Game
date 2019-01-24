import React, { Component } from 'react';
// import './App.css';
import cards from "./cards.json";



class App extends Component {

  state = {
    score: 0,
    tally: 0,
    cards: cards
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <header>
              <p>Score: {this.state.score}</p>
              <p>Tally: {this.state.tally}</p>
            </header>
          </div>
        </div>
        <div className="row">
          {this.state.cards.map(card => (
            <div
              key={card.id}
              className="car-card col-md-3"
              style={{backgroundImage: `url(${card.image})`}}>
              {card.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}






export default App;
