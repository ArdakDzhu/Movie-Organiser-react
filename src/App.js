import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

class App extends React.Component {

  state = {
    keyFromServer: '',
  }

  getKey = (key) => {
    this.setState({
      keyFromServer: key
    })
  }

  render() {
    console.log(this.state.keyFromServer)
    return (
      <div className="app">
        <Route path="/" exact> 
          <MainPage getKey={this.getKey}/> 
        </Route>
        <Route path="/list/:id" exact>
          <ListPage keyFromServer={this.state.keyFromServer}/>
        </Route>
      </div>
    );
  }
}

export default App;
