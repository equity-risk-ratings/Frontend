import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function ApiData({ newResult }) {
  console.log("i am a prop", newResult);

  return (
    // <Card.Group limit={5} style={{ margin: 20, color: "teal" }}>
    //   <Card limit={5}>
    //     <Card.Content limit={5} header={newResult.name} />
    //     <Card.Meta color="teal">{newResult.TickerSymbol}</Card.Meta>
    //     <Card.Description>
    //       Account on Execution:
    //       {newResult.AcctNumber}
    //     </Card.Description>
    //     <Card.Content extra>
    //       <Icon name="exchange" color="teal" />
    //       Trade Size: {newResult.Quantity}
    //     </Card.Content>
    //   </Card>
    // </Card.Group>
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Card.Header>{newResult.name}</Card.Header>
          <Card.Meta>Ticker: {newResult.TickerSymbol}</Card.Meta>
          <Card.Description>
            Updated Portfolio: {newResult.Quantity}{" "}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
