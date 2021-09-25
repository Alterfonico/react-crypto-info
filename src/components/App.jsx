
import RowLogos from './RowLogos';
import CoinDetails from './CoinDetails';
import {cryptoDatabase} from '../data/CryptoDatabase';
import '../styles.css';


function App() {

  return (
    <div className="App">

      <header>
        <h1>Crypto Info</h1>
        <h3>Top-five cryptocurrencies by market cap*</h3>
        <h3 className="disclaimer-date">*August 2021</h3>
      </header>

      <RowLogos /> 
      <CoinDetails/>
      
    </div>
  );
}

export default App;
