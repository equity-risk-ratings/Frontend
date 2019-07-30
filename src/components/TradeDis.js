import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function TradeDis(props) {
  const [user, setUser] = useState({
    name: "",
    AcctNumber: "",
    TickerSymbol: "",
    Quantity: ""
  });

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedUser
    );
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("TEST:", user);
    props.teamAdd(user);
  };

  return (
    <Segment inverted>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="name"
            fluid
            label="name"
            placeholder="Username"
            value={user.name}
            onChange={event => handleChange(event)}
          />
          <Form.Input
            name="AcctNumber"
            fluid
            label="Acct Number"
            placeholder="####"
            value={user.AcctNumber}
            onChange={event => handleChange(event)}
          />
          <Form.Input
            name="TickerSymbol"
            fluid
            label="Ticker Symbol"
            placeholder="Symbol"
            value={user.TickerSymbol}
            onChange={event => handleChange(event)}
          />
          <Form.Input
            name="Quantity"
            fluid
            label="Quantity"
            placeholder="#Qty"
            value={user.Quantity}
            onChange={event => handleChange(event)}
          />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms of the Trade Conditions" />
        <Button type="submit">Trade</Button>
      </Form>
    </Segment>
  );
}
