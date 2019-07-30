import React, { useState, useEffect } from "react";
// import "./App.css";
import TradeForm from "./TradeForm";
import "semantic-ui-css/semantic.min.css";
import TradeCardOutput from "./TradeCardOutput";
import OutputTrade from "./ApiData";
import TradeNav from "./TradeNav";
import axios from "axios";
import ApiData from "./ApiData";

function TradingHome() {
  const [trade, setTrade] = useState([]);
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log("Crypto data:", res.data.results);
        setCrypto(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const tradeChange = newTrade => {
    setTrade([...trade, newTrade]);
  };

  return (
    <div className="App">
      <TradeNav />
      <h1>We are Trading Now</h1>
      <TradeForm teamAdd={tradeChange} />
      <h2>Here are your Trades!</h2>
      <div>
        {trade.map((result, index) => (
          <ApiData key={index} newResult={result} />
        ))}
      </div>

      <section className="crypto-list grid-view">
        {crypto.map(cryp => {
          return <TradeCardOutput key={cryp.id} cryp={cryp} />;
        })}
      </section>
    </div>
  );
}

export default TradingHome;

// below is App.js just making sure path is workign ok

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import TradeDis from "./components/TradeDis";
// import "semantic-ui-css/semantic.min.css";
// import TradeCardOutput from "./components/TradeCardOutput";
// import OutputTrade from "./components/OutputTrade";
// import TradeNav from "./components/TradeNav";
// import axios from "axios";

// function App() {
//   const [trade, setTrade] = useState([]);
//   const [crypto, setCrypto] = useState([]);

//   const tradeChange = newTrade => {
//     setTrade([...trade, newTrade]);
//   };

//   useEffect(() => {
//     axios

//       .get("https://rickandmortyapi.com/api/character/")
//       .then(res => {
//         console.log("Crypto data:", res.data.results);
//         setCrypto(res.data.results);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <TradeNav />
//       <h1>We are Trading Now</h1>
//       <TradeDis teamAdd={tradeChange} />
//       <h2>Here are your Trades!</h2>
//       <div>
//         {trade.map((result, index) => (
//           <OutputTrade key={index} newResult={result} />
//         ))}
//       </div>
//       <section className="api-print">
//         {crypto.map(cryp => {
//           return <TradeCardOutput key={cryp.id} cryp={cryp} />;
//         })}
//       </section>
//     </div>
//   );
// }

// export default App;
