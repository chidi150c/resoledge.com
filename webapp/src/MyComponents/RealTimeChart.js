import React, { Component } from "react";
import {
  LineChart,  // Make sure LineChart is used
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
  ReferenceDot,
} from "recharts";
import * as WebSocket from "websocket";


class RealTimeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],  // Initialize with an empty array
      buySignalData: [],
      sellSignalData: [],
    };
    this.socket = new WebSocket.w3cwebsocket("ws://localhost:35260/margins/ws");
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log("WebSocket connected");
    };

    this.socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      // Update chartData by appending new data and keeping only the last 500 points
      const updatedChartData = [
        ...this.state.chartData.slice(-499),  // Keep the last 499 points
        newData,  // Add the new data point
      ];

      this.setState({
        chartData: updatedChartData,
      });

      if (newData.Signals === "Buy") {
        const buySignalPoints = [...this.state.buySignalData, newData];
        if (buySignalPoints.length > 500) {
          buySignalPoints.shift();
        }

        this.setState({
          buySignalData: buySignalPoints,
        });

      } else if (newData.Signals === "Sell") {
        const sellSignalPoints = [...this.state.sellSignalData, newData];
        if (sellSignalPoints.length > 500) {
          sellSignalPoints.shift();
        }

        this.setState({
          sellSignalData: sellSignalPoints,
        });
      }
    };

    this.socket.onclose = () => {
      console.log("WebSocket closed");
    };
  }

  componentWillUnmount() {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }
  render() {
    // console.log("ChartData:", this.state.sellSignalData); // Log chart data

    return (
      <div className="rtc">
        <h2><b>My Automatic Cryptocurrency Dashboard</b></h2>
        <h2>Combined Scatter and Line Chart</h2>
        <LineChart
          width={800}
          height={400}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          data={this.state.chartData}  // Use the updated chartData
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Timestamps" type="number" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ClosingPrices"
            stroke="#8884d8"
            name="Closing Prices"
          />
          <Line
            type="monotone"
            dataKey="ShortEMA"
            stroke="#82ca9d"
            name="Short EMA"
          />
          <Line
            type="monotone"
            dataKey="LongEMA"
            stroke="#ffc658"
            name="Long EMA"
          />
          
          {/* Use ScatterChart */}
          <ScatterChart 
            width={800}
            height={400}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Timestamps" type="number" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Scatter name="Buy Signals" data={this.state.buySignalData} fill="red">
              {/* ReferenceDots for Buy Signals */}
              {this.state.buySignalData.map((entry, index) => (
                <ReferenceDot
                  key={index}
                  x={entry.Timestamps}
                  y={entry.ClosingPrices}
                  r={55}
                  fill="red"
                  isFront={true}
                />
              ))}
            </Scatter>
            <Scatter name="Sell Signals" data={this.state.sellSignalData} fill="blue">
              {/* ReferenceDots for Sell Signals */}
              {this.state.sellSignalData.map((entry, index) => (
                <ReferenceDot
                  key={index}
                  x={entry.Timestamps}
                  y={entry.ClosingPrices}
                  r={5}
                  fill="blue"
                  isFront={true}
                />
              ))}
            </Scatter>
          </ScatterChart>
          </LineChart>
      </div>
    );
  }
}

export default RealTimeChart;
