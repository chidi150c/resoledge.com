import React, { Component } from "react";
import "../App.css"; // Import your CSS file

class TradingDashboard extends Component {
  render() {
    const { appdat, trade, imageSrc } = this.props;
    return (
      <div className="container">
        <div className="main">
          <div className="content">
            <div className="market-data">
              <h2><b>Market Data</b></h2>
              {/* Display live market data */}
              <p><b>{trade.symbol}:</b> ${trade.closing_prices}</p>
              <p><b>Signal:</b>{trade.signals}</p>
              {/* ...other market data */}
            </div>
            <div className="performance-metrics">
              <h2><b>Performance Metrics</b></h2>
              {/* Display trading performance metrics */}
              <p><b>Initial Capital:</b>${trade.initial_capital}</p>
              <p><b>Balance OutTrade:</b> ${trade.quote_balance}</p>
              <p><b>Total Profit:</b> ${appdat.target_profit}</p>
              <p><b>Total Trades:</b>{trade.trade_count}</p>
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
              <h3><b>Live Trading Feeds</b></h3>
              {/* Display live trading feeds */}
              <p><b>Buy:</b> BTC/USD @ $45,500</p>
              <p><b>Sell:</b> ETH/USD @ $3,200</p>
              {/* ...other live trading feeds */}
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
