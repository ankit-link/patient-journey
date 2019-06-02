import React from 'react';
import TableContent from './TableContent';

class TableHeader extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data: []
        }
        this.newData = []
    }

    componentDidMount() {
    let that = this;
    let obj = {};


    let socket = new WebSocket("ws://stocks.mnet.website");

    socket.onopen = function(event) {
       console.log("Connection established");

    }

    socket.onmessage = function(e){
       var server_message = JSON.parse(e.data);
       console.log(server_message);


       server_message.forEach((price, idx)=>{
//                    debugger
                    let ticker = price[0];

//                    if obj contains ticker
//                        update price
//                       else add ticker

                    if(that.tickerPresent(ticker)) {
                        that.changePrice(ticker, price[1])
                    } else {
                        that.newData.push({
                            ticker,
                            price: price[1],
                            delta: 0
                        })
                    }

                    that.setState({
                        data: that.newData
                    })
               })
    }



    console.log("ComponentDidMount")
        this.timerID = setInterval(
          () => this.tick(),
          3000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }


      tickerPresent(ticker) {
          return this.newData.some(el => el.ticker === ticker)
      }

      changePrice( ticker, price ) {
         for (var key in this.newData) {
           if (this.newData[key].ticker == ticker) {
              const delta = price - this.newData[key].price;
              this.newData[key].price = price;
              this.newData[key].delta = delta
              break; //Stop this loop, we found it!
           }
         }
      }

      tick() {
      console.log("tick invoked")
//        this.generateRandomPrice();
      }

      generateRandomPrice() {
      console.log("hey")
        const noOfFields = (Math.random()*4)+1;
        const randomPrices = [];
        for(let i=0; i<noOfFields; i++) {
            randomPrices[i] = parseFloat(Math.random()*10).toFixed(2);
        }
        console.log("random Prices", randomPrices)
        debugger;
        randomPrices.forEach((price, idx)=>{
            let delta = 'white';
           const data =  this.state.data.map(el => {
           if(el.id === idx) {
            const oldPrice = el.price;
            const newPrice = price - oldPrice;
            delta = newPrice > 0 ? 'green' : 'red';
           }
           return (el.id === idx ? {...el, price, delta} : el)

           })
           this.setState({
            data
           })

        })


      }

  render() {
    return <table className="table table-striped">
                <th>Ticker</th>
                <th>Price</th>
                <TableContent data={this.state.data}/>
            </table>;
  }
}

export default TableHeader;