import React, { Component, Fragment } from 'react';

import { comingSoonData } from "../../mockData";

import WithRouter from "../../components/WithRouter";

class ComingSoon extends Component {
  state = {
    list: [],
  };

  componentDidMount(){
    console.log(this.props);
    this.setState({ list: comingSoonData.data.films });
  }

  handleClick = (item) => {
    this.props.history.push(`/detail/${item.filmId}`);
  };

  render() {
    return (
      <Fragment>
        <h3>ComingSoon</h3>
        { this.state.list.map(item => <div style={{ cursor: "pointer" }} key={item.filmId} onClick={() => { this.handleClick(item) }}>{ item.name }</div>) }
      </Fragment>
    );
  }
}

export default WithRouter(ComingSoon);

/**
 * ComingSoon组件也不是被Route包裹的组件，所以也没办法使用this.props.history
 * 类组件当中不能使用useNavigate，而且V6版本当中去除了withRouter，这就导致类组件无法使用withRouter来进行路由跳转
 * 
 * 解决方法：自定义一个withRouter组件
 */