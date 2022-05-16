import React, { Component } from 'react';

import "./App.scss";
import Dialog from './components/Dialog';

class App extends Component {
  render() {
    return (
      <div className='portal-demo'>
        <div className='left'></div>
        <div className='right'>
          <Dialog></Dialog>
        </div>
      </div>
    );
  }
}

export default App;