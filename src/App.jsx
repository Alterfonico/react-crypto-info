import React from "react";
import CoinInfo from "./components/CoinInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Info</h1>
        <p>Top-five cryptocurrencies by market cap*</p>
        <p>*by August 2021</p>
      </header>

      <CoinInfo />
    </div>
  );
}

export default App;
