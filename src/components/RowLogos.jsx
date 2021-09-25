import React from 'react';
import { cryptoDatabase } from '../data/CryptoDatabase';
import { triggerEvents } from './CoinDetails';
import {coinHandler} from './CoinDetails';

// Creating an array to display the logos
const imgArray = [];
for (const keyValue in cryptoDatabase) {imgArray.push(
  <div 
    key={keyValue}
    className="div-logo"
    onClick={triggerEvents}
  >
    <img
      key={keyValue}
      alt={keyValue}
      src={cryptoDatabase[keyValue].image}
      
    />
  </div>
);}

// Exporting the function that contains the row of logos as a JSX expression
export default function rowLogos() {
    return (
        <section className="logos-wrapper"> {imgArray} </section>
        
    )
}