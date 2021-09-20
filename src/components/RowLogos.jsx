import React from 'react';
import { cryptoDatabase } from '../data/CryptoDatabase';
import { displayDetails } from './CoinDetails';
import {coinHandler} from './CoinDetails';

// Creating an array to display the logos
const imgArray = [];
for (const keyValue in cryptoDatabase) {imgArray.push(
  <img 
    key={keyValue}
    alt={keyValue}
    src={cryptoDatabase[keyValue].image}
    onClick={displayDetails}
    
  />
);}

// Exporting the function that contains the row of logos as a JSX expression
export default function rowLogos() {
    return (
        <section className="logos-wrapper">
            <button className="div-logo">{imgArray}</button>
            <div className="div-logo eth"></div>
            <div className="div-logo ada"></div>
            <div className="div-logo bnb"></div>
            <div className="div-logo usdt"></div>
      </section>
    )
}