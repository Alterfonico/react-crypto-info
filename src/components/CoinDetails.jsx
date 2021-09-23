import React, {useState} from 'react';
import { cryptoDatabase } from '../data/CryptoDatabase';
import CoinData from '../data/coindata.json';
import RowLogos from './RowLogos';


// Creating a function to handle the event of displaying the details about the coin

// console.log("fooArray", cryptoDatabase);
// const testArray = [];
// testArray.push(cryptoDatabase.bitcoin.rank)

// const jsonString = JSON.stringify(cryptoDatabase.bitcoin);
// const jsonObject = JSON.parse(jsonString);



export function displayDetails(e) {
    const targetValue = e.target.alt;
    const selectCoin = cryptoDatabase[targetValue];
    const objectToString = JSON.stringify(selectCoin);

    document.getElementById("deets").innerHTML = objectToString; 
    console.log(selectCoin);
    
}


export default function CoinDetails() {

    return (
        <main className="div-description">

            <div className="grid-description">
                

                {/* <img
                    src="images/bitcoin-btc-logo.svg"
                    loading="lazy"
                    alt=""
                    className="logo-description"
                /> */}

                <p className="p-query">
                    Market Cap Rank:
                    <br />
                    Market Cap:
                    <br />
                    Homepage:
                    <br />
                    Genesis Date:
                </p>
                <p id="deets">{displayDetails}</p>
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
    )
}


// function showDetails(event) {
//     CoinData.map((coinDetails, index) => {
//         return <p>{coinDetails.rank}</p>
//     })
//     // const targetValue = event.target.alt;
//     // const coinInfo = cryptoDatabase[targetValue];
// }



// const [stateCoins, setStateCoins] = useState(0);
// const coinHandler = function (event) { 
//     const targetValue = event.target.value;
//     console.log(targetValue);
// }
