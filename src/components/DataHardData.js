import React from 'react';

import data from '../dummyData';

const DataHardData = () => {
    return (
        <div className="stockContainer">
        {data.map((stock) => {
            return (
            <section>
                <div>{stock.stockName}</div>
                <div>{stock.stockPrice}</div>
                <div>{stock.changeDollar}</div>
                <div>{stock.changePercent}</div>
            </section>
            )
        })}
        </div>
        
    )
}

export default DataHardData;