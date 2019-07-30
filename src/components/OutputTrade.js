import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function OutputTrade({ newResult }) {
  console.log("i am a prop", newResult);

  return (
    <Card.Group centered itemsPerRow={4}>
      <Card>
        <Card.Content header={newResult.name} />
        <Card.Meta>{newResult.TickerSymbol}</Card.Meta>
        <Card.Description>
          Account on Execution:
          {newResult.AcctNumber}
        </Card.Description>
        <Card.Content extra>
          <Icon name="exchange" />
          Trade Size: {newResult.Quantity}
        </Card.Content>
      </Card>
    </Card.Group>

    // <div className="results-container">
    //   <h3>Name: {newResult.name}</h3>
    //   <h3>ACCT: {newResult.AcctNumber}</h3>
    //   <h3>TICKER: {newResult.TickerSymbol}</h3>
    //   <h3>QTY: {newResult.Quantity}</h3>
    // </div>
  );
}
