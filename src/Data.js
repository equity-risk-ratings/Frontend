import React from 'react';

import DataHardData from './components/DataHardData';
import Chart from './components/Chart';

import './components/basicStyles/Data.css';

const Data = () => {
    return (
        <section>
            <DataHardData />
            <Chart />
        </section>
    )
}

export default Data;