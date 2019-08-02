import React, { useState, useEffect } from "react";
import TradeForm from "./TradeForm";
import "semantic-ui-css/semantic.min.css";
import CommitModal from "./CommitModal";
import RatingsList from "./RatingList";
import TradeNav from "./TradeNav";

import axios from "axios";
import FormOutput from "./FormOutput";
import { Header, Table, Button, Icon } from "semantic-ui-react";

function TradingHome() {
  const [trade, setTrade] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [stock, setStock] = useState("VIRT");

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=LKWC7HB4USLTPXIL`
      )
      .then(res => {
        console.log("Api data:", res.data["Global Quote"]);
        setCrypto(res.data["Global Quote"]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [stock]);

  const tradeChange = newTrade => {
    setTrade([...trade, newTrade]);
  };

  const responsive = [
    { breakPoint: 1280, cardsToShow: 4 },
    { breakPoint: 760, cardsToShow: 2 }
  ];

  console.log("state check:", setStock);
  return (
    <div className="TradingHome">
      <TradeNav />

      <Header as="h3" block>
        My Favorite Equities <Icon name="favorite" color="teal" />
      </Header>

      <Button
        basic
        color="teal"
        content="Microsoft"
        onClick={() => setStock("MSFT")}
      />

      <Button
        basic
        color="teal"
        content="Facebook"
        onClick={() => setStock("FB")}
      />

      <Button
        basic
        color="teal"
        content="Blizzard"
        onClick={() => setStock("ATVI")}
      />

      <Button
        basic
        color="teal"
        content="Spyder"
        onClick={() => setStock("SPY")}
      />

      <Button
        basic
        color="teal"
        content="Google"
        onClick={() => setStock("GOOG")}
      />

      <Button
        basic
        color="teal"
        content="Amazon"
        onClick={() => setStock("AMZN")}
      />

      <Button
        basic
        color="teal"
        content="Nvidia"
        onClick={() => setStock("NVDA")}
      />

      <Button
        basic
        color="teal"
        content="Q's"
        onClick={() => setStock("QQQ")}
      />

      <Button
        basic
        color="teal"
        content="Apple"
        onClick={() => setStock("AAPL")}
      />

      <Button
        basic
        color="teal"
        content="Intel"
        onClick={() => setStock("INTC")}
      />

      <Button
        basic
        color="teal"
        content="20yrBOND"
        onClick={() => setStock("TLT")}
      />
      <Button
        basic
        color="teal"
        content="VixEtf"
        onClick={() => setStock("VXX")}
      />

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

      {/* <h1>Trader Execution</h1> */}
      <Header as="h2" icon>
        <Icon name="settings" color="teal" />
        Trading Interface
        <Header.Subheader>
          Enter/Exit and Cancel all trades here
        </Header.Subheader>
      </Header>

      <Button fluid color="red" onClick={toggleModal}>
        Halt Trading
      </Button>
      <TradeForm teamAdd={tradeChange} />
      <h2 color="lightGray">Recent Transactions</h2>
      <div className="results">
        {trade.reverse().map((result, index) => (
          <FormOutput key={index} newResult={result} />
        ))}
      </div>
      {modalOpen ? <CommitModal toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default TradingHome;
