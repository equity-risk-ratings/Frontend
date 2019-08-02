import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import automatedDataset from "./dataMap";

//I definied the Charts data outside of the component
let dataVariable = {
  labels: ["Feb", "March", "April", "May"],
  datasets: automatedDataset
};

<<<<<<< HEAD
class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
=======
/* let dataVariableTest = {
  labels: ["July 29th", "July 30th", "July 31st", "Aug 1st"],
  datasets: [
    {
      label: `test`,
      data: [1, 2, 3],
      backgroundColor: "red",
      borderColor: "red",
      fill: false,
      lineTension: 0,
      radius: 2
>>>>>>> c623edb1b05bc6da91ada3adc52042ee8332be42
    }
  ]
} */ class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(automatedDataset);
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={dataVariable}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Stock Price (Feb-Jun 2019)",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
