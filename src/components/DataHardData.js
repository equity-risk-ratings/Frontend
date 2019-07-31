import React from 'react';

//This is a mock API - NOT for MVP
import data from '../dummyData';

//These are just basic styles to give the developer visual aide.
import './basicStyles/DataHardData.css';

const DataHardData = () => {
    return (
        <div className="stockContainer">
        {/*Maps over the data from API and create divs displays said data*/}
        {data.map((stock) => {
            return (
            <section className="container">
                <div className="stockName">{stock.stockName}</div>
                <div className="stockPrice">{stock.stockPrice}</div>
                <div className="changeDollar">{stock.changeDollar}</div>
                <div className="changePercent">{stock.changePercent}</div>
            </section>
            )
        })}
        </div>
        
    )
}

export default DataHardData;