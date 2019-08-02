import React, { useState /* , Component */, useEffect } from "react";
import axios from "axios";
/* import { Line } from "react-chartjs-2"; */

const TopStockLiveFeed = () => {
  const [low, setLow] = useState([]);
  const [high, setHigh] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOG&interval=5min&apikey=LKWC7HB4USLTPXIL`
      )
      .then(data => {
        console.log(data.data["Time Series (5min)"]["2019-07-31 14:15:00"]);
        setLow(
          data.data["Time Series (5min)"]["2019-07-31 14:15:00"]["3. low"]
        );
        setHigh(
          data.data["Time Series (5min)"]["2019-07-31 14:15:00"]["2. high"]
        );
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <section style={{ color: "black" }}>
        <h2>Yesterday's Top Preformer</h2>
        <h3>Google Stock</h3>
      </section>
      <div style={{ color: "red" }}>Today's low: {low}</div>
      <div style={{ color: "green" }}>Today's high: {high}</div>
    </div>
  );
};

export default TopStockLiveFeed;
