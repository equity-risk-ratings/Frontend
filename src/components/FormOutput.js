import React from "react";
import { Card } from "semantic-ui-react";

export default function FormOutput({ newResult }) {
  console.log("i am a prop", newResult);

  return (
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Card.Header>Name: {newResult.name}</Card.Header>
          <Card.Meta>Trading Acct: {newResult.AcctNumber}</Card.Meta>
          <Card.Meta>Ticker: {newResult.TickerSymbol}</Card.Meta>
          <Card.Description>
            Portfolio Change: {newResult.Quantity}{" "}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
