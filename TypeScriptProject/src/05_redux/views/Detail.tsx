import React, { Component } from 'react';

import { RouteComponentProps } from "react-router-dom"; // 引入router当中的接口

interface propsInterface{
  id: string,
  name: string,
}

class Detail extends Component<RouteComponentProps<propsInterface>, any> {

  componentDidMount(){
    console.log(this.props.match.params);
  }

  render() {
    let { params } = this.props.match;
    return (
      <div>
        <h1>Detail</h1>
        {/* 
          第一种方式可以使用断言
          <h2>电影ID为：{ (params as any).id }</h2>
        */}

        {/* 第二种方式可以定义一个接口，传递给RouteComponentProps */}
        <h2>电影ID为：{ params.id }</h2>
        <h2>电影名称为：{ params.name }</h2>
      </div>
    );
  }
}

export default Detail;