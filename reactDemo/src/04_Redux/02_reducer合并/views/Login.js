import React, { Component } from 'react';

class Main extends Component {

  handleLogin = () => {
    localStorage.setItem("token", "123456");
    this.props.history.push("/center");
  }

  render() {
    return (
      <div className='login'>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <button onClick={this.handleLogin}>进行登录</button>
      </div>
    );
  }
}

export default Main;