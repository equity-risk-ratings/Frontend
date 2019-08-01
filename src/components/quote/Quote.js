import React from "react";
import axios from "axios";
import { Statistic, Segment, Input } from "semantic-ui-react";
import "./Quote.css";

function Quote() {
  const [state, setState] = React.useState({});
  const [ticker, setTicker] = React.useState();
  const [data] = React.useState({
    symbol: state["01. symbol"],
    open: "",
    high: "",
    low: "",
    price: "",
    volume: "",
    leatestTradingDay: "",
    change: "",
    changePercent: ""
  });

  React.useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=LKWC7HB4USLTPXIL`
      )
      .then(res => {
        setState(res.data["Global Quote"]);
        console.log("%cState was successfully set 👍", "color: green;");
        console.log(state);
      })
      .catch(err => {
        console.log("Error Caught:", err);
      });
  }, [data, state, ticker]);
  /*
    React.useEffect(() => {
      setData({
        symbol: state['01. symbol'],
        open: state['02. open'],
        high: state['03. high'],
        low: state['04. low'],
        price: state['05. price'],
        volume: state['06. symbol'],
        leatestTradingDay: state['07. symbol'],
        change: state['09. symbol'],
        changePercent: state['10. symbol'],
      });
    }, [data, state]); */

  /* symbol: ['01. symbol'],
    open: ['02. open'],
    high: ['03. high'],
    low: ['04. low'],
    price: ['05. price'],
    volume: ['06. symbol'],
    leatestTradingDay: ['07. symbol'],
    change: ['09. symbol'],
    changePercent: ['10. symbol'], */

  /* const { symbol, open, high, low, price, volume, leatestTradingDay, change, changePercent } = data; */

  return (
    <div>
      <Segment.Group compact raised className="segGroup">
        <Input
          type="text"
          placeholder="Ticker Symbol"
          value={ticker}
          onChange={e => setTicker(e.target.value)}
        />
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["01. symbol"]}</Statistic.Value>
            <Statistic.Label>Ticker Symbol</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["02. open"]}</Statistic.Value>
            <Statistic.Label>Open</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["03. high"]}</Statistic.Value>
            <Statistic.Label>High</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["04. low"]}</Statistic.Value>
            <Statistic.Label>Low</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["05. price"]}</Statistic.Value>
            <Statistic.Label>Price</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["06. volume"]}</Statistic.Value>
            <Statistic.Label>Volume</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["07. latest trading day"]}</Statistic.Value>
            <Statistic.Label>Latest Trading Day</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["09. change"]}</Statistic.Value>
            <Statistic.Label>Change</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Statistic horizontal color="teal">
            <Statistic.Value>{state["10. change percent"]}</Statistic.Value>
            <Statistic.Label>Change Percentage</Statistic.Label>
          </Statistic>
        </Segment>
      </Segment.Group>
    </div>
  );
}

export default Quote;
