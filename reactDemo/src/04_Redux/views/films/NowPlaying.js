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
    this.props.history.push(`/detail/${item.filmId}`);
  }

  render() {
    let { list } = this.state;
    return (
      <div className='now-playing'>
        <h2>NowPlaying</h2>
        { list.map(item => <FilmItem key={item.filmId} filmInfo={item}></FilmItem>) }
      </div>
    );
  }
}

export default Main;

