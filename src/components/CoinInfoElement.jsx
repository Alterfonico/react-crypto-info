import React from "react";

const CoinInfoElement = (props) => {
  return (
    <li
      style={{
        border: "solid black 1px",
        listStyle: "none",
        margin: "1rem",
        backgroundColor: "lightgray",
      }}
    >
      <img src={props.image} alt={props.name} style={{ width: "50px" }} />
      <p>Name: {props.name}</p>
      <p>Rank: {props.rank}</p>
      <p>MarketCap: {props.market}</p>
      <p>Homepage: {props.page}</p>
      <p>Genesis Date: {props.date}</p>
    </li>
  );
};

export default CoinInfoElement;
