import React, { useState, useEffect } from "react";
import TradeForm from "./TradeForm";
import "semantic-ui-css/semantic.min.css";
import TradeNav from "./TradeNav";
import axios from "axios";
import ApiData from "./ApiData";
import { Header, Table } from "semantic-ui-react";

function TradingHome() {
  const [trade, setTrade] = useState([]);
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=LKWC7HB4USLTPXIL"
      )
      .then(res => {
        console.log("Crypto data:", res.data["Global Quote"]);
        setCrypto(res.data["Global Quote"]);
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
      {/* <section className="crypto-list grid-view">
        {crypto.map(cryp => {
          return <TradeCardOutput key={cryp.id} cryp={cryp} />;
        })}
      </section> */}

      <Table celled padded>
        <Table.Header color="teal">
          <Table.Row>
            <Table.HeaderCell singleLine>Ticker/Symbol</Table.HeaderCell>
            <Table.HeaderCell>Open</Table.HeaderCell>
            <Table.HeaderCell>High</Table.HeaderCell>
            <Table.HeaderCell>Low</Table.HeaderCell>
            <Table.HeaderCell>Current Price</Table.HeaderCell>
            <Table.HeaderCell>Volume</Table.HeaderCell>
            <Table.HeaderCell>Latest Trading</Table.HeaderCell>
            <Table.HeaderCell>Previous Close</Table.HeaderCell>
            <Table.HeaderCell>Change</Table.HeaderCell>
            <Table.HeaderCell>% Change</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                {crypto["01. symbol"]}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>{crypto["02. open"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["03. high"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["04. low"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["05. price"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["06. volume"]}</Table.Cell>
            <Table.Cell singleLine>
              {crypto["07. latest trading day"]}
            </Table.Cell>
            <Table.Cell singleLine>{crypto["08. previous close"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["09. change"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["10. change percent"]}</Table.Cell>
          </Table.Row>
          <Table.Row />
        </Table.Body>
      </Table>
    </div>
  );
}

export default TradingHome;
