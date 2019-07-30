import React, { useState, useEffect } from "react";
import axios from 'axios';
import "semantic-ui-css/semantic.min.css";
import TradeDis from "./TradeDis";
import TradeCardOutput from "./TradeCardOutput";
import OutputTrade from "./OutputTrade";
import TradeNav from "./TradeNav";

function TradingHome() {
  const [trade, setTrade] = useState([]);
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log("Crypto data:", res.data.results);
        setCrypto(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const tradeChange = newTrade => {
    setTrade([...trade, newTrade]);
  };

  return (
    <div className="App">
      <section className="crypto-list grid-view">
        {crypto.map(cryp => {
          return <TradeCardOutput key={cryp.id} cryp={cryp} />;
        })}
      </section>
      <TradeNav />
      <h1>We are Trading Now</h1>
      <TradeDis teamAdd={tradeChange} />
      <h2>Here are your Trades!</h2>
      <div>
        {trade.map((result, index) => (
          <OutputTrade key={index} newResult={result} />
        ))}
      </div>
      <TradeCardOutput />
    </div>
  );
}

export default TradingHome;