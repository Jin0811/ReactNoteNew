import React, { Component } from 'react';

import { nowPlayingData } from "../../mockData";
import FilmItem from "./FilmItem";

class Main extends Component {

  state = {
    list: [],
  };

  componentDidMount(){
    this.setState({ list: nowPlayingData.data.films });
  }

  handleClick = (item) => {
    /**
     * NowPlaying这个组件被挂载到了Route组件当中，Router组件就传递了NowPlaying组件一些路由信息和方法
     * 使得NowPlaying组件可以使用this.props.history.push方法
     * 
     * 而函数式组件当中，无法获取到this，也就无法使用this.props.history.push
     * 但是可以使用useHistory来访问history对象，具体用法，可以参考ComingSoon组件
     */

    // 方式一：动态路由
    this.props.history.push(`/detail/${item.filmId}`);

    // 方式二：query
    // this.props.history.push({ pathname: "/detail", query: { id: item.filmId } });

    // 方式三：state
    // this.props.history.push({ pathname: "/detail", state: { id: item.filmId } });
  }

  render() {
    let { list } = this.state;
    return (
      <div className='now-playing'>
        <h2>NowPlaying</h2>

        {/* { list.map(item => <div className='film-item' key={item.filmId} onClick={() => this.handleClick(item)}>{ item.name }</div>) } */}
        
        { list.map(item => <FilmItem key={item.filmId} filmInfo={item}></FilmItem>) }
        
      </div>
    );
  }
}

export default Main;

