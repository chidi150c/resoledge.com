import React, { Component } from "react";
import * as WebSocket from "websocket";
// import trading2 from '../Assets/trading2.PNG'; 
import TradingDashboard from "./TradingDashboard";

class ImageReceiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: "",  // Initialize with empty string
      tradingSystem: {},
      appData: {},
    };
    this.socket = new WebSocket.w3cwebsocket("ws://localhost:35260/ImageReceiver/ws"); //176.58.125.70  localhost
    this.trader = new WebSocket.w3cwebsocket("ws://localhost:35260/FeedsTradingSystem/ws"); //176.58.125.70  localhost
    this.appdata = new WebSocket.w3cwebsocket("ws://localhost:35260/FeedsAppData/ws"); //176.58.125.70  localhost
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
      console.log("WebSocket received TradingSystem", event.data);
      const receivedData = event.data;
      try {
        const tradingSystemData = JSON.parse(receivedData);
        this.setState({
          tradingSystem: tradingSystemData,
        });
        console.log("Received tradingSystem data:", tradingSystemData);
      } catch (error) {
        console.error("Error parsing tradingSystem data:", error);
      }
    };
    this.appdata.onmessage = (event) => {
      console.log("WebSocket received AppData", event.data);
      const receivedData = event.data;
      try {
        const appData = JSON.parse(receivedData);
        this.setState({
          appData: appData,
        });
        console.log("Received appData data:", appData);
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
    return (
      <div className="w3-panel" style={{padding: '54px 16px!important'}}>
        <div className="header">
          <h2 style={{color: 'white'}}><b>My Automatic Cryptocurrency Trading Dashboard</b></h2>
        </div>
        <div className="w3-row-padding" id="chart" >          
          <div className="w3-quarter">
            <h2 style={{color: 'white'}}>Trading System Feeds</h2>
            <table className="w3-table w3-striped w3-white">
            <tbody>
              <tr>
                <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                <td><b>Trading Symbol</b></td>
                <td><i>{tradingSystem.symbol}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
                <td><b>{tradingSystem.base_currency} Current Price</b></td>
                <td><i>{tradingSystem.current_price}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                <td><b>Initial Capital</b></td>
                <td><i>{tradingSystem.initial_capital} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                <td><b>Total Trades</b></td>
                <td><i>{tradingSystem.trade_count} trades</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td><b>Total Profit</b></td>
                <td><i>{appData.target_profit} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                <td><b>Current Quote Balance</b></td>
                <td><i>{tradingSystem.quote_balance} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                <td><b>Current Base Balance</b></td>
                <td><i>{tradingSystem.base_balance} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                <td><b>Last Quantity Traded</b></td>
                <td><i>{tradingSystem.entry_quantity}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                <td><b>Last Bought Price</b></td>
                <td><i>{tradingSystem.entry_price}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                <td><b>Next Buy Price</b></td>
                <td><i>Below {tradingSystem.next_invest_buy_price} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                <td><b>Next Sell Price</b></td>
                <td><i>Above {tradingSystem.next_profit_sell_price} USDT</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                <td><b>Buy/Sell Boundary</b></td>
                <td><i>{tradingSystem.stop_loss_recover}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                <td><b>Polled Data Points</b></td>
                <td><i>{tradingSystem.data_point} pts</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Trading Fee Rate</b></td>
                <td><i>{tradingSystem.commission_percentage}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Entry Fee</b></td>
                <td><i>{tradingSystem.entry_cost_loss}</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Enable Stoploss</b></td>
                <td><i>{tradingSystem.enable_stoploss}</i></td>
              </tr>
              {/* WebSocket received AppData {"id":113,"data_point":0,"strategy":"EMA","short_period":10,"long_period":30,"short_ema":214.3690313612198,"long_ema":214.39754837182645,"target_profit":0.013515598430000001,"target_stop_loss":0.013515598430000001,"risk_position_percentage":0.25,"total_profit_loss":0} */}
              {/* "in_trade":false,"enable_stoploss":true,"":false,":1.7976931348623157e+308,"risk_factor":2,"max_data_size":500,"risk_profit_loss_percentage":0.00025,"base_currency":"BNB","quote_currency":"USDT","mini_qty":0.001,"max_qty":900000,"min_notional":5,"step_size":0.001} */}
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td><b>Stoploss Triggered At:</b></td>
                <td><i>{tradingSystem.stop_loss_triggered} USDT</i></td>
              </tr>
            </tbody>
            </table>
          </div>
          <div className="w3-container w3-half">
          <h2 style={{color: 'white'}}>Chart</h2>
            <TradingDashboard 
              appdat={appData} 
              trade={tradingSystem} 
              imageSrc={this.state.imageData ? `data:image/png;base64,${this.state.imageData}` : ""}
            />
          </div>
          <div className="w3-quarter">
            <h2 style={{color: 'white'}}>Feeds</h2>
            <table className="w3-table w3-striped w3-white">
            <tbody>
              <tr>
                <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                <td>New record, over 90 views.</td>
                <td><i>10 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td>Database error.</td>
                <td><i>15 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                <td>New record, over 40 users.</td>
                <td><i>17 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
                <td>New comments.</td>
                <td><i>25 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                <td>Check transactions.</td>
                <td><i>28 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                <td>CPU overload.</td>
                <td><i>35 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td>New shares.</td>
                <td><i>39 mins</i></td>
              </tr>

            </tbody>
            </table>
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
