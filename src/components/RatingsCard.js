import React from "react";
import { Card } from "semantic-ui-react";

export default function RatingsCard({ rating }) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>Company:{rating.ticker}</Card.Header>
          <Card.Meta>Our Rating </Card.Meta>
          <Card.Description>{rating.rating}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
