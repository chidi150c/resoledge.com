import React, { Component } from "react";
import ZoomableImage from "./ZoomableImage";
import "../App.css"; // Import your CSS file

class TradingDashboard extends Component {
  render() {
    const { trade, imageSrc } = this.props;
    const asset = (trade.base_balance * trade.current_price + trade.quote_balance)
    return (
      <div className="container">
        <div className="main">
          <div className="content skills-bground">
            <div className="market-data w3-text-green">
              <h2><b>Trading:</b></h2>
              {/* Display live market data */}
              <p className="w3-text-white"><b>1 {trade.base_currency} : </b> {trade.current_price !== undefined ? trade.current_price.toFixed(6) : 'N/A'}{trade.quote_currency}</p>
              {/* ...other market data */}
            </div>
            <div className="performance-metrics w3-text-green">
              <h2><b>Performance Metrics</b></h2>
              {/* Display trading performance metrics */}
              <p className="w3-text-white"><b>Initial Capital:</b>${trade.initial_capital !== undefined ? trade.initial_capital.toFixed(6) : 'N/A'}</p>
              <p className="w3-text-white"><b>Available Balance:</b> ${trade.quote_balance !== undefined ? trade.quote_balance.toFixed(6) : 'N/A'}</p>
              <p className="w3-text-white"><b>Total Profit:</b> ${trade.total_profit_loss !== undefined ? trade.total_profit_loss.toFixed(6) : 'N/A'}</p>
              <p className="w3-text-white"><b>Asset Value:</b>${asset !== undefined ? asset.toFixed(6) : 'N/A'}</p>
              {/* ...other performance metrics */}
            </div>
            <div className="chart"> 
              <ZoomableImage src={imageSrc} />
            </div>
            <div className="feed w3-text-green">
              <h2>Open Trades:</h2>
              {trade.entry_price && trade.entry_quantity && trade.entry_price.length > 0 && trade.entry_quantity.length > 0 ? (
              <table className="statistics w3-text-white">
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
                        {trade.entry_quantity.length > index
                          ? trade.entry_quantity[index]
                          : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              ) : (
                <p className="statistics w3-text-white">No pending trades available</p>
              )}
            </div>
            <div className="statistics w3-text-green">
              <h3><b>Statistics</b></h3>
              {/* Display trading statistics */}
              <p className="statistics w3-text-white"><b>Winning Trades:</b>{trade.closed_win_trades !== undefined ? trade.closed_win_trades.toFixed(6) : 'N/A'}</p>
              <p className="statistics w3-text-white"><b>Total Trades:</b> {trade.trade_count !== undefined ? trade.trade_count.toFixed(6) : 'N/A'}</p>
              {/* ...other trading statistics */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TradingDashboard;
