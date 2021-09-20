import React from "react";
import CoinInfoElement from "./CoinInfoElement";
import { cryptoDatabase } from "../data/CryptoDatabase";

const CoinInfo = () => {
  return (
    <ul style={{ backgroundColor: "darkgray", padding: "0" }}>
      {cryptoDatabase.map((item) => (
        <CoinInfoElement
          key={item.id}
          name={item.name}
          rank={item.rank}
          image={item.image}
          market={item.marketCap}
          page={item.homepage}
          date={item.genesisDate}
        />
      ))}
    </ul>
  );
};

export default CoinInfo;
