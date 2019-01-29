import React from "react";

function Scoreboard(props) {
    return (
      <header>
        <div className="row">
        <div className="col-md-12">
          
            {/* <p>Random Number: {props.randomId}</p> */}
            <p>Score: {props.score}</p>
            <p>Tally: {props.tally}</p>
         
        </div>
      </div>
      </header>
    )
}

export default Scoreboard;