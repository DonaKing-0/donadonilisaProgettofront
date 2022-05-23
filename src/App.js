import logo from './logo.svg';
import './App.css';
import {getOrders, getUsers} from './api/index.js';
import { Fragment } from 'react';
import List from './components/List';


function App() {


  const orders = getOrders();
  const users = getUsers();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <List></List>
      </header>
    </div>
  );
}

export default App;
