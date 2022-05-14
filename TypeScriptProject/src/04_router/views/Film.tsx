import React, { Component } from 'react';

import axios from "axios";
import { RouteComponentProps } from "react-router-dom"; // 引入router当中的接口

interface stateInterface{
  list: filmItemInterface[]
}
interface filmItemInterface{
  filmId: number,
  name: string,
  [propName: string]: any, // 剩下的，用不到的属性，可以设置为键为string，值为any类型
}

class Film extends Component<RouteComponentProps, stateInterface> {
  state = {
    list: [],
  };

  componentDidMount(){
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6669715",
      method: "get",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651393709717938143264769","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      }
    }).then(res => {
      this.setState({ list: res.data.data.films });
    });
  }

  handleClick = (item:filmItemInterface) => {
    this.props.history.push(`/detail/${item.filmId}/${item.name}`);
  }

  render() {
    let { list } = this.state;
    return (
      <div>
        <h1>Film</h1>

        <ul>
          { list.map((item:filmItemInterface) => <li onClick={() => { this.handleClick(item) }} key={item.filmId}>{ item.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default Film;