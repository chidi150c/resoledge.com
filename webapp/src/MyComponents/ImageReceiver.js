import React, { Component } from "react";
import * as WebSocket from "websocket";
import trading2 from '../Assets/trading3.png'; 
import TradingDashboard from "./TradingDashboard";

class ImageReceiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: "",  // Initialize with empty string
      tradingSystem: {    
        ClosingPrices:       [],
        Timestamps:          [],
        Signals:             [],
        NextInvestBuYPrice:  [],
        NextProfitSeLLPrice: [],
        EntryPrice:          [],
        EntryQuantity:       [],
        EntryCostLoss:       [],
        StopLossRecover:     [],
    },
      appData: {},
    };
    this.socket = new WebSocket.w3cwebsocket("ws://176.58.125.70:35260/ImageReceiver/ws"); //localhost 176.58.125.70  
    this.trader = new WebSocket.w3cwebsocket("ws://176.58.125.70:35260/FeedsTradingSystem/ws"); //localhost 176.58.125.70  
    this.appdata = new WebSocket.w3cwebsocket("ws://176.58.125.70:35260/FeedsAppData/ws"); //localhost 176.58.125.70  
  }
 
  componentDidMount() {
    this.socket.onopen = () => {
      console.log("WebSocket connected for Chart Image");
    };
    this.trader.onopen = () => {
      console.log("WebSocket connected For TradingSystem");
    };
    this.appdata.onopen = () => {
      console.log("WebSocket connected For AppData");
    };
    this.socket.onmessage = (event) => {
      const receivedData = event.data;
      this.setState({
        imageData: receivedData,
      });
    };
    this.trader.onmessage = (event) => {
      // console.log("WebSocket received TradingSystem", event.data);
      const receivedData = event.data;
      try {
        const tradingSystemData = JSON.parse(receivedData);
        this.setState({
          tradingSystem: tradingSystemData,
        });
        // console.log("Received tradingSystem data:", tradingSystemData);
      } catch (error) {
        console.error("Error parsing tradingSystem data:", error);
      }
    };
    this.appdata.onmessage = (event) => {
      // console.log("WebSocket received AppData", event.data);
      const receivedData = event.data;
      try {
        const appData = JSON.parse(receivedData);
        this.setState({
          appData: appData,
        });
        // console.log("Received appData data:", appData);
      } catch (error) {
        console.error("Error parsing appData data:", error);
      }
    };
    this.socket.onclose = () => {
      console.log("Image WebSocket closed");
    };
    this.trader.onclose = () => {
      console.log("Trade WebSocket closed");
    };
    this.appdata.onclose = () => {
      console.log("AppData WebSocket closed");
    };
  }

  render() {    
    const { tradingSystem, appData } = this.state;
    // Check if tradingSystem and AppData are defined
    if (!tradingSystem || !appData) {
      return (
        <div className="w3-panel" style={{ padding: '54px 16px!important' }}>
          {/* ...other JSX code */}
          <div className="performance-metrics">
            <h2><b>Performance Metrics</b></h2>
            <p>Loading...</p> {/* Display a loading message */}
          </div>
          {/* ...rest of your JSX code */}
        </div>
      );
    }

    // "symbol":"BNBUSDT","closing_prices":209.6,"timestamps":1694507729,"signals":"Hold","next_invest_buy_price":[209.20796855108333],"next_profit_sell_price":[209.99206588441666],"commission_percentage":0.00075,"initial_capital":54.1,"position_size":0.04948045757864633,"entry_price":[209.6],"in_trade":true,"quote_balance":41.524,"base_balance":0.06,"risk_cost":10.381,"data_point":72,"current_price":209.6,"entry_quantity":[0.06],"scalping":"","strategy_comb_logic":"OR","entry_cost_loss":[0.009432],"trade_count":1,"trading_level":0,"closed_win_trades":0,"enable_stoploss":true,"stop_loss_triggered":false,"stop_loss_recover":[1.7976931348623157e+308],"risk_factor":2,"max_data_size":500,"risk_profit_loss_percentage":0.00025,"base_currency":"BNB","quote_currency":"USDT","mini_qty":0.01,"max_qty":9000,"min_notional":10,"step_size":0.01}

    const winRate = (tradingSystem.closed_win_trades / tradingSystem.trade_count) * 100;
    const entryPrice = tradingSystem.entry_price ? tradingSystem.entry_price[tradingSystem.entry_price.length - 1] : null;
    const entryQuantity = tradingSystem.entry_quantity ? tradingSystem.entry_quantity[tradingSystem.entry_quantity.length - 1] : null;
    const nextProfitSellPrice = tradingSystem.next_profit_sell_price ? tradingSystem.next_profit_sell_price[tradingSystem.next_profit_sell_price.length - 1] : null;
    const nextInvestBuyPrice = tradingSystem.next_invest_buy_price ? tradingSystem.next_invest_buy_price[tradingSystem.next_invest_buy_price.length - 1] : null;
    const entryCostLoss = tradingSystem.entry_cost_loss ? tradingSystem.entry_cost_loss[tradingSystem.entry_cost_loss.length - 1] : null;
    const stopLossRecover = tradingSystem.stop_loss_recover ? tradingSystem.stop_loss_recover[tradingSystem.stop_loss_recover.length - 1] : null;
    
    return (
      <div className="w3-panel" id="w3qtr2mod">
        <div className="header skills-bground lfeed" id="skround">
          <h2 className="w3-text-white"><b>Automatic Cryptocurrency Trading Dashboard</b></h2>
        </div>
        <div className="w3-row-padding" id="chart" >  
          <div className="w3-half lfeed" style={{marginBottom: '20px', padding: '0 0 0 16px'}}>
          <h2 style={{color: 'white'}}>Chart</h2>
            <TradingDashboard 
              appdat={appData} 
              trade={tradingSystem} 
              imageSrc={this.state.imageData ? `data:image/png;base64,${this.state.imageData}` : ""}
            />
          </div>        
          <div className="w3-quarter lfeed" id="lfeedbox">
            <h2 style={{color: 'white'}}>Live Feed</h2>
            <table className="w3-text-white w3-table skills-bground">
            <tbody>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Trading Symbol</b></td>
                <td><i>{tradingSystem.symbol}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
                <td><b>{tradingSystem.base_currency} Current Price</b></td>
                <td><i>{tradingSystem.current_price !== undefined ? tradingSystem.current_price.toFixed(6) : 'N/A'}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                <td><b>Initial Capital</b></td>
                <td><i>{tradingSystem.initial_capital !== undefined ? tradingSystem.initial_capital.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Total Trades</b></td>
                <td><i>{tradingSystem.trade_count} trades</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-total_profitalt w3-text-green w3-large"></i></td>
                <td><b>Polled Data Points</b></td>
                <td><i>{tradingSystem.data_point} pts</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td><b>Total Profit</b></td>
                <td><i>{appData.total_profit_loss !== undefined ? appData.total_profit_loss.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                <td><b>Current Quote Balance</b></td>
                <td><i>{tradingSystem.quote_balance !== undefined ? tradingSystem.quote_balance.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                <td><b>Current Base Balance</b></td>
                <td><i>{tradingSystem.base_balance !== undefined ? tradingSystem.base_balance.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td><b>Risk Position Percentage</b></td>
                <td><i>{appData.risk_position_percentage !== undefined ? appData.risk_position_percentage.toFixed(6)*100 : 'N/A'}%</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Last Quantity Traded</b></td>
                <td><i>{entryQuantity !== null ? entryQuantity.toFixed(6) : 'N/A'}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Last Bought Price</b></td>
                <td><i>{entryPrice !== null ? entryPrice.toFixed(6) : 'N/A'}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Next Buy Price</b></td>
                <td><i>Below {nextInvestBuyPrice !== null ? nextInvestBuyPrice.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Next Sell Price</b></td>
                <td><i>Above {nextProfitSellPrice !== null ? nextProfitSellPrice.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Trading Fee Rate</b></td>
                <td><i>{tradingSystem.commission_percentage}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Entry Fee</b></td>
                <td><i>{entryCostLoss !== null ? entryCostLoss.toFixed(6) : 'N/A'}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Target Profit (closed trade)</b></td>
                <td><i>{appData.target_profit !== undefined ? appData.target_profit.toFixed(6) : 'N/A'}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Target Stop Loss</b></td>
                <td><i>-{appData.target_stop_loss !== undefined ? appData.target_stop_loss.toFixed(6) : 'N/A'}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Stoploss Enabled</b></td>
                <td><i>{tradingSystem.enable_stoploss === true ? "Yes" : "No"}</i></td>
              </tr>
              {/* WebSocket received AppData {"id":113,"data_point":0,"strategy":"EMA","short_period":10,"long_period":30,"short_ema":214.3690313612198,"long_ema":214.39754837182645,"target_profit":0.013515598430000001,"target_stop_loss":0.013515598430000001,"":0.25,"total_profit_loss":0} */}
              {/* "in_trade":false,"":true,"":false,":1.7976931348623157e+308,"risk_factor":2,"max_data_size":500,"risk_profit_loss_percentage":0.00025,"base_currency":"BNB","quote_currency":"USDT","mini_qty":0.001,"max_qty":900000,"min_notional":5,"step_size":0.001} */}
              {/* "trading_level":0,"closed_win_trades":0,"enable_stoploss":true,"sto */}
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td><b>Stoploss Triggered At:</b></td>
                <td><i>{stopLossRecover !== null ? stopLossRecover.toFixed(6) : 'N/A'} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td><b>Trading Level</b></td>
                <td><i>{tradingSystem.trading_level}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Closed Win Trades</b></td>
                <td><i>{tradingSystem.closed_win_trades}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td><b>Win Rate</b></td>
                <td><i>{winRate !== undefined ? winRate.toFixed(2) : "N/A Now" }%</i></td>
              </tr>
            </tbody>
            </table>
          </div>
          <div className="w3-quarter" id="w3qtrmod">
            <img src={trading2} width="100%" height="100%" alt="Trading Chart" />            
          </div>
        </div>
      </div>
      //   <div className="graph-container">
      //       <div className="rtc1">        
      //           
      //           
      //       </div>
      //       <div className="rtc2">
      //           <h2><b>Trading Statistics</b></h2>
              
      //       </div>
      //       <div className="rtc2"> 
      //       

      //       </div>
      //  </div>
    );
  }
}
export default ImageReceiver;
