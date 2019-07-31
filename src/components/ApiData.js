import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function ApiData({ newResult }) {
  console.log("i am a prop", newResult);

  return (
    <Card.Group style={{ margin: 20, color: "teal" }}>
      <Card>
        <Card.Content header={newResult.name} />
        <Card.Meta color="teal">{newResult.TickerSymbol}</Card.Meta>
        <Card.Description>
          Account on Execution:
          {newResult.AcctNumber}
        </Card.Description>
        <Card.Content extra>
          <Icon name="exchange" color="teal" />
          Trade Size: {newResult.Quantity}
        </Card.Content>
      </Card>
    </Card.Group>
  );
};