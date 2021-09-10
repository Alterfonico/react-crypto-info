import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Info</h1>
        <p>Top-five cryptocurrencies by market cap*</p>
        <p>*by August 2021</p>
      </header>

      <section class="logos-wrapper">
        <div class="div-logo"></div>
        <div class="div-logo eth"></div>
        <div class="div-logo ada"></div>
        <div class="div-logo bnb"></div>
        <div class="div-logo usdt"></div>
      </section>

      <main class="div-description">
        <div class="grid-description">
          <img
            src="images/bitcoin-btc-logo.svg"
            loading="lazy"
            alt=""
            class="logo-description"
          />
          <p class="p-query">
            Market Cap Rank:
            <br />
            Market Cap:
            <br />
            Homepage:
            <br />
            Genesis Date:{" "}
          </p>
          <p>
            #1
            <br />
            $966 B<br />
            bitcoin.org
            <br />
            January 3, 2009
          </p>
        </div>
        <p>
          Bitcoin is the first successful internet money based on peer-to-peer
          technology; whereby no central bank or authority is involved in the
          transaction and production of the Bitcoin currency. It was created by
          an anonymous individual/group under the name, Satoshi Nakamoto.
          <br />‍
          <br />
          The source code is available publicly as an open source project,  
          anybody can look at it and be part of the developmental process.
        </p>
      </main>
      
    </div>
  );
}

export default App;
