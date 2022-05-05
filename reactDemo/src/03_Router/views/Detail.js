import React, { Component } from 'react';

class Main extends Component {
  state = {
    id: ""
  };

  componentDidMount(){
    console.log(this.props);
    // 方式一：动态路由
    let id = this.props.match.params.id;

    // 方式二：query
    // let id = this.props.location.query.id;

    // 方式三：state
    // let id = this.props.location.state.id;

    this.setState({ id });
  }

  handleBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className='detail'>
        <h1>Detail - { this.state.id }</h1>

        <button onClick={this.handleBack}>返回</button>
      </div>
    );
  }
}

export default Main;