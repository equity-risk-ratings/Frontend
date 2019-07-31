import React, { useState, useEffect } from "react";
import TradeForm from "./TradeForm";
import "semantic-ui-css/semantic.min.css";
import TradeCardOutput from "./TradeCardOutput";
import OutputTrade from "./ApiData";
import TradeNav from "./TradeNav";
import axios from "axios";
import ApiData from "./ApiData";
import { Search, Grid, Header, Segment } from "semantic-ui-react";

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
      <TradeNav />

      <h1>Traders View</h1>
      <TradeForm teamAdd={tradeChange} />
      <h2>Recent Transactions</h2>
      <div>
        {trade.map((result, index) => (
          <ApiData key={index} newResult={result} />
        ))}
      </div>
      <section className="crypto-list grid-view">
        {crypto.map(cryp => {
          return <TradeCardOutput key={cryp.id} cryp={cryp} />;
        })}
      </section>
    </div >
  );
}

export default TradingHome;