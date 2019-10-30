import React, { useState } from "react";
import "./App.css";

function App() {
  const [bets, setBets] = useState([]);

  async function getBets() {
    const response = await fetch(
      "http://ebtutorial-env.mcgkxmuc2r.eu-west-2.elasticbeanstalk.com/api/v1/bets"
    );
    const json = await response.json();
    setBets(json.bets);
  }

  getBets();

  return <div className="App">{JSON.stringify(bets)}</div>;
}

export default App;
