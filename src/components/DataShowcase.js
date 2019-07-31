import React from 'react';
import { Bar } from 'react-chartjs-2';



const DataShowcase = () => {
    return (
        <Bar
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
        />
    )
}

export default DataShowcase;