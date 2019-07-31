import React from "react";
import axios from 'axios';
import { Statistic, Segment } from 'semantic-ui-react';
import './ReactVis.css';

function ReactVis() {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    axios
      .get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=LKWC7HB4USLTPXIL')
      .then(res => {
        setState(res.data['Global Quote']);
        console.log('%cState was successfully set 👍', 'color: green;')
      })
      .catch(err => {
        console.log('Error Caught:', err);
      });
  }, []);

  return (
    <Segment.Group compact raised className='segGroup'>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['01. symbol']}</Statistic.Value>
          <Statistic.Label>Ticker Symbol</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['02. open']}</Statistic.Value>
          <Statistic.Label>Open</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['03. high']}</Statistic.Value>
          <Statistic.Label>High</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['04. low']}</Statistic.Value>
          <Statistic.Label>Low</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['05. price']}</Statistic.Value>
          <Statistic.Label>Price</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['06. volume']}</Statistic.Value>
          <Statistic.Label>Volume</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['07. latest trading day']}</Statistic.Value>
          <Statistic.Label>Latest Trading Day</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['09. change']}</Statistic.Value>
          <Statistic.Label>Change</Statistic.Label>
        </Statistic>
      </Segment>
      <Segment>
        <Statistic horizontal color='teal'>
          <Statistic.Value >{state['10. change percent']}</Statistic.Value>
          <Statistic.Label>Change Percentage</Statistic.Label>
        </Statistic>
      </Segment>
    </Segment.Group>
  );
};
/* const data = {
    symbol: state['01. symbol'],
    open: state['02. open'],
    high: state['03. high'],
    low: state['04. low'],
    price: state['05. price'],
    volume: state['06. volume'],
    latestTradingDay: state['07. latest trading day'],
    previousClose: state['08. previous cloase'],
    change: state['09. change'],
    changePercent: state['10. change percent'],
  } */

export default ReactVis;