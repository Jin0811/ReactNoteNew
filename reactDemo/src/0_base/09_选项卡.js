import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.queryData();
  }


  queryData(){
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6669715",
      method: "get",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651393709717938143264769","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      }
    }).then(res => {
      console.log(res.data.data);
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;