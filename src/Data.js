import React from "react";

import DataHardData from "./components/DataHardData";
import Chart from "./components/Chart";
import TradeNav from "./components/TradeNav";

import "./components/basicStyles/Data.css";


const Data = () => {

  return (
    <section className="dataDataContainer">
      <TradeNav />  
      <DataHardData />
      <Chart />
    </section>
  )
}

export default Data;
