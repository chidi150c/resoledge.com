import React, { Component } from "react";
import "../App.css"; // Import your CSS file

class TradingDashboard extends Component {
  render() {
    const { appdat, trade, imageSrc } = this.props;
    const asset = (trade.base_balance * trade.current_price + trade.quote_balance)
    return (
      <div className="container">
        <div className="main">
          <div className="content skills-bground">
            <div className="market-data">
              <h2><b>Auto-Trading On:</b></h2>
              {/* Display live market data */}
              <p><b>{trade.symbol}:</b> ${trade.closing_prices}</p>
              <p><b>Signal:</b>{trade.signals}</p>
              {/* ...other market data */}
            </div>
            <div className="performance-metrics">
              <h2><b>Performance Metrics</b></h2>
              {/* Display trading performance metrics */}
              <p><b>Initial Capital:</b>${trade.initial_capital !== undefined ? trade.initial_capital.toFixed(6) : 'N/A'}</p>
              <p><b>Available Balance:</b> ${trade.quote_balance !== undefined ? trade.quote_balance.toFixed(6) : 'N/A'}</p>
              <p><b>Total Profit:</b> ${appdat.target_profit !== undefined ? appdat.target_profit.toFixed(6) : 'N/A'}</p>
              <p><b>Asset Value:</b>{asset !== undefined ? asset.toFixed(6) : 'N/A'}</p>
              {/* ...other performance metrics */}
            </div>
            <div className="chart"> 
              {imageSrc && (
                  <img
                  src={imageSrc}
                  alt="Received Image" 
                  style={{ maxWidth: "100%", maxHeight: "590px" }}         
                  />
              )}  
            </div>
            <div className="feed">



            <h2>Trade History:</h2>
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Bought Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {trade.entry_price.map((price, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{price}</td>
            <td>
              {trade.entry_quantity && trade.entry_quantity.length > index
                ? trade.entry_quantity[index]
                : 'N/A'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>






            </div>
            <div className="statistics">
              <h3><b>Statistics</b></h3>
              {/* Display trading statistics */}
              <p><b>Winning Trades:</b> 70</p>
              <p><b>Losing Trades:</b> 30</p>
              {/* ...other trading statistics */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TradingDashboard;
