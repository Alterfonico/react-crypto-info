
import RowLogos from './RowLogos';
import CoinDetails from './CoinDetails';
import '../styles.css';


function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h1>Crypto Info</h1>
        <p>Top-five cryptocurrencies by market cap*</p>
        <p>*by August 2021</p>
      </header>

      <RowLogos /> 
      <CoinDetails />
      
    </div>
  );
}

export default App;
