import React, { Component } from 'react';

class Main extends Component {
  state = {
    id: ""
  };

  componentDidMount(){
    let id = this.props.match.params.id;
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