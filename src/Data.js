import React from "react";

import DataHardData from "./components/DataHardData";
import Chart from "./components/Chart";
import TradeNav from "./components/TradeNav";
import DarkModeButton from './components/DarkModeButton';
import TopStockLiveFeed from "./components/TopStockLiveFeed";

import "./components/basicStyles/Data.css";



const Data = () => {
  return (
    <section className="dataDataContainer">
      <TradeNav />  
      <DataHardData />
      <DarkModeButton />
      <Chart />
      <TopStockLiveFeed />
    </section>
  )
}

export default Data;
