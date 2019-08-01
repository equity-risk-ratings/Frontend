import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { modalContainer, innerBox } from "./modal.js";

export default function CommitModal(props) {
  return (
    <div style={modalContainer}>
      <div style={innerBox}>
        <h1>ALL OPEN ORDERS HAVE BEEN CANCELED</h1>
        <Button color="teal" onClick={props.toggleModal}>
          Back to the Market
        </Button>
      </div>
    </div>
  );
}
