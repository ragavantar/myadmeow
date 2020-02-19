import React from 'react';
import './App.scss';

import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from './routes';

import Nav from "./components/nav";
import Image from "./components/image";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <Nav></Nav>
        </div>
        <div className="content">
          <Switch>  
            {Routes}
          </Switch>
          Hello
        {/* <Image
        bgImg="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        topImg="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
