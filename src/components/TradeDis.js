import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function TradeDis() {
  return (
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input fluid label="Username" placeholder="Username" />
          <Form.Input fluid label="Acct Number" placeholder="####" />
          <Form.Input fluid label="Ticker Symbol" placeholder="Symbol" />
          <Form.Input fluid label="Quantity" placeholder="#Qty" />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms of the Trade Conditions" />
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}
